import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "./collections/User";

export default buildConfig({
  editor: lexicalEditor(),
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
    Users
  ],
});
