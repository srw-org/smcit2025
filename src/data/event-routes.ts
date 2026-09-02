export const HUB_DOMAIN = "space-robots.org";
export const EVENT_SLUG = "smcit2025";
export const EVENT_CANONICAL_PATH = "/events/smcit2025/";

export const canonicalEventUrl = (_slug?: string) =>
  `https://${HUB_DOMAIN}${EVENT_CANONICAL_PATH}`;
