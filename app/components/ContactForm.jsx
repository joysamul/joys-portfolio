"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { assets } from "../../assests/assets";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ kind: "idle", message: "" });
  const isSending = status.kind === "sending";

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formRef.current) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        kind: "error",
        message: "Email delivery is not configured yet. Please use the email link below to reach me.",
      });
      return;
    }

    setStatus({ kind: "sending", message: "Sending your message..." });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      formRef.current.reset();
      setStatus({ kind: "success", message: "Thanks! Your message has been sent." });
    } catch {
      setStatus({
        kind: "error",
        message: "Your message could not be sent. Please try again or email me directly.",
      });
    }
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} aria-busy={isSending}>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Your email address" autoComplete="email" required />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" placeholder="Tell me about your project" rows={5} required />
      </label>
      <button className="pill-button pill-button-dark form-submit" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Send message"}
        <Image src={assets.send_icon} alt="" width={16} height={16} />
      </button>
      {status.message && (
        <p
          className={`form-status${status.kind === "idle" ? "" : ` form-status-${status.kind}`}`}
          role={status.kind === "error" ? "alert" : "status"}
          aria-live={status.kind === "error" ? "assertive" : "polite"}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}