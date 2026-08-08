"use client";

import { FormEvent, useEffect, useState } from "react";

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("drawer-lock", drawerOpen);
  }, [drawerOpen]);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if (!revealEls.length) return;

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
    return () => observer.disconnect();
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
            <button
              type="button"
              className="icon-btn"
              aria-label="Toggle light and dark mode"
              onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <a href="mailto:hello@fruityaki.dev" className="btn btn-primary">
              <span className="btn-label">Email</span>
            </a>

            <button
              type="button"
              className={drawerOpen ? "hamburger open" : "hamburger"}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobileNav"
              onClick={() => setDrawerOpen((open) => !open)}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </nav>
      </header>

      <div className={drawerOpen ? "nav-overlay open" : "nav-overlay"} onClick={() => setDrawerOpen(false)} />

      <aside id="mobileNav" className={drawerOpen ? "mobile-drawer open" : "mobile-drawer"} aria-hidden={!drawerOpen}>
        <div className="drawer-head">
          <div className="logo">
            Fruity<span>Aki</span>
          </div>
          <button type="button" className="icon-btn" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="drawer-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setDrawerOpen(false)}>
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

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <div className="eyebrow reveal">
              <span className="cursor" /> $ whoami
            </div>
            <h1 className="reveal delay-1">
              Hi, I'm Aki Rose Federez —<br />
              <span className="accent">I'm a Fullstack Developer</span>
            </h1>
            <p className="lead reveal delay-2">
              I design and build complete web products end to end — from pixel-considered interfaces down to the APIs and databases that keep them running.
            </p>
            <div className="hero-actions reveal delay-3">
              <a href="#projects" className="btn btn-primary">View my work</a>
              <a href="#contact" className="btn btn-outline">Let's talk</a>
            </div>
          </div>

          <div className="hero-visual reveal delay-2">
            <div className="chrome-window">
              <div className="chrome-bar">
                <div className="chrome-dot" style={{ background: "#ff5f57" }} />
                <div className="chrome-dot" style={{ background: "#febc2e" }} />
                <div className="chrome-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="chrome-body">
                <span className="tok-mut">// developer.js</span>
                <br />
                <span className="tok-key">const</span> developer = {'{'}
                <br />
                {'  '}username: <span className="tok-str">'FruityAki'</span>,
                <br />
                {'  '}role: <span className="tok-str">'Fullstack Developer'</span>,
                <br />
                {'  '}stack: [<span className="tok-str">'React'</span>, <span className="tok-str">'Node'</span>, <span className="tok-str">'SQL'</span>],
                <br />
                {'  '}<span className="tok-fn">available</span>: <span className="tok-key">true</span>
                <br />
                {'};'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap about-grid">
          <div className="about-photo reveal">
            <div className="chrome-window">
              <div className="chrome-bar">
                <div className="chrome-dot" style={{ background: "#ff5f57" }} />
                <div className="chrome-dot" style={{ background: "#febc2e" }} />
                <div className="chrome-dot" style={{ background: "#28c840" }} />
              </div>
              <div className="chrome-body">FA</div>
            </div>
          </div>
          <div className="about-text">
            <span className="section-tag reveal">{"<About/>"}</span>
            <h2 className="reveal delay-1" style={{ marginBottom: "22px" }}>
              A developer who cares about both ends of the stack
            </h2>
            <p className="reveal delay-2">
              I started out tinkering with layouts in the browser's inspector, and ended up falling in love with everything underneath it too — servers, schemas, and the quiet plumbing that makes an app actually work.
            </p>
            <p className="reveal delay-2">
              These days I split my time between shipping clean, responsive interfaces and building the backend systems that support them: REST and GraphQL APIs, relational databases, and the occasional 2am deployment fix.
            </p>
            <div className="stat-row reveal delay-3">
              <div className="stat">
                <b>4+</b>
                <span>Years building</span>
              </div>
              <div className="stat">
                <b>30+</b>
                <span>Projects shipped</span>
              </div>
              <div className="stat">
                <b>12</b>
                <span>Happy clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={{ background: "var(--surface-alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag reveal">{"<Projects/>"}</span>
            <h2 className="reveal delay-1">Selected work</h2>
            <p className="reveal delay-2">
              A few products I've built recently, spanning frontend, backend, and everything holding them together.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card reveal${index === 1 ? " delay-1" : index === 2 ? " delay-2" : ""}`}
              >
                <div className="project-thumb" style={{ background: project.visual }}>
                  {project.title.split(" —")[0]}
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag reveal">{"<Skills/>"}</span>
            <h2 className="reveal delay-1">Tools I reach for</h2>
            <p className="reveal delay-2">
              A working toolkit across the frontend, backend, and everything that keeps a project shipping smoothly.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`skill-card reveal${index === 1 ? " delay-1" : index === 2 ? " delay-2" : ""}`}
              >
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <div key={item} className="tool-item">
                      <div className="tool-icon">
                        <span>{item.slice(0, 2)}</span>
                      </div>
                      <div className="tool-name">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "var(--surface-alt)" }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-tag reveal">{"<Contact/>"}</span>
            <h2 className="reveal delay-1">Let's build something together</h2>
            <p className="reveal delay-2">
              Have a project in mind, or just want to say hi? My inbox is open.
            </p>
          </div>
          <div className="contact-grid">
            <form className="reveal" onSubmit={handleSubmit}>
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
