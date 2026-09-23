"use client";

import { ActionLink } from "@/components/ui/action-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { business } from "@/data/business";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import styles from "./site-header.module.css";

const navigation = [
  { label: "Tiles", href: "/tiles" },
  { label: "Flooring", href: "/flooring" },
  { label: "Bathrooms", href: "/bathrooms" },
  { label: "Beds & Mattresses", href: "/beds-mattresses" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Offers", href: "/offers" },
  { label: "Visit Us", href: "/visit-us" },
] as const;

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  function closeMobileMenu() {
    mobileMenuRef.current?.removeAttribute("open");
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link aria-label="K.Style home" className={styles.brandLink} href="/">
          <BrandLogo />
        </Link>

        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          {navigation.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <ActionLink href="/get-a-quote">Get a quote</ActionLink>
        </div>

        <details className={styles.mobileMenu} ref={mobileMenuRef}>
          <summary>
            <span>Menu</span>
            <span className={styles.menuMark} aria-hidden="true" />
          </summary>
          <div className={styles.mobilePanel}>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  aria-current={pathname === item.href ? "page" : undefined}
                  href={item.href}
                  key={item.label}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className={styles.mobileActions}>
              <Link className={styles.mobilePrimary} href="/get-a-quote" onClick={closeMobileMenu}>
                Get a quote
              </Link>
              <a href={business.phone.href} onClick={closeMobileMenu}>Call K.Style</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
