import type { APIRoute } from "astro";

import { siteConfig } from "@/config/site";

// Crawlers that gather pages for AI models and answer engines rather than
// for search. Each is turned away from the whole site. The fetchers an AI
// assistant sends when a person asks it about a page (ChatGPT-User,
// Perplexity-User, Claude-User) aren't crawlers, so they aren't listed.
const AI_CRAWLERS = [
  "Amazonbot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ClaudeBot",
  "cohere-ai",
  "Diffbot",
  "Google-Extended",
  "GPTBot",
  "meta-externalagent",
  "PerplexityBot",
];

// Every other crawler may read every page, but not the `?` variants. The
// club pages alone link to about 11,000 chart URLs with `?club=` (one per
// crew per year), each the same page as its canonical URL with a highlight,
// and crawling them all multiplied the site's CDN requests.
const body = [
  ...AI_CRAWLERS.map((name) => `User-agent: ${name}`),
  "Disallow: /",
  "",
  "User-agent: *",
  "Disallow: /*?",
  "",
  `Sitemap: ${siteConfig.url}/sitemap.xml`,
  "",
].join("\n");

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
