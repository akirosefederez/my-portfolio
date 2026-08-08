"use client";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <div className="eyebrow reveal">
            <span className="cursor" /> $ whoami
          </div>
          <h1 className="reveal delay-1">
            Hi, I&apos;m Aki Rose Federez —<br />
            <span className="accent">I&apos;m a Fullstack Developer</span>
          </h1>
          <p className="lead reveal delay-2">
            I design and build complete web products end to end — from pixel-considered interfaces down to the APIs and databases that keep them running.
          </p>
          <div className="hero-actions reveal delay-3">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let&apos;s talk
            </a>
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
              <span className="tok-mut">{"// developer.js"}</span>
              <br />
              <span className="tok-key">const</span> developer = {"{"}
              <br />
              {"  "}username: <span className="tok-str">&apos;FruityAki&apos;</span>,
              <br />
              {"  "}role: <span className="tok-str">&apos;Fullstack Developer&apos;</span>,
              <br />
              {"  "}stack: [<span className="tok-str">&apos;React&apos;</span>, <span className="tok-str">&apos;Node&apos;</span>, <span className="tok-str">&apos;SQL&apos;</span>],
              <br />
              {"  "}<span className="tok-fn">available</span>: <span className="tok-key">true</span>
              <br />
              {"};"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
