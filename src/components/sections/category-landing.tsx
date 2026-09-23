import Link from "next/link";
import { business } from "@/data/business";
import type { CategoryPageData } from "@/data/category-pages";
import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import styles from "./category-landing.module.css";

type CategoryLandingProps = {
  category: CategoryPageData;
};

export function CategoryLanding({ category }: CategoryLandingProps) {
  return (
    <SiteFrame>
      <section aria-labelledby="category-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{category.eyebrow}</p>
          <h1 id="category-title">{category.title}</h1>
          <p className={styles.intro}>{category.intro}</p>
          <p className={styles.description}>{category.description}</p>
          <div className={styles.actions}>
            <ActionLink href="/get-a-quote">Get a quote</ActionLink>
            <ActionLink href="/visit-us" variant="text">
              Visit the showroom
            </ActionLink>
          </div>
        </div>

        <div className={styles.heroMedia}>
          {category.hero ? (
            <EditorialImage
              {...category.hero}
              className={styles.heroImage}
              preload
            />
          ) : (
            <ImagePlaceholder
              className={styles.heroPlaceholder}
              detail="Real K.Style category photography is required before launch"
              label="Photography pending"
              ratio="4 / 5"
              subject="Beds & mattresses"
              tone="charcoal"
            />
          )}
        </div>
      </section>

      <section aria-labelledby="consider-title" className={styles.consider}>
        <div className={styles.considerHeading}>
          <p className={styles.sectionLabel}>A useful place to begin</p>
          <h2 id="consider-title">What to consider before you choose.</h2>
        </div>
        <dl className={styles.exploreList}>
          {category.explore.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.copy}</dd>
            </div>
          ))}
        </dl>
      </section>

      {category.secondaryImages ? (
        <div aria-label={`${category.metaTitle} inspiration`} className={styles.imagePair}>
          {category.secondaryImages.map((image) => (
            <EditorialImage {...image} key={image.src} />
          ))}
        </div>
      ) : null}

      <section aria-labelledby="local-title" className={styles.local}>
        <div className={styles.localInner}>
          <div className={styles.localHeading}>
            <p className={styles.sectionLabel}>Start in Donegal Town</p>
            <h2 id="local-title">See it, compare it, talk it through.</h2>
          </div>
          <div className={styles.localCopy}>
            <p>
              The K.Style showroom is at Business Centre, Drumlonagher,
              Donegal Town. Bring room photographs, measurements or an image
              you like and use the visit to explore suitable options.
            </p>
            <p>
              Planning from elsewhere in Ireland? Call before travelling so
              K.Style can discuss what you are looking for.
            </p>
            <ActionLink href={business.phone.href}>Call K.Style</ActionLink>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className={styles.related}>
        <h2 id="related-title">Continue exploring.</h2>
        <nav aria-label="Related pages">
          {category.related.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </section>
    </SiteFrame>
  );
}
