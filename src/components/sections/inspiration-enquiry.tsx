import { business } from "@/data/business";
import styles from "./inspiration-enquiry.module.css";

export function InspirationEnquiry() {
  return (
    <section
      aria-labelledby="inspiration-enquiry-title"
      className={styles.section}
      id="send-inspiration"
    >
      <div className={styles.introduction}>
        <p className={styles.kicker}>A different way to begin</p>
        <h2 id="inspiration-enquiry-title">Seen something you love?</h2>
        <p className={styles.lead}>Send us your inspiration.</p>
        <p className={styles.description}>
          Send us your inspiration and we&apos;ll help you explore suitable
          options. It can be a screenshot, room photograph or a detail you want
          to use as a starting point.
        </p>
        <ol className={styles.steps}>
          <li><span>1</span> Add an inspiration photo</li>
          <li><span>2</span> Tell us what caught your eye</li>
          <li><span>3</span> Leave a phone number or email</li>
        </ol>
      </div>

      <form aria-describedby="form-status" className={styles.form} id="inspiration-form">
        <p className={styles.status} id="form-status">
          Online submissions are not connected yet. Please do not enter personal
          information. For now, call{" "}
          <a href={business.phone.href}>{business.phone.display}</a>.
        </p>

        <fieldset aria-disabled="true" disabled>
          <legend>Send an inspiration enquiry</legend>

          <div className={styles.contactGrid}>
            <div className={styles.field}>
              <label htmlFor="inspiration-name">Name</label>
              <input
                autoComplete="name"
                id="inspiration-name"
                name="name"
                required
                type="text"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="inspiration-category">What are you looking for?</label>
              <select id="inspiration-category" name="category" required>
                <option value="">Choose a category</option>
                <option value="tiles">Tiles</option>
                <option value="flooring">Flooring</option>
                <option value="bathroom">Bathroom</option>
                <option value="beds-mattresses">Beds &amp; Mattresses</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.field}>
              <label htmlFor="inspiration-phone">Phone</label>
              <input
                autoComplete="tel"
                id="inspiration-phone"
                inputMode="tel"
                name="phone"
                type="tel"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="inspiration-email">Email</label>
              <input
                autoComplete="email"
                id="inspiration-email"
                inputMode="email"
                name="email"
                type="email"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="inspiration-details">Optional message</label>
            <textarea
              id="inspiration-details"
              name="message"
              placeholder="Tell us what caught your eye or where you plan to use it"
              rows={4}
            />
          </div>

          <div className={styles.uploadField}>
            <label htmlFor="inspiration-image">Optional inspiration image</label>
            <input
              accept="image/jpeg,image/png,image/webp"
              aria-describedby="image-guidance"
              id="inspiration-image"
              name="inspiration-image"
              type="file"
            />
            <span id="image-guidance">JPG, PNG or WebP. File limits will be confirmed before launch.</span>
          </div>

          <button disabled type="submit">Send inspiration</button>
        </fieldset>
        <p className={styles.todo}>
          This form will be enabled after secure uploads, enquiry delivery,
          consent, retention, spam protection and submission feedback are connected.
        </p>
      </form>
    </section>
  );
}
