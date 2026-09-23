import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/tiles", priority: 0.9 },
    { path: "/flooring", priority: 0.9 },
    { path: "/bathrooms", priority: 0.9 },
    { path: "/beds-mattresses", priority: 0.8 },
    { path: "/inspiration", priority: 0.8 },
    { path: "/offers", priority: 0.7 },
    { path: "/visit-us", priority: 0.9 },
    { path: "/get-a-quote", priority: 0.9 },
  ] as const;

  return pages.map(({ path, priority }) => ({
    changeFrequency: "monthly",
    priority,
    url: `${siteConfig.url}${path}`,
  }));
}
