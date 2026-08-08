"use client";

export default function AboutSection() {
  return (
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
            I started out tinkering with layouts in the browser&apos;s inspector, and ended up falling in love with everything underneath it too — servers, schemas, and the quiet plumbing that makes an app actually work.
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
  );
}
