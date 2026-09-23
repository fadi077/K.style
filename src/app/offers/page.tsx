import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../inner-page.module.css";

export const metadata: Metadata = createPageMetadata({
  description:
    "Ask K.Style in Donegal Town about current verified offers across tiles, flooring, bathrooms, beds and mattresses. No unverified prices or stock claims.",
  image: "/images/products/kstyle-special-offer-tile-collection.png",
  imageAlt: "Neutral stone-effect tile samples in natural light",
  path: "/offers",
  title: "Current Offers in Donegal Town",
});

export default function OffersPage() {
  return (
    <SiteFrame>
      <section aria-labelledby="offers-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Current offers · Donegal Town</p>
          <h1 id="offers-title">Special offers, quietly presented.</h1>
          <p className={styles.heroLead}>
            Useful value without countdowns, noise or invented urgency.
          </p>
          <p className={styles.heroDescription}>
            Verified offers will appear here with the product name, a short
            description, previous price, current price, unit and image.
          </p>
          <div className={styles.actions}>
            <ActionLink href={business.phone.href}>Call about current offers</ActionLink>
            <ActionLink href="/visit-us" variant="text">Visit the showroom</ActionLink>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <EditorialImage
            alt="Neutral stone-effect tile samples in natural light"
            objectPosition="center 54%"
            preload
            ratio="4 / 5"
            sizes="(max-width: 768px) calc(100vw - 2rem), 52vw"
            src="/images/products/kstyle-special-offer-tile-collection.png"
          />
        </div>
      </section>

      <section aria-labelledby="offer-status-title" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Online offer status</p>
          <h2 id="offer-status-title">Only verified details belong here.</h2>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.offerStatus}>
            <h2>No verified offers are published online yet.</h2>
            <p>
              Call or visit K.Style to ask what is currently available. Product
              names, stock, prices and discounts will not be assumed.
            </p>
          </div>
          <ActionLink href={business.phone.href} variant="dark">Call K.Style</ActionLink>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div><h2>Looking for something specific?</h2></div>
        <div>
          <p>
            Tell K.Style whether you are looking for tiles, flooring, a bathroom,
            a bed or a mattress, and ask about current suitable options.
          </p>
          <ActionLink href="/get-a-quote">Get a quote</ActionLink>
        </div>
      </section>
    </SiteFrame>
  );
}
