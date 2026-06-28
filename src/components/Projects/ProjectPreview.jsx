function ProjectPreview({ project }) {
  if (!project) return null;

  return (
    <div className="project-preview">

      <img
        src={project.image}
        alt={project.title}
        className="project-preview-image"
      />

      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <div className="preview-tags">
        {project.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="preview-buttons">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>

    </div>
  );
}

export default ProjectPreview;