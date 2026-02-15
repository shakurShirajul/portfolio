import Link from "next/link";
import { Github, Linkedin, Facebook, Heart } from "lucide-react";
import data from "@/lib/data.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    Github: Github,
    LinkedIn: Linkedin,
    Facebook: Facebook,
  };

  return (
    <footer className="mt-16 border-t">
      <div className="max-w-7xl mx-auto px-3 py-8 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Shirajul Islam Shakur</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer passionate about building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link 
                href="/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/blogs" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/#projects" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              {data.socials
                .filter((social) => social.link && social.name !== "Reddit")
                .map((social) => {
                  const Icon = socialIcons[social.name];
                  return Icon ? (
                    <Link
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  ) : null;
                })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Shakur Shirajul. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> using Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
