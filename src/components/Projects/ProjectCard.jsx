function ProjectCard({ project, selected, onClick }) {
  return (
    <button
      onClick={() => onClick(project)}
      className={`group w-full rounded-3xl overflow-hidden text-left transition-all duration-500
      ${
        selected
          ? "scale-105 border-[#56CFA2] shadow-[0_0_40px_rgba(86,207,162,.25)]"
          : "opacity-70 hover:opacity-100 hover:translate-x-2"
      }`}
    >
      <div className="bg-[#13181d] border border-white/10 rounded-3xl overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="p-5">

          <p className="text-xs uppercase tracking-[3px] text-[#56CFA2]">
            {project.category}
          </p>

          <h3 className="text-xl font-bold text-white mt-2">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 mt-4">

            {project.skills.map((skill) => (

              <span
                key={skill}
                className="rounded-full border border-[#56CFA2]/30 bg-[#56CFA2]/10 px-3 py-1 text-xs text-[#56CFA2]"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>
    </button>
  );
}

export default ProjectCard;