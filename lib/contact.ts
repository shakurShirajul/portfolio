export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 10, max: 2_000 },
} as const;

export const CONTACT_FIELDS = ["name", "email", "message"] as const;

export type ContactField = (typeof CONTACT_FIELDS)[number];
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  website: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeContactFormValues(
  input: Record<string, unknown>,
): ContactFormValues {
  return {
    name: String(input.name ?? "").trim().replace(/\s+/g, " "),
    email: String(input.email ?? "").trim(),
    message: String(input.message ?? "").trim(),
    website: String(input.website ?? "").trim(),
  };
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!values.name) {
    errors.name = "Enter your name.";
  } else if (values.name.length < CONTACT_LIMITS.name.min) {
    errors.name = `Name must contain at least ${CONTACT_LIMITS.name.min} characters.`;
  } else if (values.name.length > CONTACT_LIMITS.name.max) {
    errors.name = `Name must contain at most ${CONTACT_LIMITS.name.max} characters.`;
  }

  if (!values.email) {
    errors.email = "Enter your email address.";
  } else if (values.email.length > CONTACT_LIMITS.email.max) {
    errors.email = `Email must contain at most ${CONTACT_LIMITS.email.max} characters.`;
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address, such as you@example.com.";
  }

  if (!values.message) {
    errors.message = "Enter a message.";
  } else if (values.message.length < CONTACT_LIMITS.message.min) {
    errors.message = `Message must contain at least ${CONTACT_LIMITS.message.min} characters.`;
  } else if (values.message.length > CONTACT_LIMITS.message.max) {
    errors.message = `Message must contain at most ${CONTACT_LIMITS.message.max.toLocaleString("en-US")} characters.`;
  }

  return errors;
}
