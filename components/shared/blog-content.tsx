import {
  LinkJSXConverter,
  RichText,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";
import type { Blog } from "@/shared/payload-types";

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({
    internalDocToHref: ({ linkNode }) => {
      const doc = linkNode.fields.doc;
      if (doc?.relationTo === "blogs" && typeof doc.value === "object" && doc.value?.slug) {
        return `/blogs/${encodeURIComponent(String(doc.value.slug))}`;
      }
      return "/blogs";
    },
  }),
});

export default function BlogContent({ content }: { content: Blog["content"] }) {
  return (
    <RichText
      data={content}
      converters={converters}
      className="mt-10 space-y-6 text-[1.05rem] leading-8 text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-5 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:font-mono [&_code]:text-sm [&_h2]:pt-6 [&_h2]:font-gabarito [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-foreground [&_h3]:pt-4 [&_h3]:font-gabarito [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:ml-5 [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2"
    />
  );
}
