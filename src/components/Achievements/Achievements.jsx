function Achievements() {
  return (
    <>
      <section id="achievements" className="bg-[#12121a] safe-x py-16 sm:px-8 sm:py-28"  data-aos="fade-up">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14" data-aos="fade-up" data-aos-duration="650">
            <span className="text-xs font-semibold uppercase tracking-widest text-var(--green)-400 sm:text-sm">Achievements</span>
            <h2 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Milestones</h2>
            <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-slate-400 sm:mt-4 sm:text-base">
              Highlights from my academic and extracurricular journey.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="card-hover flex flex-col gap-4 rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6" data-aos="fade-up" data-aos-duration="650" data-aos-delay="0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-var(--green)-600/20 text-xl">🏆</div>
              <div>
                <h3 className="font-display font-semibold text-white">Hackathon Participant</h3>
                <p className="mt-1 text-sm text-slate-400">Competed in college hackathons, building prototypes under time pressure and collaborating in teams.</p>
                <p className="mt-2 text-xs text-var(--green)-400">2024 – Present</p>
              </div>
            </div>
            <div className="card-hover flex flex-col gap-4 rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6" data-aos="fade-up" data-aos-duration="650" data-aos-delay="75">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-var(--green)-600/20 text-xl">📜</div>
              <div>
                <h3 className="font-display font-semibold text-white">Certifications & Courses</h3>
                <p className="mt-1 text-sm text-slate-400">Completed online courses in web development, data structures, and modern JavaScript frameworks.</p>
                <p className="mt-2 text-xs text-var(--green)-400">Self-paced learning</p>
              </div>
            </div>
            <div className="card-hover flex flex-col gap-4 rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6" data-aos="fade-up" data-aos-duration="650" data-aos-delay="150">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-var(--green)-600/20 text-xl">🎯</div>
              <div>
                <h3 className="font-display font-semibold text-white">Open Source Contributor</h3>
                <p className="mt-1 text-sm text-slate-400">Active on GitHub with personal repos and contributions to community projects.</p>
                <p className="mt-2 text-xs text-var(--green)-400">
                  <a href="https://github.com/kashvi147" className="hover:underline" target="_blank" rel="noopener noreferrer">github.com/kashvi147</a>
                </p>
              </div>
            </div>
            <div className="card-hover flex flex-col gap-4 rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6" data-aos="fade-up" data-aos-duration="650" data-aos-delay="225">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-var(--green)-600/20 text-xl">🎓</div>
              <div>
                <h3 className="font-display font-semibold text-white">Academic Excellence</h3>
                <p className="mt-1 text-sm text-slate-400">Pursuing Computer Science at Jaypee Institute of Information Technology with focus on software engineering.</p>
                <p className="mt-2 text-xs text-var(--green)-400">JIIT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievements;