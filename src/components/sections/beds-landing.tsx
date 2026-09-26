import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { business } from "@/data/business";
import { categoryPages } from "@/data/category-pages";
import styles from "./beds-landing.module.css";

const beds = categoryPages.beds;

const comfortSteps = [
  {
    title: "Start with how you sleep",
    copy: "Talk through what you notice at night and what you want to feel different. Comfort is personal, so the conversation should start with you.",
  },
  {
    title: "Make room for the room",
    copy: "The bed has to work in the space around it. Bring your measurements, door positions and an idea of the furniture you are keeping.",
  },
  {
    title: "Try before you decide",
    copy: "A screen can show a style. It cannot tell you how a mattress feels. Use the showroom visit to compare in person and take your time.",
  },
  {
    title: "Ask what is current",
    copy: "Options change. Call K.Style for verified information on the beds and mattresses currently available to explore.",
  },
] as const;

const visitChecklist = [
  "Your room measurements, including the available width and length",
  "A photograph of the room and the route in to it",
  "A note of who will use the bed and what matters most to you",
  "A realistic idea of what you want to change or improve",
] as const;

const questions = [
  {
    number: "01",
    title: "What feels comfortable?",
    copy: "Begin with your own experience rather than a label or a promise. The best starting point is what you already know about how you sleep.",
  },
  {
    number: "02",
    title: "How will it fit the room?",
    copy: "The right bed needs space around it. Measurements make it easier to think clearly about movement, furniture and the overall balance of the room.",
  },
  {
    number: "03",
    title: "What do you want to compare?",
    copy: "Bring your shortlist, questions or simply a photograph. We can start from wherever you are in the decision.",
  },
] as const;

export function BedsLanding() {
  return (
    <SiteFrame>
      <section aria-labelledby="beds-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{beds.eyebrow}</p>
          <h1 id="beds-title">Make room for better rest.</h1>
          <p className={styles.heroLead}>
            Find a bed and mattress that feels right for you, in a room made for taking your time.
          </p>
          <p className={styles.heroDescription}>
            Explore current options at K.Style through comfort, room fit and an in-person showroom visit.
          </p>
          <div className={styles.actions}>
            <ActionLink href="#comfort-guide">Find your starting point</ActionLink>
            <ActionLink href={business.whatsapp.href} variant="text">Plan your visit on WhatsApp</ActionLink>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <EditorialImage
            alt="Warm, calm bedroom with an upholstered bed, linen bedding and natural light"
            className={styles.heroImage}
            objectPosition="center"
            preload
            ratio="3 / 2"
            sizes="(max-width: 768px) calc(100vw - 2rem), 60vw"
            src="/images/interiors/kstyle-bedroom-showroom.png"
          />
        </div>
      </section>

      <section aria-labelledby="comfort-title" className={styles.comfort} id="comfort-guide">
        <div className={styles.comfortInner}>
          <div className={styles.comfortIntro}>
            <p className={styles.sectionLabel}>A useful starting point</p>
            <h2 id="comfort-title">Your comfort is the brief.</h2>
            <p>
              There is no single right answer for everyone. A better choice comes from asking the right questions in the right order.
            </p>
          </div>
          <div className={styles.comfortSteps}>
            {comfortSteps.map((step, index) => (
              <article key={step.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="questions-title" className={styles.questions}>
        <div className={styles.questionsHeading}>
          <p className={styles.sectionLabel}>Before you choose</p>
          <h2 id="questions-title">Three questions worth bringing to the showroom.</h2>
        </div>
        <div className={styles.questionList}>
          {questions.map((question) => (
            <article key={question.number}>
              <span className={styles.questionNumber}>{question.number}</span>
              <h3>{question.title}</h3>
              <p>{question.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="visit-title" className={styles.visit}>
        <div className={styles.visitCopy}>
          <p className={styles.sectionLabel}>Make your visit useful</p>
          <h2 id="visit-title">Bring the room with you.</h2>
          <p>
            You do not need to arrive with the answer. A few practical details will help you compare with more confidence.
          </p>
          <ul>
            {visitChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ActionLink href={business.whatsapp.href} variant="dark">Ask on WhatsApp</ActionLink>
        </div>
        <aside className={styles.visitAside}>
          <p className={styles.asideLabel}>Call the showroom</p>
          <p className={styles.phone}>{business.phone.display}</p>
          <p className={styles.asideCopy}>
            Ask what is current, talk through what you are looking for and plan a visit to K.Style in Donegal Town.
          </p>
          <ActionLink href={business.phone.href} variant="text">Call K.Style</ActionLink>
        </aside>
      </section>

      <section aria-labelledby="sleep-cta-title" className={styles.cta}>
        <div>
          <p className={styles.sectionLabel}>Start with what you know</p>
          <h2 id="sleep-cta-title">Let&apos;s make the next night&apos;s sleep easier to plan.</h2>
        </div>
        <div className={styles.ctaCopy}>
          <p>Share your room details or a question and we will help you find the right place to begin.</p>
          <ActionLink href="/contact-us#contact-form">Send an enquiry</ActionLink>
        </div>
      </section>
    </SiteFrame>
  );
}
