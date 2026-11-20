"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  visual: string;
  image: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedProject && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedProject]);

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
            <article
              key={project.title}
              className={`project-card reveal${index === 1 ? " delay-1" : index === 2 ? " delay-2" : ""}`}
            >
              <button
                type="button"
                className="project-card-action"
                onClick={() => {
                  setImageUnavailable(false);
                  setSelectedProject(project);
                }}
                aria-label={`View ${project.title} screenshot`}
                aria-haspopup="dialog"
              />
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
            </article>
          ))}
        </div>
      </div>
      {selectedProject && (
        <dialog
          ref={dialogRef}
          className="project-dialog"
          aria-labelledby="project-dialog-title"
          onClose={() => setSelectedProject(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              event.currentTarget.close();
            }
          }}
        >
          <div className="project-dialog-head">
            <h2 id="project-dialog-title">{selectedProject.title}</h2>
            <button
              type="button"
              className="project-dialog-close"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close project preview"
            >
              &times;
            </button>
          </div>
          {imageUnavailable ? (
            <p className="project-image-fallback" role="status">
              Add the project screenshot at <code>public{selectedProject.image}</code> to show it here.
            </p>
          ) : (
            <Image
              src={selectedProject.image}
              alt={`${selectedProject.title} project screenshot`}
              width={1600}
              height={900}
              className="project-dialog-image"
              onError={() => setImageUnavailable(true)}
            />
          )}
        </dialog>
      )}
    </section>
  );
}
