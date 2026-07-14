import "server-only";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 4;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type ContactRateLimitStore = Map<string, RateLimitEntry>;

const globalForContactRateLimit = globalThis as typeof globalThis & {
  contactRateLimitStore?: ContactRateLimitStore;
};

const contactRateLimitStore =
  globalForContactRateLimit.contactRateLimitStore ??
  new Map<string, RateLimitEntry>();

globalForContactRateLimit.contactRateLimitStore = contactRateLimitStore;

export function checkContactRateLimit(identifier: string) {
  const now = Date.now();

  for (const [key, entry] of contactRateLimitStore) {
    if (entry.resetAt <= now) {
      contactRateLimitStore.delete(key);
    }
  }

  const entry = contactRateLimitStore.get(identifier);

  if (!entry) {
    contactRateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1_000)),
    };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
