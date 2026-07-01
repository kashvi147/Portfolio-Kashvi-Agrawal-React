import { useState, useEffect } from "react";
import useGithubProjects from "../../hooks/useGithubProjects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function ProjectCarousel() {

  const { projects, loading } = useGithubProjects();

  const featuredProjects = projects;

  // ALL HOOKS MUST COME FIRST
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!featuredProjects.length) return;

    const timer = setInterval(() => {
      nextProject();
    }, 6000);

    return () => clearInterval(timer);

  }, [currentIndex, featuredProjects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const previousProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  // AFTER ALL HOOKS
  if (loading) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "80px"
        }}
      >
        Loading Projects...
      </div>
    );
  }

  if (!featuredProjects.length) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "80px"
        }}
      >
        No Projects Found
      </div>
    );
  }

  const leftIndex =
    currentIndex === 0
      ? featuredProjects.length - 1
      : currentIndex - 1;

  const rightIndex =
    currentIndex === featuredProjects.length - 1
      ? 0
      : currentIndex + 1;

  return (
    <>
      <div className="carousel">

        <div className="carousel-container">

          <button
            className="carousel-arrow left"
            onClick={previousProject}
          >
            ←
          </button>

          <ProjectCard
            project={featuredProjects[leftIndex]}
            position="left"
          />

          <ProjectCard
            project={featuredProjects[currentIndex]}
            position="center"
            onClick={() =>
              setSelectedProject(featuredProjects[currentIndex])
            }
          />

          <ProjectCard
            project={featuredProjects[rightIndex]}
            position="right"
          />

          <button
            className="carousel-arrow right"
            onClick={nextProject}
          >
            →
          </button>

        </div>

        <div className="carousel-dots">

          {featuredProjects.map((_, index) => (

            <button
              key={index}
              className={
                currentIndex === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrentIndex(index)}
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