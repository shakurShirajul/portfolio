import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { FixedToolbarFeature, LinkFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { Blogs } from "@/collections/blogs";
import { Users } from "./collections/User";

export default buildConfig({
  bin: [
    {
      key: "migrate-blogs",
      scriptPath: path.resolve(process.cwd(), "scripts/migrate-blogs.ts"),
    },
  ],
  admin: { user: "users" },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter(({ key }) => !["link", "relationship", "upload"].includes(key)),
      LinkFeature({ enabledCollections: ["blogs"] }),
      FixedToolbarFeature(),
    ],
  }),
  typescript: {
    outputFile: path.resolve(process.cwd(), "shared/payload-types.ts"),
  },
  secret: process.env.PAYLOAD_SECRET!,
  db: mongooseAdapter({
    url: process.env.DATABASE_URL!,
  }),
  collections: [
    {
      slug: "pages",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
      ],
    },
    Users,
    Blogs,
  ],
});
