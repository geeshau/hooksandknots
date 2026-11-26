"use client";

import { useState, FormEvent } from "react";
import Footer from "./Footer";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Thank you. We will get back to you soon.");
  };

  return (
    <div className="contact-section">
      {/* Heading */}
      <div className="contact-heading-block">
        <p className="eyebrow">CLIENT CARE</p>
        <h2>Let&apos;s talk.</h2>
        <p>
          Questions about a piece, a custom idea, or your order? We
          are here to help.
        </p>
      </div>

      {/* Layout */}
      <div className="contact-layout-block">
        <div className="contact-details">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>
            We would love
            <br />
            to hear from you.
          </h2>
          <p>
            For the quickest response, send us a WhatsApp message. You
            can also use the form and we will get back to you soon.
          </p>
          <a
            className="contact-direct"
            href="https://wa.me/254736953766?text=Hello%20Hook%20%26%20Knots"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <span>+254 736 953 766</span>
          </a>
          <a className="contact-direct" href="mailto:hello@hookandknots.com">
            Email <span>hello@hookandknots.com</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contactName">Name</label>
          <input
            id="contactName"
            type="text"
            placeholder="Your name"
            required
          />
          <label htmlFor="contactEmail">Email address</label>
          <input
            id="contactEmail"
            type="email"
            placeholder="you@example.com"
            required
          />
          <label htmlFor="contactMsg">Message</label>
          <textarea
            id="contactMsg"
            rows={5}
            placeholder="How can we help?"
            required
          />
          <button className="cta-button cta-button-dark" type="submit">
            Send message
          </button>
          <p className="form-status">{status}</p>
        </form>
      </div>

      {/* Image */}
      <div className="contact-image-block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/culture6.png"
          alt="Hook & Knots campaign portrait"
          loading="lazy"
        />
        <p className="eyebrow" style={{ marginTop: 14 }}>
          HOOK &amp; KNOTS / NAIROBI
        </p>
      </div>

      <Footer />
    </div>
  );
}
