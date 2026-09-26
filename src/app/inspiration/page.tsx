import type { Metadata } from "next";
import { InspirationLanding } from "@/components/sections/inspiration-landing";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  description:
    "Interior inspiration for tiles, flooring and bathrooms from K.Style in Donegal Town. Share a room image or screenshot and explore suitable options.",
  image: "/images/interiors/kstyle-inspiration-kitchen-editorial.png",
  imageAlt: "Warm open-plan kitchen and dining room with stone-effect floor tiles",
  path: "/inspiration",
  title: "Interior Inspiration in Donegal Town",
});

export default function InspirationPage() {
  return <InspirationLanding />;
}
