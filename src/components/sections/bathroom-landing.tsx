import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { business } from "@/data/business";
import { categoryPages } from "@/data/category-pages";
import styles from "./bathroom-landing.module.css";

const bathrooms = categoryPages.bathrooms;

const planningQuestions = [
  {
    title: "How does the room need to work?",
    copy: "Start with the everyday routines, storage, movement and practical details that matter most to you.",
  },
  {
    title: "What should it feel like?",
    copy: "Use light, tone and texture to describe the atmosphere you want before choosing individual surfaces.",
  },
  {
    title: "What can you measure?",
    copy: "Room dimensions, windows, door swings and fixed points give the showroom conversation a useful starting place.",
  },
] as const;

const projectBrief = [
  "A photo of the existing room",
  "Approximate dimensions or a simple sketch",
  "An image that captures the feeling you like",
] as const;

export function BathroomLanding() {
  return (
    <SiteFrame>
      <section aria-labelledby="bathroom-title" className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{bathrooms.eyebrow}</p>
            <h1 id="bathroom-title">A bathroom that feels like yours.</h1>
            <p className={styles.heroLead}>
              Plan the room around the way you live, then bring the surfaces and bathroom ware together.
            </p>
            <div className={styles.actions}>
              <ActionLink href={business.whatsapp.href}>Message on WhatsApp</ActionLink>
              <ActionLink href="/contact-us#contact-form" variant="text">Share a bathroom photo</ActionLink>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <EditorialImage
              {...bathrooms.hero!}
              className={styles.heroImage}
              preload
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="planning-title" className={styles.planning} id="bathroom-guide">
        <div className={styles.planningIntro}>
          <p className={styles.sectionLabel}>Bathroom planning guide</p>
          <h2 id="planning-title">The useful questions come first.</h2>
          <p>
            You do not need to know every answer before you visit. Start with the decisions that will shape the room.
          </p>
        </div>
        <div className={styles.questionList}>
          {planningQuestions.map((question, index) => (
            <article key={question.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{question.title}</h3>
              <p>{question.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="brief-title" className={styles.brief}>
        <EditorialImage
          alt="Bathroom vanity with basin, stone-effect tiles and material samples"
          className={styles.briefImage}
          objectPosition="center 50%"
          ratio="4 / 5"
          sizes="(max-width: 768px) calc(100vw - 2rem), 40vw"
          src="/images/products/kstyle-curated-bathroom-collection.png"
        />
        <div className={styles.briefCopy}>
          <p className={styles.sectionLabel}>Build a useful brief</p>
          <h2 id="brief-title">Bring the room into the conversation.</h2>
          <p>
            A photograph or reference image can say a lot. Add a few practical details and the first conversation becomes much easier to start.
          </p>
          <ul>
            {projectBrief.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ActionLink href="/contact-us#contact-form">Start your bathroom enquiry</ActionLink>
        </div>
      </section>

      <section aria-labelledby="materials-title" className={styles.materials}>
        <div className={styles.materialsHeading}>
          <p className={styles.sectionLabel}>Look at the whole room</p>
          <h2 id="materials-title">A calm surface. A useful layout. A room that belongs together.</h2>
        </div>
        <div className={styles.materialGrid}>
          <EditorialImage
            alt="Light neutral bathroom with textured tiles and walk-in shower"
            className={styles.materialMain}
            objectPosition="center 50%"
            ratio="4 / 5"
            sizes="(max-width: 768px) calc(100vw - 2rem), 42vw"
            src="/images/interiors/kstyle-inspiration-textured-bathroom.png"
          />
          <div className={styles.materialNote}>
            <p>Compare the relationship between</p>
            <ul>
              <li>Wall and floor</li>
              <li>Texture and light</li>
              <li>Furniture and fittings</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="bathroom-cta-title" className={styles.cta}>
        <div>
          <p className={styles.sectionLabel}>Start with one image</p>
          <h2 id="bathroom-cta-title">Have a bathroom in mind?</h2>
        </div>
        <div className={styles.ctaCopy}>
          <p>
            Send a room photograph or inspiration image and tell K.Style what you are considering.
          </p>
          <div className={styles.ctaActions}>
            <ActionLink href="/contact-us#contact-form">Share your bathroom photo</ActionLink>
            <a href={business.phone.href}>Call K.Style</a>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
