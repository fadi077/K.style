import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { business } from "@/data/business";
import { categoryPages } from "@/data/category-pages";
import styles from "./flooring-landing.module.css";

const flooring = categoryPages.flooring;

const decisions = [
  {
    title: "How the room lives",
    copy: "Start with the everyday reality of the space: how it is used, what it needs to accommodate and how you want it to feel.",
  },
  {
    title: "Tone and direction",
    copy: "Look at colour, grain and plank direction together. They can change how wide, calm or connected a room feels.",
  },
  {
    title: "Where it meets",
    copy: "Think beyond one room. Adjoining floors, thresholds and nearby tiles all affect how the finished interior reads.",
  },
] as const;

const thingsToBring = [
  "A photograph of the room in daylight",
  "Approximate room measurements",
  "A note of adjoining finishes or furniture you are keeping",
] as const;

export function FlooringLanding() {
  return (
    <SiteFrame>
      <section aria-labelledby="flooring-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{flooring.eyebrow}</p>
          <h1 id="flooring-title">Start from the floor.</h1>
          <p className={styles.heroLead}>
            A floor sets the rhythm for everything that follows.
          </p>
          <p className={styles.heroDescription}>
            Compare tone, grain, format and room transitions in context at the K.Style showroom.
          </p>
          <div className={styles.actions}>
            <ActionLink href="#flooring-guide">Explore the guide</ActionLink>
            <ActionLink href={business.whatsapp.href} variant="text">Message on WhatsApp</ActionLink>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <EditorialImage
            {...flooring.hero!}
            className={styles.heroImage}
            preload
          />
        </div>
      </section>

      <section aria-labelledby="guide-title" className={styles.guide} id="flooring-guide">
        <div className={styles.guideInner}>
          <div className={styles.guideIntro}>
            <p className={styles.sectionLabel}>A useful starting point</p>
            <h2 id="guide-title">Choose for the room, not just the sample.</h2>
            <p>
              The right conversation begins with the space around the floor. These are the details worth bringing into the decision.
            </p>
          </div>
          <div className={styles.decisionList}>
            {decisions.map((decision, index) => (
              <article key={decision.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{decision.title}</h3>
                <p>{decision.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="visit-title" className={styles.visit}>
        <div className={styles.visitCopy}>
          <p className={styles.sectionLabel}>Before you visit</p>
          <h2 id="visit-title">Bring a little context.</h2>
          <p>
            You do not need a finished plan. A few simple details help make the showroom conversation more useful.
          </p>
          <ul>
            {thingsToBring.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ActionLink href={business.whatsapp.href} variant="dark">Message on WhatsApp</ActionLink>
        </div>
        <EditorialImage
          alt="Close-up of stone-effect floor tiles beside oak furniture"
          className={styles.visitImage}
          objectPosition="center 56%"
          ratio="4 / 5"
          sizes="(max-width: 768px) calc(100vw - 2rem), 38vw"
          src="/images/interiors/kstyle-inspiration-porcelain-floor-detail.png"
        />
      </section>

      <section aria-labelledby="materials-title" className={styles.materials}>
        <div className={styles.materialsHeading}>
          <p className={styles.sectionLabel}>See it at full scale</p>
          <h2 id="materials-title">Colour, texture and direction become clearer in the room.</h2>
        </div>
        <EditorialImage
          alt="Open-plan kitchen and dining space with large-format porcelain flooring"
          className={styles.materialsImage}
          objectPosition="center 62%"
          ratio="16 / 8"
          sizes="(max-width: 768px) calc(100vw - 2rem), 80vw"
          src="/images/interiors/kstyle-inspiration-kitchen-porcelain-flooring.png"
        />
      </section>

      <section aria-labelledby="flooring-cta-title" className={styles.cta}>
        <div>
          <p className={styles.sectionLabel}>Make the next decision easier</p>
          <h2 id="flooring-cta-title">Let&apos;s talk about your floor.</h2>
        </div>
        <div className={styles.ctaCopy}>
          <p>Bring your photographs, measurements or an idea to K.Style in Donegal Town.</p>
          <ActionLink href="/contact-us">Send an enquiry</ActionLink>
        </div>
      </section>
    </SiteFrame>
  );
}
