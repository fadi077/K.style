import { business } from "@/data/business";

export const siteConfig = {
  name: business.shortName,
  title: business.name,
  url: business.url,
  description:
    "Explore tiles, flooring, bathrooms, beds, mattresses and interiors at K.Style in Donegal Town.",
} as const;
