"use client";

type SkillGroup = {
  title: string;
  items: string[];
};

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export default function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
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
  );
}
