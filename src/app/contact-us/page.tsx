import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import { ActionLink } from "@/components/ui/action-link";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  description:
    "Contact K.Style Tiles & Interiors in Donegal Town about tiles, flooring, bathrooms, beds, mattresses or your interior project.",
  imageAlt: "K.Style Tiles & Interiors contact page",
  path: "/contact-us",
  title: "Contact K.Style in Donegal Town",
});

export default function ContactUsPage() {
  return (
    <SiteFrame>
      <section aria-labelledby="contact-title" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Contact K.Style · Donegal Town</p>
          <h1 id="contact-title">Tell us what you&apos;re planning.</h1>
          <p className={styles.heroLead}>
            A room, a material, a photograph or just a question. Start the conversation here.
          </p>
          <div className={styles.actions}>
            <ActionLink href={business.whatsapp.href}>Message on WhatsApp</ActionLink>
            <ActionLink href={business.email.href} variant="text">Email K.Style</ActionLink>
          </div>
        </div>

        <aside aria-labelledby="contact-details-title" className={styles.contactCard}>
          <p className={styles.cardLabel}>Speak to the showroom</p>
          <h2 id="contact-details-title">We&apos;re here to help you make a confident choice.</h2>
          <a className={styles.phone} href={business.phone.href}>{business.phone.display}</a>
          <div className={styles.contactChannels}>
            <a href={business.whatsapp.href}>WhatsApp {business.whatsapp.display}</a>
            <a href={business.email.href}>{business.email.display}</a>
          </div>
          <address>
            {business.address.lines.map((line) => <span key={line}>{line}</span>)}
          </address>
          <dl className={styles.hours}>
            {business.hours.map((entry) => (
              <div key={entry.day}>
                <dt>{entry.day}</dt>
                <dd>{entry.hours}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section aria-labelledby="enquiry-title" className={styles.formSection}>
        <div className={styles.formIntro}>
          <p className={styles.sectionLabel}>A simple starting point</p>
          <h2 id="enquiry-title">Send the details that are useful to you.</h2>
          <p>
            You don&apos;t need a finished plan. Tell us what you&apos;re considering, choose a category and add a photo if it helps explain the idea.
          </p>
          <ul>
            <li>Ask about tiles, flooring, bathrooms, beds or mattresses.</li>
            <li>Share a room photograph or an inspiration image.</li>
            <li>Include a phone number if you&apos;d prefer a call back.</li>
          </ul>
        </div>
        <ContactForm />
      </section>
    </SiteFrame>
  );
}
