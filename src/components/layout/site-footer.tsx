import { BrandLogo } from "@/components/ui/brand-logo";
import { business } from "@/data/business";
import Link from "next/link";
import styles from "./site-footer.module.css";

const categoryLinks = [
  ["Tiles", "/tiles"],
  ["Flooring", "/flooring"],
  ["Bathrooms", "/bathrooms"],
  ["Beds & mattresses", "/beds-mattresses"],
] as const;

const pageLinks = [
  ["Inspiration", "/inspiration"],
  ["Send your inspiration", "/inspiration#send-inspiration"],
  ["FAQs", "/#faq"],
  ["Offers", "/offers"],
  ["Contact us", "/contact-us"],
] as const;

type SocialIconName = (typeof business.social)[number]["icon"];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 0 24 24">
        <path d="M13.4 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.4-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V10H8v3h2.6v8h2.8Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" focusable="false" viewBox="0 0 24 24">
      <rect height="17" rx="5" stroke="currentColor" strokeWidth="2" width="17" x="3.5" y="3.5" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.25" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link aria-label="K.Style home" className={styles.logoLink} href="/">
            <BrandLogo size="footer" />
          </Link>
          <p>{business.name}</p>
          <address>
            {business.address.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a className={styles.phone} href={business.phone.href}>
            {business.phone.display}
          </a>
          <a className={styles.contactLink} href={business.whatsapp.href}>
            WhatsApp {business.whatsapp.display}
          </a>
          <a className={styles.contactLink} href={business.email.href}>
            {business.email.display}
          </a>
          <nav aria-label="Social media" className={styles.social}>
            <h2>Follow K.Style</h2>
            {business.social.map((social) => (
              <a
                aria-label={social.label}
                className={styles.socialLink}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
                title={social.label}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </nav>
        </div>

        <nav aria-label="Product categories" className={styles.linkGroup}>
          <h2>Categories</h2>
          {categoryLinks.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Footer navigation" className={styles.linkGroup}>
          <h2>Explore</h2>
          {pageLinks.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.details}>
          <h2>Opening hours</h2>
          <dl className={styles.hours}>
            {business.hours.map((entry) => (
              <div key={entry.day}>
                <dt>{entry.day}</dt>
                <dd>{entry.hours}</dd>
              </div>
            ))}
          </dl>
          <Link className={styles.contactCta} href="/get-a-quote">Get a quote</Link>
        </div>

        <div className={styles.legal}>
          <p>© K.Style</p>
          <p>Privacy and legal details are pending confirmation before launch.</p>
        </div>
      </div>
    </footer>
  );
}
