import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { business } from "@/data/business";
import styles from "./inspiration-landing.module.css";

const roomSignals = [
  {
    title: "Light",
    copy: "Notice how daylight changes the same tone from one part of a room to another.",
  },
  {
    title: "Material",
    copy: "Save the texture, edge or surface detail that keeps drawing your eye back.",
  },
  {
    title: "Scale",
    copy: "Look at the size and direction of the material in relation to the room around it.",
  },
  {
    title: "Flow",
    copy: "Pay attention to how the floor, walls, furniture and adjoining spaces meet.",
  },
] as const;

const saveList = [
  "A room that has the feeling you want",
  "A material, colour or texture that caught your eye",
  "A practical detail you are trying to solve",
  "A photograph of your own room in daylight",
] as const;

export function InspirationLanding() {
  return (
    <SiteFrame>
      <section aria-labelledby="inspiration-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Inspiration · The Materials Edit</p>
          <h1 id="inspiration-title">Collect the rooms you want to live in.</h1>
          <p className={styles.heroLead}>
            Inspiration is not a finished answer. It is a way to notice what feels right.
          </p>
          <p className={styles.heroDescription}>
            Save a room, a surface or a small detail. Bring the feeling into the K.Style showroom in Donegal Town.
          </p>
          <div className={styles.actions}>
            <ActionLink href="#inspiration-gallery">Explore the edit</ActionLink>
            <ActionLink href="/contact-us#contact-form" variant="light">Send your inspiration</ActionLink>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <EditorialImage
            alt="Warm open-plan kitchen and dining room with stone-effect floor tiles and oak cabinetry"
            className={styles.heroImage}
            objectPosition="center"
            preload
            ratio="3 / 2"
            sizes="(max-width: 768px) calc(100vw - 2rem), 62vw"
            src="/images/interiors/kstyle-inspiration-kitchen-editorial.png"
          />
        </div>
      </section>

      <section aria-labelledby="edit-title" className={styles.introduction}>
        <p className={styles.sectionLabel}>A way of looking</p>
        <div>
          <h2 id="edit-title">Save the feeling, not just the product.</h2>
          <p>
            The most useful references show how choices live together. Look for the balance between warm and cool, soft and structured, quiet and expressive.
          </p>
        </div>
      </section>

      <section aria-labelledby="gallery-title" className={styles.gallery} id="inspiration-gallery">
        <div className={styles.galleryHeading}>
          <p className={styles.sectionLabel}>The room studies</p>
          <h2 id="gallery-title">Three ways to begin.</h2>
          <p>See the whole room. Notice the contrast. Then bring the detail that matters to you.</p>
        </div>
        <div className={styles.galleryGrid}>
          <figure className={styles.galleryMain}>
            <EditorialImage
              alt="Warm open-plan kitchen and dining room with stone-effect floor tiles and oak cabinetry"
              ratio="16 / 10"
              sizes="(max-width: 768px) calc(100vw - 2rem), 58vw"
              src="/images/interiors/kstyle-inspiration-kitchen-editorial.png"
            />
          </figure>
          <figure className={styles.galleryPortrait}>
            <EditorialImage
              alt="Dark taupe tiled bathroom with warm oak vanity and soft lighting"
              ratio="4 / 5"
              sizes="(max-width: 768px) calc(100vw - 2rem), 30vw"
              src="/images/interiors/kstyle-inspiration-bathroom-dark.png"
            />
          </figure>
          <figure className={styles.galleryDetail}>
            <EditorialImage
              alt="Interior material samples, oak flooring and brushed metal tap arranged in warm light"
              ratio="1 / 1"
              sizes="(max-width: 768px) 76vw, 28vw"
              src="/images/products/kstyle-inspiration-material-study.png"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="signals-title" className={styles.signals}>
        <div className={styles.signalsHeading}>
          <p className={styles.sectionLabel}>Before you save it</p>
          <h2 id="signals-title">Notice what the room is doing.</h2>
        </div>
        <div className={styles.signalList}>
          {roomSignals.map((signal, index) => (
            <article key={signal.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{signal.title}</h3>
              <p>{signal.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="save-title" className={styles.saveSection}>
        <div className={styles.saveCopy}>
          <p className={styles.sectionLabel}>Make inspiration useful</p>
          <h2 id="save-title">Bring a little context with you.</h2>
          <p>
            You do not need a finished moodboard. One image and one honest question are enough to start a useful showroom conversation.
          </p>
          <ul>
            {saveList.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ActionLink href="/contact-us#contact-form">Send your inspiration</ActionLink>
        </div>
        <aside className={styles.saveAside}>
          <p className={styles.asideLabel}>Visit in person</p>
          <p className={styles.asideQuote}>The showroom is where an idea becomes something you can see, touch and compare.</p>
          <p className={styles.asideDetail}>K.Style, Business Centre, Drumlonagher, Donegal Town.</p>
          <ActionLink href={business.phone.href} variant="text">Call the showroom</ActionLink>
        </aside>
      </section>

      <section aria-labelledby="inspiration-cta-title" className={styles.cta}>
        <div>
          <p className={styles.sectionLabel}>Your next reference</p>
          <h2 id="inspiration-cta-title">Show us what made you stop scrolling.</h2>
        </div>
        <div className={styles.ctaCopy}>
          <p>Send a screenshot, a photograph or a question. We will help you find the right place to begin.</p>
          <ActionLink href="/contact-us#contact-form">Start an enquiry</ActionLink>
        </div>
      </section>
    </SiteFrame>
  );
}
