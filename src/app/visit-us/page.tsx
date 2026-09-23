import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../inner-page.module.css";

export const metadata: Metadata = createPageMetadata({
  description:
    "Visit K.Style Tiles & Interiors at Business Centre, Drumlonagher, Donegal Town. Find confirmed opening hours, address and phone details.",
  imageAlt: "K.Style Tiles & Interiors",
  path: "/visit-us",
  title: "Visit K.Style in Donegal Town",
});

export default function VisitUsPage() {
  return (
    <SiteFrame>
      <section aria-labelledby="visit-title" className={styles.hero}>
        <div className={`${styles.heroCopy} ${styles.heroCopyWide}`}>
          <p className={styles.eyebrow}>K.Style showroom · Donegal Town</p>
          <h1 id="visit-title">The showroom is where materials become real.</h1>
          <p className={styles.heroLead}>
            Compare tiles, flooring, bathrooms, beds, mattresses and interiors
            in person.
          </p>
          <div className={styles.actions}>
            <ActionLink href={business.phone.href}>Call K.Style</ActionLink>
            <ActionLink href="/get-a-quote" variant="text">Get a quote</ActionLink>
          </div>
        </div>
        <aside className={styles.heroAside}>
          <p>Find K.Style at</p>
          <address>
            {business.address.lines.map((line) => <span key={line}>{line}</span>)}
          </address>
          <a href={business.phone.href}>{business.phone.display}</a>
        </aside>
      </section>

      <section aria-labelledby="details-title" className={styles.section}>
        <div className={styles.showroomGrid}>
          <ImagePlaceholder
            detail="Real K.Style premises photography is required before launch"
            label="Showroom photography pending"
            ratio="16 / 10"
            subject="K.Style showroom"
            tone="limestone"
          />
          <ImagePlaceholder
            compact
            detail="Real display or consultation photograph required"
            label="Showroom detail pending"
            ratio="4 / 5"
            subject="K.Style showroom detail"
            tone="surface"
          />
        </div>
        <div className={styles.visitDetails}>
          <p className={styles.sectionLabel}>Plan your visit</p>
          <h2 id="details-title">K.Style Tiles & Interiors</h2>
          <address className={styles.address}>
            {business.address.lines.map((line) => <span key={line}>{line}</span>)}
          </address>
          <a className={styles.phone} href={business.phone.href}>{business.phone.display}</a>
          <dl className={styles.hours}>
            {business.hours.map((entry) => (
              <div key={entry.day}>
                <dt>{entry.day}</dt>
                <dd>{entry.hours}</dd>
              </div>
            ))}
          </dl>
          <button
            className={styles.pendingButton}
            disabled
            title="A verified directions URL is still required"
            type="button"
          >
            Get directions — link pending
          </button>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div><h2>Travelling from elsewhere in Ireland?</h2></div>
        <div>
          <p>
            Call before setting out to discuss what you are looking for and what
            information or room measurements will be useful to bring.
          </p>
          <ActionLink href={business.phone.href}>Call before travelling</ActionLink>
        </div>
      </section>
    </SiteFrame>
  );
}
