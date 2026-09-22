import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./editorial-image.module.css";

type EditorialImageProps = {
  alt: string;
  className?: string;
  objectPosition?: string;
  preload?: boolean;
  ratio?: string;
  sizes: string;
  src: string;
};

export function EditorialImage({
  alt,
  className,
  objectPosition = "center",
  preload = false,
  ratio,
  sizes,
  src,
}: EditorialImageProps) {
  const style = {
    "--editorial-position": objectPosition,
    ...(ratio ? { "--editorial-ratio": ratio } : {}),
  } as CSSProperties;

  return (
    <div
      className={`${styles.frame} ${ratio ? styles.hasRatio : ""} ${className ?? ""}`}
      style={style}
    >
      <Image
        alt={alt}
        className={styles.image}
        fill
        preload={preload}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}
