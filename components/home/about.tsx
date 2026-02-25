import { Card } from "../ui/card";

export default function About() {
  return (
    <Card className="p-4 sm:p-5 md:p-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold playfair-display">About Me</h1>
      <div>
        <p className="w-full text-justify merriweather">
          I&apos;m Shirajul Islam Shakur, a Full Stack Developer specializing in
          the MERN stack and PHP Laravel development. I build scalable,
          responsive web applications that solve real-world problems and deliver
          exceptional user experiences. My expertise includes modern web
          technologies such as React, Node.js, Express.js, MongoDB, MySQL,
          Tailwind CSS, and TypeScript. As a competitive programmer, I bring
          strong problem-solving skills, algorithmic thinking, and
          performance-focused coding to every project. I&apos;m passionate about
          clean code, performance optimization, and staying current with
          emerging web technologies. Explore my projects to see my work in
          action, and feel free to connect if you&apos;d like to collaborate!
        </p>
      </div>
    </Card>
  );
}
