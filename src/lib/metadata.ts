import type { Metadata } from "next";
import { business } from "@/data/business";

type PageMetadata = {
  description: string;
  image?: string;
  imageAlt?: string;
  path: `/${string}`;
  title: string;
};

const defaultImage = "/images/interiors/kstyle-hero-stone-interior.webp";

export function createPageMetadata({
  description,
  image = defaultImage,
  imageAlt = "A material-led interior from K.Style",
  path,
  title,
}: PageMetadata): Metadata {
  const fullTitle = `${title} | K.Style`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      images: [{ alt: imageAlt, url: image }],
      locale: "en_IE",
      siteName: business.name,
      type: "website",
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
