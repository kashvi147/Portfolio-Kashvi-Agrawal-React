function ProjectCard({ project, position, onClick }) {
  return (
    <article
      className={`project-card ${position}`}
      onClick={position === "center" ? onClick : undefined}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-info">

        <p className="project-category">
          {project.category}
        </p>

        <h2 className="project-title">
          {project.title}
        </h2>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <button className="project-btn">
          View Details
        </button>

      </div>

    </article>
  );
}

export default ProjectCard;