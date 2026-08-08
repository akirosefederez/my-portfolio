"use client";

import type { FormEvent } from "react";

type ContactFact = {
  label: string;
  value: string;
};

type ContactSectionProps = {
  contactFacts: ContactFact[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function ContactSection({ contactFacts, onSubmit }: ContactSectionProps) {
  return (
    <section id="contact" style={{ background: "var(--surface-alt)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag reveal">{"<Contact/>"}</span>
          <h2 className="reveal delay-1">Let&apos;s build something together</h2>
          <p className="reveal delay-2">
            Have a project in mind, or just want to say hi? My inbox is open.
          </p>
        </div>
        <div className="contact-grid">
          <form className="reveal" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
          <div className="contact-side reveal delay-1">
            {contactFacts.map((fact) => (
              <div key={fact.label} className="row">
                <div className="ic">
                  <span>{fact.label.charAt(0)}</span>
                </div>
                <div>
                  <small>{fact.label}</small>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
