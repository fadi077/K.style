import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { business } from "@/data/business";
import { categoryPages } from "@/data/category-pages";
import styles from "./tiles-landing.module.css";

const tiles = categoryPages.tiles;

const tileDecisions = [
  {
    title: "Room and use",
    copy: "Start with where the tile will live and what the surface needs to handle day to day. The room gives every later choice a reason.",
  },
  {
    title: "Scale and layout",
    copy: "Compare the proportions of the tile with the proportions of the room. Format, direction and pattern can change the way a space feels.",
  },
  {
    title: "Tone and light",
    copy: "Warm, cool and neutral tones can read differently from one room to the next. Look at the material in the light you actually live with.",
  },
  {
    title: "Surface and finish",
    copy: "Texture, movement and finish are easier to judge when you can see and touch the material at a useful scale.",
  },
  {
    title: "The complete room",
    copy: "Bring wall and floor choices into the same conversation as flooring, bathroom ware and the details you plan to keep.",
  },
] as const;

const thingsToBring = [
  "A photograph of the room in daylight",
  "Approximate measurements and any fixed points",
  "A note of finishes, furniture or fittings you are keeping",
  "A reference image if you already have a direction in mind",
] as const;

const roomRoutes = [
  { href: "/bathrooms", label: "Bathrooms", copy: "Build the room around the surface." },
  { href: "/flooring", label: "Flooring", copy: "Connect the threshold and the tone." },
  { href: "/inspiration", label: "Inspiration", copy: "See how the choices come together." },
] as const;

export function TilesLanding() {
  return (
    <SiteFrame>
      <section aria-labelledby="tiles-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{tiles.eyebrow}</p>
          <h1 id="tiles-title">Tiles that shape the room.</h1>
          <p className={styles.heroLead}>
            Start with the surface. Let the rest of the interior follow.
          </p>
          <p className={styles.heroDescription}>
            Explore wall and floor tiles through tone, scale, finish and the way you want the room to live.
          </p>
          <div className={styles.actions}>
            <ActionLink href="#tile-guide">Explore the tile guide</ActionLink>
            <ActionLink href="/contact-us#contact-form" variant="text">Share your tile idea</ActionLink>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <EditorialImage
            {...tiles.hero!}
            className={styles.heroImage}
            preload
          />
        </div>
      </section>

      <section aria-labelledby="guide-title" className={styles.guide} id="tile-guide">
        <div className={styles.guideInner}>
          <div className={styles.guideIntro}>
            <p className={styles.sectionLabel}>The tile conversation</p>
            <h2 id="guide-title">A better tile choice starts with better questions.</h2>
            <p>
              A sample is only the beginning. Use the room, the light and the details you are keeping to make the shortlist more meaningful.
            </p>
          </div>
          <div className={styles.decisionList}>
            {tileDecisions.map((decision, index) => (
              <article key={decision.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{decision.title}</h3>
                <p>{decision.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="material-title" className={styles.materialEdit}>
        <div className={styles.materialHeading}>
          <p className={styles.sectionLabel}>The material edit</p>
          <h2 id="material-title">Look closer. The small details change the whole room.</h2>
          <p>
            Tone, edge, texture and movement all become easier to understand when you can compare them together and see them in context.
          </p>
        </div>
        <div className={styles.materialGrid}>
          <EditorialImage
            alt={tiles.secondaryImages[0].alt}
            className={styles.materialLarge}
            objectPosition="center"
            ratio="4 / 5"
            sizes="(max-width: 768px) calc(100vw - 2rem), 38vw"
            src={tiles.secondaryImages[0].src}
          />
          <div className={styles.materialStack}>
            <EditorialImage
              alt="Close-up of a warm taupe tile surface"
              className={styles.materialSmall}
              objectPosition="center"
              ratio="16 / 9"
              sizes="(max-width: 768px) calc(100vw - 2rem), 31vw"
              src="/images/products/kstyle-material-detail-taupe.png"
            />
          </div>
          <EditorialImage
            alt={tiles.secondaryImages[1].alt}
            className={styles.materialWide}
            objectPosition="center"
            ratio="16 / 9"
            sizes="(max-width: 768px) calc(100vw - 2rem), 31vw"
            src={tiles.secondaryImages[1].src}
          />
        </div>
      </section>

      <section aria-labelledby="catalogue-title" className={styles.catalogue}>
        <div className={styles.catalogueCopy}>
          <p className={styles.sectionLabel}>Tileanna collection</p>
          <h2 id="catalogue-title">Browse the 2025 Tileanna catalogue.</h2>
          <p>
            Explore the manufacturer brochure for surface, colour and format ideas, then bring a page or screenshot into the K.Style showroom conversation.
          </p>
          <ActionLink href="/downloads/kstyle-tileanna-brochure-2025.pdf" variant="light">
            Open the Tileanna catalogue
          </ActionLink>
        </div>
        <p className={styles.catalogueNote}>A useful reference before you visit.</p>
      </section>

      <section aria-labelledby="visit-title" className={styles.visit}>
        <div className={styles.visitCopy}>
          <p className={styles.sectionLabel}>Make the showroom useful</p>
          <h2 id="visit-title">Bring the room, not just the question.</h2>
          <p>
            You do not need a finished plan. A few simple details give the conversation somewhere practical to start.
          </p>
          <ul>
            {thingsToBring.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ActionLink href="/contact-us#contact-form" variant="dark">Start your tile enquiry</ActionLink>
        </div>
        <div className={styles.visitAside}>
          <p className={styles.asideLabel}>A considered choice</p>
          <p className={styles.asideQuote}>“Tiles are best understood as part of a room, not as an isolated sample.”</p>
          <p className={styles.asideDetail}>Visit K.Style in Donegal Town or call {business.phone.display}.</p>
          <ActionLink href={business.phone.href} variant="text">Call the showroom</ActionLink>
        </div>
      </section>

      <section aria-labelledby="routes-title" className={styles.routes}>
        <div className={styles.routesHeading}>
          <p className={styles.sectionLabel}>Continue with the room</p>
          <h2 id="routes-title">Tiles are the starting point.</h2>
        </div>
        <div className={styles.routeList}>
          {roomRoutes.map((route, index) => (
            <ActionLink href={route.href} key={route.label} variant="light">
              <span className={styles.routeNumber}>0{index + 1}</span>
              <span className={styles.routeText}>
                <strong>{route.label}</strong>
                <small>{route.copy}</small>
              </span>
            </ActionLink>
          ))}
        </div>
      </section>

      <section aria-labelledby="tiles-cta-title" className={styles.cta}>
        <div>
          <p className={styles.sectionLabel}>Find your starting point</p>
          <h2 id="tiles-cta-title">Let&apos;s make the tile choice feel clear.</h2>
        </div>
        <div className={styles.ctaCopy}>
          <p>Share a photograph or a few details about your room before you visit K.Style.</p>
          <ActionLink href="/contact-us#contact-form">Send an enquiry</ActionLink>
        </div>
      </section>
    </SiteFrame>
  );
}
