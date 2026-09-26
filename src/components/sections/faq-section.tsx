import { faqItems } from "@/data/faq";
import styles from "./faq-section.module.css";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className={styles.section} id="faq">
      <div className={styles.introduction}>
        <p className={styles.kicker}>Useful before you visit</p>
        <h2 id="faq-title">Questions, answered clearly.</h2>
        <p>
          A few practical details before you call, visit the showroom or start
          thinking through a room.
        </p>
      </div>

      <div className={styles.list}>
        {faqItems.map((item) => (
          <details className={styles.item} key={item.question}>
            <summary>
              <span>{item.question}</span>
              <span aria-hidden="true" className={styles.mark} />
            </summary>
            <div className={styles.answer}>
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
