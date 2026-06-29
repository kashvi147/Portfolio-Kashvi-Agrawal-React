import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function ProjectCarousel() {
  const featured = projects.filter((project) => project.featured);

  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === featured.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [featured.length]);

  const previous =
    current === 0
      ? featured.length - 1
      : current - 1;

  const next =
    current === featured.length - 1
      ? 0
      : current + 1;

  return (
    <>
      <div className="carousel">

        <button
          className="arrow left"
          onClick={() => setCurrent(previous)}
        >
          ←
        </button>

        <div className="carousel-stage">

          {/* LEFT CARD */}

          <ProjectCard
            project={featured[previous]}
            position="left"
          />

          {/* CENTER CARD */}

          <AnimatePresence mode="wait">

            <motion.div
              key={featured[current].id}
              className="center-wrapper"
              initial={{
                opacity: 0,
                scale: 0.92
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.92
              }}
              transition={{
                duration: 0.45
              }}
            >
              <ProjectCard
                project={featured[current]}
                position="center"
                onClick={() =>
                  setSelectedProject(featured[current])
                }
              />
            </motion.div>

          </AnimatePresence>

          {/* RIGHT CARD */}

          <ProjectCard
            project={featured[next]}
            position="right"
          />

        </div>

        <button
          className="arrow right"
          onClick={() => setCurrent(next)}
        >
          →
        </button>

        <div className="dots">

          {featured.map((_, index) => (

            <button
              key={index}
              className={
                current === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default ProjectCarousel;