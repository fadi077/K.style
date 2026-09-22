import { BrandLogo } from "@/components/ui/brand-logo";
import { business } from "@/data/business";
import styles from "./site-footer.module.css";

const categoryLinks = [
  ["Tiles", "#tiles"],
  ["Flooring", "#flooring"],
  ["Bathrooms", "#bathrooms"],
  ["Beds & mattresses", "#beds"],
] as const;

const pageLinks = [
  ["Inspiration", "#inspiration"],
  ["Send your inspiration", "#send-inspiration"],
  ["Offers", "#offers"],
  ["Visit us", "#showroom"],
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a aria-label="K.Style home" className={styles.logoLink} href="#top">
            <BrandLogo size="footer" />
          </a>
          <p>{business.name}</p>
          <address>
            {business.address.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a className={styles.phone} href={business.phone.href}>
            {business.phone.display}
          </a>
        </div>

        <nav aria-label="Product categories" className={styles.linkGroup}>
          <h2>Categories</h2>
          {categoryLinks.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <nav aria-label="Footer navigation" className={styles.linkGroup}>
          <h2>Explore</h2>
          {pageLinks.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
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
          <a className={styles.contactCta} href="#quote">Get a quote</a>
        </div>

        <div className={styles.legal}>
          <p>© K.Style</p>
          <p>Email, social and policy details are pending confirmation before launch.</p>
        </div>
      </div>
    </footer>
  );
}
