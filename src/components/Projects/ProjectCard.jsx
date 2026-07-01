function ProjectCard({ project, position, onClick }) {
  return (
    <article
  className={`project-card ${position}`}
  data-cursor="OPEN"
  onClick={onClick}
  style={{
    transition:
      "transform 0.7s cubic-bezier(.22,1,.36,1), opacity 0.7s ease, filter 0.7s ease"
  }}
>
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />

        <div className="project-overlay">
          <span>{project.category}</span>
        </div>
      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="tech-list">
          {project.tech?.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-footer">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="project-button"
    onClick={(e) => e.stopPropagation()}
    
    data-cursor="GITHUB"
  >
    View on GitHub →
  </a>

</div>

      </div>

    </article>
  );
}

export default ProjectCard;