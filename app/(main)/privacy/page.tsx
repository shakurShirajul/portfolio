import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how information submitted through Shirajul Islam Shakur's portfolio contact form is collected, used, and protected.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 pb-16 pt-32 md:px-8">
      <header className="border-b pb-8">
        <p className="text-sm font-medium text-primary">Your privacy</p>
        <h1 className="mt-2 font-gabarito text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          This policy explains what information is handled when you use the
          contact form on this portfolio and how that information is used.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: July 14, 2026
        </p>
      </header>

      <div className="mt-10 space-y-10 leading-7 text-muted-foreground">
        <section aria-labelledby="information-collected">
          <h2
            id="information-collected"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Information collected
          </h2>
          <p className="mt-3">
            When you submit the contact form, you provide your name, email
            address, and message. The server also reads your IP address to
            limit repeated submissions and reduce spam. The form does not ask
            for payment information, passwords, or sensitive identity data.
          </p>
        </section>

        <section aria-labelledby="information-use">
          <h2
            id="information-use"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            How your information is used
          </h2>
          <p className="mt-3">Your information is used only to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Read and respond to your inquiry.</li>
            <li>Discuss a project, opportunity, or question you submitted.</li>
            <li>Protect the form from spam, abuse, and excessive requests.</li>
            <li>Diagnose delivery or security problems.</li>
          </ul>
        </section>

        <section aria-labelledby="service-providers">
          <h2
            id="service-providers"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Services involved
          </h2>
          <p className="mt-3">
            This website is hosted by Vercel. When you submit the form, your
            name, email address, and message are sent through the Telegram Bot
            API to a private Telegram chat so the message can be received and
            answered. These providers may process technical or message data
            under their own privacy and security terms.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href="https://vercel.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Vercel Privacy Policy
            </a>
            <a
              href="https://telegram.org/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Telegram Privacy Policy
            </a>
          </div>
        </section>

        <section aria-labelledby="retention">
          <h2
            id="retention"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Storage and retention
          </h2>
          <p className="mt-3">
            Contact form messages are not saved in a website database. They
            are delivered to Telegram and may remain in the private account
            for as long as reasonably needed to answer your inquiry and keep
            relevant correspondence. The temporary IP rate-limit record
            expires after approximately 10 minutes. Hosting providers may
            retain routine technical logs according to their own policies.
          </p>
        </section>

        <section aria-labelledby="sharing">
          <h2
            id="sharing"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Sharing your information
          </h2>
          <p className="mt-3">
            Your personal information is not sold or rented. It is shared only
            with the service providers needed to host the website and deliver
            your message, or when disclosure is required by law.
          </p>
        </section>

        <section aria-labelledby="your-choices">
          <h2
            id="your-choices"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Your choices
          </h2>
          <p className="mt-3">
            You may ask to access, correct, or delete information you submitted
            through the form. You can also avoid the form and contact me
            directly by email.
          </p>
        </section>

        <section aria-labelledby="security">
          <h2
            id="security"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Security
          </h2>
          <p className="mt-3">
            Reasonable technical measures are used to protect submissions,
            including HTTPS, input validation, spam detection, request limits,
            and restricted message delivery. No internet transmission or
            storage method can be guaranteed to be completely secure.
          </p>
        </section>

        <section aria-labelledby="policy-changes">
          <h2
            id="policy-changes"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Changes to this policy
          </h2>
          <p className="mt-3">
            This policy may be updated when the contact flow or service
            providers change. The latest revision date will be shown at the
            top of this page.
          </p>
        </section>

        <section
          aria-labelledby="privacy-contact"
          className="rounded-2xl border bg-card p-5 sm:p-6"
        >
          <h2
            id="privacy-contact"
            className="font-gabarito text-2xl font-semibold text-foreground"
          >
            Privacy questions
          </h2>
          <p className="mt-3">
            For a privacy request or question, email{" "}
            <a
              href="mailto:shiirajullisllam@gmail.com"
              className="font-medium text-foreground underline underline-offset-4 break-all"
            >
              shiirajullisllam@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
