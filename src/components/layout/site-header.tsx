"use client";

import { ActionLink } from "@/components/ui/action-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { business } from "@/data/business";
import { useRef } from "react";
import styles from "./site-header.module.css";

const navigation = [
  { label: "Tiles", href: "#tiles" },
  { label: "Flooring", href: "#flooring" },
  { label: "Bathrooms", href: "#bathrooms" },
  { label: "Beds & Mattresses", href: "#beds" },
  { label: "Inspiration", href: "#inspiration" },
  { label: "Offers", href: "#offers" },
  { label: "Visit Us", href: "#showroom" },
] as const;

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    mobileMenuRef.current?.removeAttribute("open");
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a aria-label="K.Style home" className={styles.brandLink} href="#top">
          <BrandLogo />
        </a>

        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <ActionLink href="#quote">Get a quote</ActionLink>
        </div>

        <details className={styles.mobileMenu} ref={mobileMenuRef}>
          <summary>
            <span>Menu</span>
            <span className={styles.menuMark} aria-hidden="true" />
          </summary>
          <div className={styles.mobilePanel}>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a href={item.href} key={item.label} onClick={closeMobileMenu}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className={styles.mobileActions}>
              <a className={styles.mobilePrimary} href="#quote" onClick={closeMobileMenu}>
                Get a quote
              </a>
              <a href={business.phone.href} onClick={closeMobileMenu}>Call K.Style</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
