import { CategoryLanding } from "@/components/sections/category-landing";
import { categoryPages } from "@/data/category-pages";
import { createPageMetadata } from "@/lib/metadata";

const category = categoryPages.tiles;

export const metadata = createPageMetadata({
  description: category.metaDescription,
  image: category.hero.src,
  imageAlt: category.hero.alt,
  path: category.path,
  title: category.metaTitle,
});

export default function TilesPage() {
  return <CategoryLanding category={category} />;
}
