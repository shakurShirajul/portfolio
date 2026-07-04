import { cn } from "@/lib/utils";
import Experiences from "./_components/experiences";
import Hero from "./_components/hero";
import Educations from "./_components/educations";
import Stacks from "./_components/stacks";
import ContactForm from "./_components/contact-form";
import Projects from "./_components/projects";
export default function Home() {
  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden bg-background",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)]",
          "bg-size-[44px_44px]",
        )}
      >
        <Hero />
      </div>
      <Experiences />
      <Educations/>
      <Stacks/>
      <Projects/>
      <ContactForm/>
    </div>
  );
}
