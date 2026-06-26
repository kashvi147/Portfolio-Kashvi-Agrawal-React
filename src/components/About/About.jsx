function About() {
  return (
    <>
      <section id="about" className="safe-x py-16 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center sm:text-left" data-aos="fade-right" data-aos-duration="650">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 sm:text-sm">About Me</span>
            <h2 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Who Am I</h2>
          </div>
          <div className="mt-6 w-full" data-aos="fade-right" data-aos-duration="650" data-aos-delay="75">
            <p className="text-left text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
                I'm Kashvi Agrawal, a B.Tech student in Robotics and Artificial Intelligence at JIIT. I build dependable software and smart hardware systems that bridge user experience with technical innovation.
            </p>
            <p className="mt-4 text-left text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
                My work spans responsive web apps, IoT prototypes, and AI-powered solutions. I enjoy turning concepts into polished, practical deliverables while continuously learning new tools and technologies.
            </p>
          </div>
 
 
          <div className="mt-10 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-12 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 text-center card-hover cursor-pointer sm:p-6"
                 data-aos="fade-right" data-aos-duration="650" data-aos-delay="100"
                 >
              <p className="font-display text-2xl font-bold text-violet-400 sm:text-3xl">10+</p>
              <p className="mt-1 text-sm text-slate-400">Projects Built</p>
            </div>
            <div className="rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 text-center card-hover sm:p-6 min-[480px]:col-span-2 md:col-span-1" data-aos="fade-right" data-aos-duration="650" data-aos-delay="175">
              <p className="font-display text-xl font-bold leading-tight text-violet-400 sm:text-2xl md:text-3xl">Robotics &amp; AI</p>
              <p className="mt-1 text-sm text-slate-400">Student @ JIIT</p>
            </div>
            <div className="rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 text-center card-hover sm:p-6 min-[480px]:col-span-1 md:col-span-1" data-aos="fade-right" data-aos-duration="650" data-aos-delay="250">
              <p className="font-display text-2xl font-bold text-violet-400 sm:text-3xl">∞</p>
              <p className="mt-1 text-sm text-slate-400">Curiosity to Learn</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

