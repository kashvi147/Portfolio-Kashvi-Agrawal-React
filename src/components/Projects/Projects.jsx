function Projects() {
  return (
    <>
     <section id="projects" className="safe-x py-16 sm:px-8 sm:py-28"  data-aos="fade-up">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14" data-aos="fade-up" data-aos-duration="650">
            <span className="text-xs font-semibold uppercase tracking-widest text-var(--green)-400 sm:text-sm">Projects</span>
            <h2 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Featured Work</h2>
            <p className="mx-auto mt-3 max-w-2xl px-2 text-sm text-slate-400 sm:mt-4 sm:text-base">
              A selection of projects that showcase my skills and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="0">
              {/* Thumbnail Container */}
              <div className="w-full h-[220px] overflow-hidden flex items-center justify-center" style={{ background: "#161622" }}>
                <img 
                  src="src/assets/ben-kolde-bs2Ba7t69mM-unsplash.jpg"
                  alt="Portfolio Website Thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                />
              </div>

              {/* Project Content Container */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Portfolio Website</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  A responsive one-page portfolio built with Tailwind CSS, featuring smooth animations and a dark theme.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">HTML</span>
                  <span className="text-xs text-var(--green)-400">Tailwind</span>
                  <span className="text-xs text-var(--green)-400">JS</span>
                </div>
                <a href="https://github.com/kashvi147/My-portfolio" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\space-stock-QhKEmb9ghJU-unsplash (3).jpg"
                  alt="Campusverse Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Campusverse</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  CampusVerse is a modern, responsive web portal designed for college students to manage their campus life
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">JavaScript</span>
                  <span className="text-xs text-var(--green)-400">CSS</span>
                  <span className="text-xs text-var(--green)-400">HTML</span>
                </div>
                <a href="https://github.com/kashvi147/campusverse" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\Screenshot 2026-06-03 225529.png"
                  alt="Begginer-arduino-push-button-led  Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Begginer Arduino Push Button LED </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  Glow the LED with just the oush of a button.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">Arduino</span>
                  <span className="text-xs text-var(--green)-400">C/C++</span>
                  <span className="text-xs text-var(--green)-400">Electronics</span>
                </div>
                <a href="https://github.com/kashvi147/begginer-arduino-push-button-led" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\Screenshot 2026-06-03 225529.png"
                  alt="Push-Button-Toggle-led-  Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Push Button Toggle LED </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  Keep the LED on by just the push of a button
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">Arduino</span>
                  <span className="text-xs text-var(--green)-400">C/C++</span>
                  <span className="text-xs text-var(--green)-400">Electronics</span>
                </div>
                <a href="https://github.com/kashvi147/push-button-toggle-led-" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\Screenshot 2026-06-03 225529.png"
                  alt="toggle-led-using-2-push-buttons-1-for-off-1-for-on Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Toggle LED Using 2 Push Buttons
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  Keep the LED by pushing 1 button and switch it off by pushing another.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">Arduino</span>
                  <span className="text-xs text-var(--green)-400">C/C++</span>
                  <span className="text-xs text-var(--green)-400">Electronics</span>
                </div>
                <a href="https://github.com/kashvi147/toggle-led-using-2-push-buttons-1-for-off-1-for-on" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            
            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\Screenshot 2026-06-03 225529.png"
                  alt="smooth-led-fade-effect-using-analogWrite Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Smooth LED Fade Effect
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  Get a smooth LED fade effect by using analogWrite.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">Arduino</span>
                  <span className="text-xs text-var(--green)-400">C/C++</span>
                  <span className="text-xs text-var(--green)-400">Electronics</span>
                </div>
                <a href="https://github.com/kashvi147/smooth-led-fade-effect-using-analogWrite" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\Screenshot 2026-06-03 225529.png"
                  alt="Knob-controlled-brightness-of-LED-using-potentiometer Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Knob Controlled Brightness of LED

                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  Get a knob controlled brightness of LED using a potentiometer.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">Arduino</span>
                  <span className="text-xs text-var(--green)-400">C/C++</span>
                  <span className="text-xs text-var(--green)-400">Electronics</span>
                </div>
                <a href="https://github.com/kashvi147/Knob-controlled-brightness-of-LED-using-potentiometer" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\Screenshot 2026-06-03 225529.png"
                  alt="glow-red-LED-when-bright-and-Green-when-Dark Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Glow Red LED When Bright And Green when Dark


                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  Get a controlled color of LED depending on the brightness.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">Arduino</span>
                  <span className="text-xs text-var(--green)-400">C/C++</span>
                  <span className="text-xs text-var(--green)-400">Electronics</span>
                </div>
                <a href="https://github.com/kashvi147/glow-red-LED-when-bright-and-Green-when-Dark" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] card-hover" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              {/* Project Thumbnail (resized for best fit) */}
              <div className="w-full bg-[#161622] flex items-center justify-center">
                <img 
                  src="src\assets\Screenshot 2026-06-03 225529.png"
                  alt="Automatic-Night-Lamp Thumbnail"
                  className="block max-h-48 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  importance="low"
                  style={{ background: "#161622" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">Automatic Night Lamp


                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  Made a automatic night lamp which switches on on getting dark and turns off when bright.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs text-var(--green)-400">Arduino</span>
                  <span className="text-xs text-var(--green)-400">C/C++</span>
                  <span className="text-xs text-var(--green)-400">Electronics</span>
                </div>
                <a href="https://github.com/kashvi147/Automatic-Night-Lamp" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-semibold text-var(--green)-400 hover:text-var(--green)-300">View on GitHub →</a>
              </div>
            </article>


          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;