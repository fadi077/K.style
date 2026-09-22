import type { CSSProperties } from "react";
import styles from "./image-placeholder.module.css";

type ImagePlaceholderProps = {
  className?: string;
  detail?: string;
  label?: string;
  ratio: string;
  subject: string;
  tone?: "limestone" | "grout" | "charcoal" | "surface";
};

export function ImagePlaceholder({
  className,
  detail,
  label = "Photography pending",
  ratio,
  subject,
  tone = "limestone",
}: ImagePlaceholderProps) {
  const style = { "--placeholder-ratio": ratio } as CSSProperties;

  return (
    <div
      aria-label={`${label}: ${subject}. Recommended aspect ratio ${ratio}.`}
      className={`${styles.placeholder} ${styles[tone]} ${className ?? ""}`}
      role="img"
      style={style}
    >
      <span className={styles.marker} aria-hidden="true" />
      <div className={styles.copy}>
        <p>{label}</p>
        <strong>{subject}</strong>
        <span>
          {detail ? `${detail} · ` : ""}
          {ratio}
        </span>
      </div>
    </div>
  );
}
