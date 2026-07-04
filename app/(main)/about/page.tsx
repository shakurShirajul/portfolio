import Image from "next/image";
import shakur from "../../../public/shakur.png";
import { socials } from "@/lib/data";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 w-full pt-30">
      <div className="flex items-center justify-start gap-4">
        <Image
          src={shakur}
          alt="shakur"
          width={72}
          height={72}
          className="rounded-full"
        />
        <div className="font-gabarito">
          <h1>Shirajul Islam Shakur</h1>
          <p className="text-muted-foreground">
            Junior Developer - Chattogram, Bangladesh
          </p>
        </div>
      </div>
      <div className="space-y-14 mt-6">
        <div>
          <p className="text-muted-foreground">I develop website, play games and read books.</p>
        </div>
        <div >
          <p className="mb-4">The Story Of Me</p>
          <p className="text-muted-foreground">
            I started programming with a simple curiosity about how websites
            work. That curiosity quickly turned into competitive programming,
            where solving algorithmic problems taught me to think logically,
            stay patient with difficult challenges, and care about writing
            efficient code.
          </p>
          <br />
          <p className="text-muted-foreground">
            One thing led to another. Problem-solving became web development,
            small projects became full-stack applications, and learning
            individual technologies grew into working across the <strong>MERN stack
            and PHP Laravel</strong>. Today, I build responsive, scalable applications
            using tools like <strong>React, Node.js, Express.js, MongoDB, MySQL,
            TypeScript, and Tailwind CSS</strong>, with a strong focus on performance
            and clean architecture.
          </p>
          <br />
          <p className="text-muted-foreground">
            I currently work as a developer at <strong>Bit Code</strong>, where I continue
            learning by solving real-world problems and building software for
            actual users. Outside of coding, I enjoy <strong>gaming and reading</strong> two
            things that keep me curious, creative, and always looking at problems
            from a different perspective.
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-4">
        <h1>Get In Touch</h1>
        <div className="flex gap-4">
          {
            socials.map((social)=>
              <Link key={social.name} href={social.link} target="_blank" className="transition-transform hover:scale-110 active:scale-95">
                <Image src={social.logo} alt={social.name} width={32} height={32}/>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
}
