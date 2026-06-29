import "./Projects.css";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-header">

        <p className="projects-subtitle">
          FEATURED PROJECTS
        </p>

        <h2>Featured Work</h2>

        <p>
          A selection of projects spanning Web Development,
          Artificial Intelligence and Embedded Systems.
        </p>

      </div>

      <ProjectCarousel />

    </section>
  );
}

export default Projects;