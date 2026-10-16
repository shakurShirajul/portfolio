import { JSDOM } from "jsdom";
import { getPayload, type SanitizedConfig } from "payload";
import { convertHTMLToLexical, editorConfigFactory } from "@payloadcms/richtext-lexical";
import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";
import legacyBlogs from "./data/blogs.json";

// Payload supplies the loaded config and preserves CLI flags for this custom command.
export async function script(config: SanitizedConfig) {
  try {
    await migrateBlogs(config);
  } catch (error) {
    // Payload's custom-command runner logs rejected scripts but otherwise exits 0.
    console.error("Blog migration failed:", error);
    process.exit(1);
  }
}

async function migrateBlogs(config: SanitizedConfig) {
  const dryRun = process.argv.includes("--dry-run");
  const payload = await getPayload({ config });

  try {
    const editorConfig = await editorConfigFactory.default({ config: payload.config });
    const normalizeText = (value: string) => value.replace(/\s+/g, "");

    // Convert and validate every article before writing the first record.
    const prepared = legacyBlogs.map((blog) => {
      const content = convertHTMLToLexical({ editorConfig, html: blog.content, JSDOM });
      const dom = new JSDOM(blog.content);
      const originalText = dom.window.document.body.textContent ?? "";
      dom.window.close();
      if (normalizeText(originalText) !== normalizeText(convertLexicalToPlaintext({ data: content }))) {
        throw new Error(`HTML conversion changed article text: ${blog.slug}`);
      }

      return {
        ...blog,
        content,
        generateSlug: false,
        publishedAt: new Date(blog.publishedAt).toISOString(),
        createdAt: new Date(blog.publishedAt).toISOString(),
        updatedAt: new Date(blog.updatedAt ?? blog.publishedAt).toISOString(),
        _status: "published" as const,
      };
    });

    let created = 0;
    let skipped = 0;
    for (const data of prepared) {
      // Include drafts: a previously edited or unpublished CMS post must never be overwritten.
      const existing = await payload.find({
        collection: "blogs",
        where: { slug: { equals: data.slug } },
        draft: true,
        depth: 0,
        limit: 1,
        overrideAccess: true,
      });
      if (existing.docs.length) {
        console.log(`Skipped existing post: ${data.slug}`);
        skipped++;
        continue;
      }
      if (dryRun) {
        console.log(`Ready to import: ${data.slug}`);
        continue;
      }

      // Privileged, local-only migration. Normal API requests still enforce collection access.
      const post = await payload.create({
        collection: "blogs",
        data,
        draft: false,
        depth: 0,
        overrideAccess: true,
        context: { migrateLegacyBlogs: true },
      });
      if (
        post.slug !== data.slug || post._status !== "published" ||
        post.publishedAt !== data.publishedAt || post.updatedAt !== data.updatedAt ||
        post.readingTime !== data.readingTime ||
        normalizeText(convertLexicalToPlaintext({ data: post.content })) !==
          normalizeText(convertLexicalToPlaintext({ data: data.content }))
      ) {
        throw new Error(`Imported post needs review: ${data.slug}`);
      }
      created++;
      console.log(`Imported and published: ${post.slug}`);
    }

    console.log(`${dryRun ? "Dry run" : "Migration"} complete: ${created} created, ${skipped} skipped, ${prepared.length} source posts.`);
  } finally {
    await payload.destroy();
  }
}
