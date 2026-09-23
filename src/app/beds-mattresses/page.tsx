import { CategoryLanding } from "@/components/sections/category-landing";
import { categoryPages } from "@/data/category-pages";
import { createPageMetadata } from "@/lib/metadata";

const category = categoryPages.beds;

export const metadata = createPageMetadata({
  description: category.metaDescription,
  path: category.path,
  title: category.metaTitle,
});

export default function BedsMattressesPage() {
  return <CategoryLanding category={category} />;
}
