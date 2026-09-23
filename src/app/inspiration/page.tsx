import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import { InspirationEnquiry } from "@/components/sections/inspiration-enquiry";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../inner-page.module.css";

export const metadata: Metadata = createPageMetadata({
  description:
    "Interior inspiration for tiles, flooring and bathrooms from K.Style in Donegal Town. Share a room image or screenshot and explore suitable options.",
  image: "/images/interiors/kstyle-inspiration-kitchen-porcelain-flooring.png",
  imageAlt: "Open-plan kitchen with large-format porcelain flooring",
  path: "/inspiration",
  title: "Interior Inspiration in Donegal Town",
});

export default function InspirationPage() {
  return (
    <SiteFrame>
      <section aria-labelledby="inspiration-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Inspiration · The Materials Edit</p>
          <h1 id="inspiration-title">Begin with a room you remember.</h1>
          <p className={styles.heroLead}>
            A screenshot, saved image or photograph can be a useful first step.
          </p>
          <p className={styles.heroDescription}>
            Look at how tone, texture, light and scale work together, then bring
            the ideas that matter to you into the K.Style showroom in Donegal Town.
          </p>
          <div className={styles.actions}>
            <ActionLink href="#send-inspiration">Send your inspiration</ActionLink>
            <ActionLink href="/visit-us" variant="text">Visit the showroom</ActionLink>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <EditorialImage
            alt="Open-plan kitchen and dining space with large-format porcelain flooring"
            objectPosition="center 60%"
            preload
            ratio="4 / 5"
            sizes="(max-width: 768px) calc(100vw - 2rem), 62vw"
            src="/images/interiors/kstyle-inspiration-kitchen-porcelain-flooring.png"
          />
        </div>
      </section>

      <div aria-label="Interior material inspiration" className={styles.collage}>
        <EditorialImage
          alt="Light neutral bathroom with textured tiles and walk-in shower"
          className={styles.collageMain}
          ratio="4 / 5"
          sizes="(max-width: 768px) calc(100vw - 2rem), 60vw"
          src="/images/interiors/kstyle-inspiration-textured-bathroom.png"
        />
        <EditorialImage
          alt="Close-up of stone-effect porcelain floor tiles beside oak furniture"
          className={styles.collagePortrait}
          ratio="1 / 1"
          sizes="(max-width: 768px) 72vw, 28vw"
          src="/images/interiors/kstyle-inspiration-porcelain-floor-detail.png"
        />
        <EditorialImage
          alt="Warm neutral samples showing different material tones and textures"
          className={styles.collageDetail}
          ratio="4 / 5"
          sizes="(max-width: 768px) 48vw, 28vw"
          src="/images/products/kstyle-featured-collections-material-edit.png"
        />
      </div>

      <section aria-labelledby="look-for-title" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Look beyond the product</p>
          <h2 id="look-for-title">Notice what makes the room work.</h2>
        </div>
        <div className={styles.sectionBody}>
          <p>
            The most useful references show more than a single product. Look at
            the balance of warm and cool tones, the size of the material, the
            direction of the floor and the way natural light reaches the surface.
          </p>
          <ul className={styles.indexList}>
            <li>Bathrooms</li>
            <li>Kitchens</li>
            <li>Living spaces</li>
            <li>Material details</li>
          </ul>
        </div>
      </section>

      <InspirationEnquiry />
    </SiteFrame>
  );
}
