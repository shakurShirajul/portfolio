import { cn } from "@/lib/utils";
import { personSchema } from "@/lib/person-schema";
import { SITE_URL } from "@/lib/site";
import Experiences from "./_components/experiences";
import Hero from "./_components/hero";
import Educations from "./_components/educations";
import Stacks from "./_components/stacks";
import ContactForm from "./_components/contact-form";
import Projects from "./_components/projects";
export default function Home() {
  const jsonLd = [
    personSchema,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Shirajul Islam Shakur",
      description:
        "Portfolio of Shirajul Islam Shakur, a full-stack developer building production web applications and WordPress plugins.",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div
        className={cn(
          "relative overflow-hidden bg-background",
          "bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]",
          "bg-size-[44px_44px]",
        )}
      >
        <Hero />
      </div>
      {/* Shipped work first: it is what a visitor evaluating me is here for.
          Education sits last — it is context, not the reason to hire. */}
      <Projects />
      <Experiences />
      <Stacks />
      <Educations />
      <ContactForm />
    </div>
  );
}
