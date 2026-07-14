"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, LoaderCircle, Send } from "lucide-react";
import { contactDetails, socials } from "@/lib/data";
import { Kbd } from "@/components/ui/kbd";
import { toast } from "sonner";
import { useState } from "react";
import {
  CONTACT_FIELDS,
  CONTACT_LIMITS,
  ContactField,
  ContactFieldErrors,
  normalizeContactFormValues,
  validateContactForm,
} from "@/lib/contact";

interface ContactApiResponse {
  message?: string;
  error?: string;
  fieldErrors?: ContactFieldErrors;
}

function focusFirstInvalidField(
  form: HTMLFormElement,
  errors: ContactFieldErrors,
) {
  const firstInvalidField = CONTACT_FIELDS.find((field) => errors[field]);

  if (!firstInvalidField) return;

  requestAnimationFrame(() => {
    const element = form.elements.namedItem(firstInvalidField);

    if (element instanceof HTMLElement) {
      element.focus();
    }
  });
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [formError, setFormError] = useState("");

  function clearFieldError(field: ContactField) {
    setFieldErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });

    if (formError) setFormError("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = normalizeContactFormValues(Object.fromEntries(formData));
    const validationErrors = validateContactForm(values);

    setFormError("");

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      focusFirstInvalidField(form, validationErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => undefined)) as
        | ContactApiResponse
        | undefined;

      if (!response.ok) {
        const serverFieldErrors = data?.fieldErrors ?? {};

        setFieldErrors(serverFieldErrors);
        setFormError(
          data?.error ??
            "We couldn’t send your message. Check your connection and try again.",
        );
        focusFirstInvalidField(form, serverFieldErrors);
        return;
      }

      toast.success(data?.message ?? "Message sent successfully.");
      form.reset();
      setFieldErrors({});
      setFormError("");
    } catch (error) {
      console.error(error);
      setFormError(
        "We couldn’t send your message. Check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="max-w-4xl mx-auto w-full mt-10 scroll-mt-24 px-4 md:px-8 space-y-6"
    >
      <h2 id="contact-heading" className="font-gabarito text-2xl font-semibold">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <aside className="md:col-span-2 border rounded-lg p-5 space-y-5">
          <h3 className="font-gabarito text-lg font-semibold">Connect</h3>

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
          noValidate
          aria-busy={isSubmitting}
          className="relative md:col-span-3 space-y-4 flex flex-col h-full border rounded-lg p-5"
        >
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] top-auto size-px overflow-hidden"
          >
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                minLength={CONTACT_LIMITS.name.min}
                maxLength={CONTACT_LIMITS.name.max}
                placeholder="e.g., John Doe…"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                onChange={() => clearFieldError("name")}
                required
              />
              {fieldErrors.name ? (
                <p id="name-error" className="text-xs text-destructive">
                  {fieldErrors.name}
                </p>
              ) : null}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                spellCheck={false}
                maxLength={CONTACT_LIMITS.email.max}
                placeholder="you@example.com…"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                onChange={() => clearFieldError("email")}
                required
              />
              {fieldErrors.email ? (
                <p id="email-error" className="text-xs text-destructive">
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col flex-1 min-h-0 space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              className="flex-1 resize-none field-sizing-none min-h-32"
              autoComplete="off"
              minLength={CONTACT_LIMITS.message.min}
              maxLength={CONTACT_LIMITS.message.max}
              placeholder="Tell me about your project…"
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              onChange={() => clearFieldError("message")}
              required
            />
            {fieldErrors.message ? (
              <p id="message-error" className="text-xs text-destructive">
                {fieldErrors.message}
              </p>
            ) : null}
          </div>

          <div aria-live="polite" aria-atomic="true">
            {formError ? (
              <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {formError}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-xs leading-5 text-muted-foreground">
              Your details are used only to respond to your message. Read the{" "}
              <Link
                href="/privacy"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoaderCircle
                  aria-hidden="true"
                  className="animate-spin motion-reduce:animate-none"
                />
              ) : (
                <Send aria-hidden="true" />
              )}
              <span>{isSubmitting ? "Sending…" : "Send Message"}</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
