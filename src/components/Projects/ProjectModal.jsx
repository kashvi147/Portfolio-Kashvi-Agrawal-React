import { AnimatePresence, motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>

      {project && (

        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 40
            }}
            transition={{
              duration: 0.35
            }}
          >

            <button
              className="close-modal"
              onClick={onClose}
            >
              ✕
            </button>

            <div className="modal-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="modal-content">

              <div className="modal-header">

                <span className="modal-category">
                  {project.category}
                </span>

                <span className="modal-status">
                  {project.status}
                </span>

              </div>

              <h2>{project.title}</h2>

              <p>
                {project.description}
              </p>

              <div className="modal-tech">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="modal-buttons">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="LIVE"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default ProjectModal;