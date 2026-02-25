"use client";
import { LucideSend } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Message sent successfully!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
      position: "top-center",
    });
  };
  return (
    <Card className="w-full p-4 sm:p-5 md:p-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold playfair-display">
        Get In Touch
      </h1>
      <div>
        <form className="space-y-4 merriweather" onSubmit={handleFormSubmit}>
          <fieldset className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="your.email@example.com"
            />
          </fieldset>
          <fieldset className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              required
              className="h-20"
              id="message"
              placeholder="Enter your message here..."
            />
          </fieldset>
          <div className="text-right">
            <Button variant="outline">
              <LucideSend size={16} />
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
