"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Send } from "lucide-react";
import { contactDetails, socials } from "@/lib/data";
import { Kbd } from "@/components/ui/kbd";
import { toast } from "sonner";
import { useState } from "react";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values: ContactFormValues = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as
        | { message?: string; error?: string }
        | undefined;

      if (!response.ok) {
        toast.error(data?.error ?? "Failed to send message.");
        return;
      }

      toast.success(data?.message ?? "Message sent successfully.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto w-full mt-10 px-4 md:px-8 space-y-6">
      <h1 className="font-gabarito text-2xl font-semibold">Get In Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <aside className="md:col-span-2 border rounded-lg p-5 space-y-5">
          <h2 className="font-gabarito text-lg font-semibold">Connect</h2>

          <ul className="divide-y divide-border">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3 transition-colors hover:text-foreground"
                >
                  <Image
                    src={social.logo}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                  <span className="flex-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.name}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-3 pt-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Direct
            </p>
            <ul className="space-y-2.5">
              {contactDetails.map((item) => {
                const content = (
                  <>
                    <Kbd>
                      <item.icon />
                    </Kbd>
                    <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {item.label}
                    </span>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center gap-3"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-3 space-y-4 flex flex-col h-full border rounded-lg p-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mail@example.com"
                required
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 min-h-0 space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              className="flex-1 resize-none field-sizing-none min-h-32"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <div className="flex justify-end pt-5">
            <Button type="submit" disabled={isSubmitting}>
              <Send />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
