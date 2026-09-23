import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { EditorialImage } from "@/components/ui/editorial-image";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import styles from "../inner-page.module.css";

export const metadata: Metadata = createPageMetadata({
  description:
    "Discuss a quote for tiles, flooring, bathrooms, beds, mattresses or interiors with K.Style in Donegal Town. Call or prepare your project details.",
  image: "/images/interiors/kstyle-hero-stone-interior.webp",
  imageAlt: "Light-filled interior with stone-effect tiles",
  path: "/get-a-quote",
  title: "Get a Quote in Donegal Town",
});

export default function GetAQuotePage() {
  return (
    <SiteFrame>
      <section aria-labelledby="quote-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Project enquiry</p>
          <h1 id="quote-title">Tell us about the room.</h1>
          <p className={styles.heroLead}>
            Start with what you know: the space, measurements, material or an
            image that captures the idea.
          </p>
          <p className={styles.heroDescription}>
            Online quote requests are not connected yet. Call K.Style now, or
            prepare the details below for when secure enquiry delivery is enabled.
          </p>
          <div className={styles.actions}>
            <ActionLink href={business.phone.href}>Call {business.phone.display}</ActionLink>
            <ActionLink href="/inspiration#send-inspiration" variant="text">
              Send your inspiration
            </ActionLink>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <EditorialImage
            alt="Light-filled interior with stone-effect tiles"
            objectPosition="center 53%"
            preload
            ratio="16 / 10"
            sizes="(max-width: 768px) calc(100vw - 2rem), 62vw"
            src="/images/interiors/kstyle-hero-stone-interior.webp"
          />
        </div>
      </section>

      <section aria-labelledby="form-title" className={styles.quoteSection}>
        <div className={styles.quoteIntro}>
          <p className={styles.sectionLabel}>A useful project brief</p>
          <h2 id="form-title">A few details make the first conversation easier.</h2>
          <p>
            Include the category, room, approximate measurements and a way to
            contact you. Photos or saved inspiration can help explain the direction.
          </p>
        </div>

        <form aria-describedby="quote-status" className={styles.quoteForm}>
          <p className={styles.formStatus} id="quote-status">
            This form is not connected. Please do not enter personal information.
            Call <a href={business.phone.href}>{business.phone.display}</a> instead.
          </p>
          <fieldset aria-disabled="true" disabled>
            <legend>Request a quote</legend>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="quote-name">Name</label>
                <input autoComplete="name" id="quote-name" name="name" required type="text" />
              </div>
              <div className={styles.field}>
                <label htmlFor="quote-phone">Phone</label>
                <input autoComplete="tel" id="quote-phone" inputMode="tel" name="phone" required type="tel" />
              </div>
            </div>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="quote-email">Email</label>
                <input autoComplete="email" id="quote-email" inputMode="email" name="email" type="email" />
              </div>
              <div className={styles.field}>
                <label htmlFor="quote-category">What are you looking for?</label>
                <select id="quote-category" name="category" required>
                  <option value="">Choose a category</option>
                  <option value="tiles">Tiles</option>
                  <option value="flooring">Flooring</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="beds-mattresses">Beds &amp; Mattresses</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="quote-details">Room and project details</label>
              <textarea id="quote-details" name="details" rows={5} />
            </div>
            <button disabled type="submit">Request a quote</button>
          </fieldset>
          <p className={styles.formTodo}>
            Secure delivery, consent, privacy wording, spam protection and
            success/error feedback must be connected before this form is enabled.
          </p>
        </form>
      </section>
    </SiteFrame>
  );
}
