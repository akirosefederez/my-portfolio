"use client";

type Project = {
  title: string;
  description: string;
  tags: string[];
  visual: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" style={{ background: "var(--surface-alt)" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag reveal">{"<Projects/>"}</span>
          <h2 className="reveal delay-1">Selected work</h2>
          <p className="reveal delay-2">
            A few products I&apos;ve built recently, spanning frontend, backend, and everything holding them together.
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
  );
}
