import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";
import type { Blog } from "@/shared/payload-types";
import {
  slugField,
  type Access,
  type CollectionConfig,
  type TextFieldSingleValidation,
} from "payload";

const isEditor: Access = ({ req: { user } }) => user?.collection === "users";

const validateThumbnail: TextFieldSingleValidation = (value) => {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password
      ? true
      : "Use an HTTPS image URL without credentials.";
  } catch {
    return "Enter a valid HTTPS image URL.";
  }
};

const validateThumbnailAlt: TextFieldSingleValidation = (value, { siblingData }) =>
  !(siblingData as Partial<Blog>)?.thumbnail || value?.trim()
    ? true
    : "Add alternative text for the thumbnail.";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  labels: { singular: "Blog post", plural: "Blog posts" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "_status", "category", "publishedAt", "updatedAt"],
    listSearchableFields: ["title", "slug", "excerpt"],
    description: "Write and publish blog posts. Save a draft to keep unfinished changes private.",
  },
  access: {
    create: isEditor,
    update: isEditor,
    delete: isEditor,
    readVersions: isEditor,
    read: ({ req: { user } }) =>
      user?.collection === "users" ? true : { _status: { equals: "published" } },
  },
  defaultSort: "-publishedAt",
  versions: {
    drafts: {
      autosave: { interval: 2000, showSaveDraftButton: true },
    },
    maxPerDoc: 50,
  },
  hooks: {
    beforeChange: [
      ({ data, originalDoc, context }) => {
        const content = data.content === undefined ? originalDoc?.content : data.content;
        const text = content?.root ? convertLexicalToPlaintext({ data: content }).trim() : "";
        const wordCount = text ? text.split(/\s+/).length : 0;
        if (context.migrateLegacyBlogs !== true || !data.readingTime) {
          data.readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
        }

        if (data._status === "published" && !data.publishedAt) {
          data.publishedAt = originalDoc?.publishedAt || new Date().toISOString();
        }

        return data;
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 200,
    },
    slugField(),
    {
      type: "tabs",
      tabs: [
        {
          label: "Article",
          fields: [
            {
              name: "excerpt",
              type: "textarea",
              required: true,
              admin: { description: "A short introduction for the blog listing." },
            },
            {
              name: "content",
              type: "richText",
              required: true,
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              name: "seoTitle",
              type: "text",
              admin: { description: "Optional search title. Leave blank to use the article title." },
            },
            {
              name: "description",
              label: "Meta description",
              type: "textarea",
              required: true,
              admin: { description: "Summary for search engines and social sharing." },
            },
          ],
        },
        {
          label: "Thumbnail",
          fields: [
            {
              name: "thumbnail",
              label: "Image URL",
              type: "text",
              admin: { description: "Paste the HTTPS URL of your image, for example from Cloudinary." },
              validate: validateThumbnail,
            },
            {
              name: "thumbnailAlt",
              label: "Alternative text",
              type: "text",
              admin: { description: "Describe the image for readers using assistive technology." },
              validate: validateThumbnailAlt,
            },
            {
              type: "row",
              fields: [
                {
                  name: "thumbnailWidth",
                  type: "number",
                  min: 1,
                  admin: { description: "Original image width in pixels.", step: 1 },
                },
                {
                  name: "thumbnailHeight",
                  type: "number",
                  min: 1,
                  admin: { description: "Original image height in pixels.", step: 1 },
                },
              ],
            },
          ],
        },
        {
          label: "FAQs",
          fields: [
            {
              name: "faqs",
              label: "Frequently asked questions",
              type: "array",
              fields: [
                { name: "question", type: "text", required: true },
                { name: "answer", type: "textarea", required: true },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "author",
      type: "text",
      required: true,
      defaultValue: ({ user }) => user?.name || "Shirajul Islam Shakur",
      admin: { position: "sidebar", description: "The public author name shown on the article." },
    },
    {
      name: "category",
      type: "text",
      required: true,
      admin: { position: "sidebar", description: "For example, Engineering or Security." },
    },
    {
      name: "publishedAt",
      type: "date",
      index: true,
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayAndTime" },
        description: "Set automatically on first publish. Change it to backdate a post; this does not schedule publication.",
      },
    },
    {
      name: "readingTime",
      type: "text",
      admin: {
        position: "sidebar",
        readOnly: true,
        description: "Calculated from the article at 200 words per minute when saved.",
      },
    },
  ],
};
