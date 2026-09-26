"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { business } from "@/data/business";
import styles from "./contact-form.module.css";

type SubmissionState = "idle" | "submitting" | "success" | "error";

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setStatusMessage("");

    const form = formRef.current;
    if (!form) return;

    try {
      const response = await fetch("/api/contact", {
        body: new FormData(form),
        method: "POST",
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong. Please call K.Style instead.");
      }

      form.reset();
      setSubmissionState("success");
      setStatusMessage(result.message ?? "Thank you. Your enquiry has been sent.");
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call K.Style instead.",
      );
    }
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const photo = event.target.files?.[0];

    if (photo && photo.size > MAX_PHOTO_SIZE) {
      event.target.value = "";
      setSubmissionState("error");
      setStatusMessage("Please choose an image smaller than 5 MB.");
      return;
    }

    if (submissionState === "error") {
      setSubmissionState("idle");
      setStatusMessage("");
    }
  }

  return (
    <form
      aria-describedby="contact-form-guidance"
      className={styles.form}
      encType="multipart/form-data"
      id="contact-form"
      method="post"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className={styles.formHeader}>
        <p className={styles.formEyebrow}>Send an enquiry</p>
        <h2>Start with what you know.</h2>
        <p id="contact-form-guidance">
          Tell us what you are working on and we&apos;ll have a better sense of how to help.
        </p>
      </div>

      {statusMessage ? (
        <p
          aria-live="polite"
          className={`${styles.status} ${submissionState === "success" ? styles.success : ""} ${submissionState === "error" ? styles.error : ""}`}
          role={submissionState === "error" ? "alert" : "status"}
        >
          {statusMessage}
        </p>
      ) : null}

      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="contact-name">Your name</label>
          <input autoComplete="name" id="contact-name" name="name" required type="text" />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email">Email address</label>
          <input
            autoComplete="email"
            id="contact-email"
            inputMode="email"
            name="email"
            required
            type="email"
          />
        </div>
      </div>

      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="contact-phone">
            Phone number <span>(optional)</span>
          </label>
          <input autoComplete="tel" id="contact-phone" inputMode="tel" name="phone" type="tel" />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-enquiry-type">What can we help with?</label>
          <select defaultValue="" id="contact-enquiry-type" name="enquiryType" required>
            <option disabled value="">Choose a category</option>
            <option value="tiles">Tiles</option>
            <option value="flooring">Flooring</option>
            <option value="bathroom">Bathroom</option>
            <option value="beds-mattresses">Beds &amp; mattresses</option>
            <option value="general">A general enquiry</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">How can we help?</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell us about your room, project or question"
          required
          rows={6}
        />
      </div>

      <div className={styles.uploadField}>
        <label htmlFor="contact-photo">Add a photo <span>(optional)</span></label>
        <input
          accept="image/jpeg,image/png,image/webp"
          aria-describedby="contact-photo-guidance"
          id="contact-photo"
          name="photo"
          onChange={handlePhotoChange}
          type="file"
        />
        <span id="contact-photo-guidance">JPG, PNG or WebP · maximum 5 MB</span>
      </div>

      <label className={styles.consent}>
        <input name="consent" required type="checkbox" />
        <span>Please confirm that K.Style may use these details to reply to your enquiry.</span>
      </label>

      <button disabled={submissionState === "submitting"} type="submit">
        {submissionState === "submitting" ? "Sending enquiry…" : "Send enquiry"}
      </button>
      <p className={styles.formNote}>
        Prefer a quick reply? <a href={business.whatsapp.href}>message K.Style on WhatsApp</a> or email {business.email.display}.
      </p>
    </form>
  );
}
