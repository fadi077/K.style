import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./action-link.module.css";

type ActionLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "brand" | "dark" | "text";
};

export function ActionLink({
  children,
  href,
  variant = "brand",
}: ActionLinkProps) {
  return (
    <Link className={`${styles.link} ${styles[variant]}`} href={href}>
      <span>{children}</span>
    </Link>
  );
}
