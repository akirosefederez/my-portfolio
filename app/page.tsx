"use client";

import { FormEvent, useEffect, useState } from "react";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    title: "PARC Foundation — CMS",
    description:
      "A responsive web platform that showcases the PARCaralan scholarship program and facilitates community engagement.",
    tags: ["Laravel", "Stripe", "MySQL"],
    visual: "linear-gradient(135deg,#CC527A,#E8175D)",
  },
  {
    title: "Globaltronics — IMS",
    description:
      "A scalable Infrastructure Management System to centralize and automate IT operations.",
    tags: ["Laravel", "Node.js", "MySQL"],
    visual: "linear-gradient(135deg,#474747,#363636)",
  },
  {
    title: "MettaCity — ecommerce",
    description:
      "A modern, responsive platform featuring interactive booking and immersive digital entertainment hub.",
    tags: ["Laravel", "Node.js", "MySQL"],
    visual: "linear-gradient(135deg,#A8A7A7,#474747)",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["Laravel", "React", "JavaScript", "TypeScript", "HTML5", "Tailwind-CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js / Express", "PostgreSQL / MongoDB", "REST / GraphQL APIs"],
  },
  {
    title: "Tools & Ops",
    items: ["Git / GitHub", "Docker / CI-CD", "Testing (Jest/Cypress)"],
  },
];

const contactFacts = [
  { label: "Email", value: "federezakirose@gmail.com" },
  { label: "Based in", value: "Remote / Worldwide" },
  { label: "Response time", value: "Within 24 hours" },
];

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.add("reveal-ready");
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if (!revealEls.length) return () => document.body.classList.remove("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.body.classList.remove("reveal-ready");
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thanks for reaching out! I will get back to you soon.");
  };

  return (
    <main>
      <header>
        <nav>
          <div className="logo">
            Fruity<span>Aki</span>
          </div>

          <div className="nav-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <label className="icon-btn theme-toggle" aria-label="Toggle light and dark mode">
              <input
                id="theme-toggle"
                type="checkbox"
                defaultChecked={theme === "dark"}
                onChange={(event) => setTheme(event.currentTarget.checked ? "dark" : "light")}
              />
              <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
              </svg>
              <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            </label>

            <a href="mailto:hello@fruityaki.dev" className="btn btn-primary">
              <svg className="email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="btn-label">Email</span>
            </a>

            <details className="mobile-menu">
              <summary className="hamburger" aria-label="Open menu">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </summary>

              <div className="nav-overlay" />

              <aside id="mobileNav" className="mobile-drawer">
                <div className="drawer-head">
                  <div className="logo">
                    Fruity<span>Aki</span>
                  </div>
                </div>

                <nav className="drawer-links">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href}>
                      <span>{link.label}</span>
                      <span className="arrow">→</span>
                    </a>
                  ))}
                </nav>

                <div className="drawer-foot">
                  <a href="mailto:hello@fruityaki.dev" className="btn btn-primary">
                    Say hello
                  </a>
                </div>
              </aside>
            </details>
          </div>
        </nav>
      </header>

      <HeroSection />

      <AboutSection />

      <ProjectsSection projects={projects} />

      <SkillsSection skillGroups={skillGroups} />

      <ContactSection contactFacts={contactFacts} onSubmit={handleSubmit} />

      <footer>
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="logo">
              Fruity<span style={{ color: "var(--magenta)" }}>Aki</span>
            </div>
            <p>
              Fullstack developer crafting clean, functional, and thoughtful digital products — one commit at a time.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="social-row">
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© FruityAki 2026. All rights reserved.</div>
      </footer>
    </main>
  );
}
