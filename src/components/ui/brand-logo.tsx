import Image from "next/image";
import styles from "./brand-logo.module.css";

type BrandLogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function BrandLogo({ className, size = "header" }: BrandLogoProps) {
  return (
    <span className={`${styles.logo} ${styles[size]} ${className ?? ""}`}>
      <Image
        alt="K.Style Tiles & Interiors"
        height={1254}
        sizes={size === "header" ? "64px" : "116px"}
        src="/images/brand/kstyle-logo.png"
        width={1254}
      />
    </span>
  );
}
