function Skills() {
  return (
    <>
      <section id="skills" className="bg-[#12121a] safe-x py-16 sm:px-8 sm:py-28" data-aos="fade-up">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14" data-aos="fade-up" data-aos-duration="650">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-400 sm:text-sm">Skills</span>
            <h2 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">What I Work With</h2>
            <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-slate-400 sm:mt-4 sm:text-base">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {/* Programming Languages Card */}
            <div className="card-hover flex flex-col items-center rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 shadow-md transition-all duration-300 sm:p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="0">
              <h3 className="font-display mb-3 text-center text-lg font-bold text-white sm:mb-4 sm:text-xl">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="skill-badge">C++</span>
                <span className="skill-badge">C</span>
                <span className="skill-badge">Python</span>
              </div>
            </div>
            {/* Web Technologies Card */}
            <div className="card-hover flex flex-col items-center rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 shadow-md transition-all duration-300 sm:p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
              <h3 className="font-display mb-3 text-center text-lg font-bold text-white sm:mb-4 sm:text-xl">Web Technologies</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="skill-badge">Web Development</span>
              </div>
            </div>
            {/* Artificial Intelligence Card */}
            <div className="card-hover flex flex-col items-center rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 shadow-md transition-all duration-300 sm:p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
              <h3 className="font-display mb-3 text-center text-lg font-bold text-white sm:mb-4 sm:text-xl">Artificial Intelligence</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="skill-badge">AI-Powered Development</span>
              </div>
            </div>
            {/* Embedded & Robotics Card */}
            <div className="card-hover flex flex-col items-center rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 shadow-md transition-all duration-300 sm:p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
              <h3 className="font-display mb-3 text-center text-lg font-bold leading-snug text-white sm:mb-4 sm:text-xl">Embedded &amp; Robotics</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="skill-badge">Arduino</span>
                <span className="skill-badge">IoT</span>
                <span className="skill-badge">Embedded Systems</span>
              </div>
            </div>
            {/* Engineering Analysis Card */}
            <div className="card-hover flex flex-col items-center rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 shadow-md transition-all duration-300 sm:p-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
              <h3 className="font-display mb-3 text-center text-lg font-bold text-white sm:mb-4 sm:text-xl">Engineering Analysis</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="skill-badge">MATLAB</span>
              </div>
            </div>
            {/* CAD & Design Card */}
            <div className="card-hover flex flex-col items-center rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 shadow-md transition-all duration-300 min-[480px]:col-span-2 sm:p-6 lg:col-span-1" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
              <h3 className="font-display mb-3 text-center text-lg font-bold text-white sm:mb-4 sm:text-xl">CAD &amp; Design</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="skill-badge">AutoCAD</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;