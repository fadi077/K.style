import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { newsreader, workSans } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={`${newsreader.variable} ${workSans.variable}`} lang="en-IE">
      <body>{children}</body>
    </html>
  );
}
