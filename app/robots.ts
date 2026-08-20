import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const AI_BOTS = [
  "GPTBot",           // OpenAI
  "OAI-SearchBot",    // ChatGPT Search
  "ChatGPT-User",     // ChatGPT on-demand browsing
  "ClaudeBot",        // Anthropic
  "anthropic-ai",     // Anthropic (legacy)
  "PerplexityBot",    // Perplexity
  "Perplexity-User",  // Perplexity on-demand browsing
  "Google-Extended",  // Google (Gemini training + AI Overviews)
  "GoogleOther",      // Google various research crawlers
  "CCBot",            // Common Crawl (feeds many training datasets)
  "Applebot-Extended",// Apple Intelligence
  "Meta-ExternalAgent", // Meta AI
  "Bytespider",       // ByteDance / Doubao
  "Amazonbot",        // Amazon (Alexa / Rufus / Q)
  "cohere-ai",        // Cohere
  "Diffbot",          // Diffbot (feeds many enterprise LLMs)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://sotaadvisory.com/sitemap.xml",
    host: "https://sotaadvisory.com",
  };
}
