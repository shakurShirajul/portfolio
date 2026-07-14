import { NextResponse } from "next/server";
import {
  normalizeContactFormValues,
  validateContactForm,
} from "@/lib/contact";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";

const MAX_REQUEST_BYTES = 16 * 1_024;
const TELEGRAM_TIMEOUT_MS = 8_000;

function getClientAddress(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    null
  );
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Send the form as JSON and try again." },
        { status: 415 },
      );
    }

    const declaredLength = Number(request.headers.get("content-length"));

    if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { error: "Your message is too large. Shorten it and try again." },
        { status: 413 },
      );
    }

    const rawBody = await request.text();

    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { error: "Your message is too large. Shorten it and try again." },
        { status: 413 },
      );
    }

    let body: unknown;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "The form data is invalid. Refresh the page and try again." },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "The form data is invalid. Refresh the page and try again." },
        { status: 400 },
      );
    }

    const values = normalizeContactFormValues(body as Record<string, unknown>);

    // Silently accept honeypot submissions so bots do not learn how they were detected.
    if (values.website) {
      return NextResponse.json({ message: "Message sent successfully." });
    }

    const clientAddress = getClientAddress(request);

    if (clientAddress) {
      const rateLimit = checkContactRateLimit(clientAddress);

      if (!rateLimit.allowed) {
        const retryAfterMinutes = Math.max(
          1,
          Math.ceil(rateLimit.retryAfterSeconds / 60),
        );

        return NextResponse.json(
          {
            error: `Too many messages were sent. Try again in ${retryAfterMinutes} minute${retryAfterMinutes === 1 ? "" : "s"}.`,
          },
          {
            status: 429,
            headers: {
              "Retry-After": String(rateLimit.retryAfterSeconds),
            },
          },
        );
      }
    }

    const fieldErrors = validateContactForm(values);

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          error: "Check the highlighted fields and try again.",
          fieldErrors,
        },
        { status: 400 },
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Contact delivery is not configured.");
      return NextResponse.json(
        {
          error:
            "Messaging is temporarily unavailable. Please email or call instead.",
        },
        { status: 503 },
      );
    }

    const text = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;

    let response: Response;

    try {
      response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
          }),
          signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
        },
      );
    } catch (error) {
      console.error("Contact delivery request failed.", error);
      return NextResponse.json(
        {
          error:
            "We couldn’t send your message right now. Please try again later.",
        },
        { status: 502 },
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Contact delivery was rejected.", {
        status: response.status,
        response: errorText.slice(0, 500),
      });

      return NextResponse.json(
        {
          error:
            "We couldn’t send your message right now. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Something went wrong. Refresh the page and try again.",
      },
      { status: 500 },
    );
  }
}
