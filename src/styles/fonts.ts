import localFont from "next/font/local";

export const newsreader = localFont({
  src: "../../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2",
  variable: "--font-newsreader",
  display: "swap",
  weight: "200 800",
  style: "normal",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const workSans = localFont({
  src: "../../node_modules/@fontsource-variable/work-sans/files/work-sans-latin-wght-normal.woff2",
  variable: "--font-work-sans",
  display: "swap",
  weight: "100 900",
  style: "normal",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
