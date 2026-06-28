import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectPreview from "./ProjectPreview";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (

    <section
      id="projects"
      className="safe-x py-16 sm:px-8 sm:py-28"
    >

      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#56CFA2] text-sm">
            PROJECTS
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            Featured Work
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Projects spanning Web Development, AI and Embedded Systems.
          </p>

        </div>

        <div className="projects-layout">

          <div className="projects-list">

            {projects.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
                active={selectedProject.id === project.id}
                onClick={() => setSelectedProject(project)}
              />

            ))}

          </div>

          <ProjectPreview
            project={selectedProject}
          />

        </div>

      </div>

    </section>

  );
}

export default Projects;