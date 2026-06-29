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
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: .3
            }}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <h2>{project.title}</h2>

            <p>{project.description}</p>

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
                >
                  Live Demo
                </a>
              )}

            </div>

            <button
              className="close-modal"
              onClick={onClose}
            >
              ✕
            </button>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default ProjectModal;