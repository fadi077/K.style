import { BedsLanding } from "@/components/sections/beds-landing";
import { categoryPages } from "@/data/category-pages";
import { createPageMetadata } from "@/lib/metadata";

const category = categoryPages.beds;

export const metadata = createPageMetadata({
  description: category.metaDescription,
  path: category.path,
  title: category.metaTitle,
});

export default function BedsMattressesPage() {
  return <BedsLanding />;
}
