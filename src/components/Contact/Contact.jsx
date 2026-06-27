function Contact() {
  return (
    <>
      <section id="contact" className="safe-x py-16 sm:px-8 sm:py-28"  data-aos="fade-up">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0 text-center lg:text-left" data-aos="fade-up" data-aos-duration="650">
              <span className="text-xs font-semibold uppercase tracking-widest text-var(--green)-400 sm:text-sm">Contact</span>
              <h2 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Let's Connect</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                Have a project in mind or want to collaborate? Send me a message—I'd love to hear from you.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start justify-center gap-3 text-left text-slate-300 sm:items-center lg:justify-start">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-var(--green)-400 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 00-1.07-1.916l-7.5-4.615a2.25 2.25 0 00-2.36 0L3.32 8.91a2.25 2.25 0 00-1.07 1.916V6.75" /></svg>
                  <a href="mailto:kashvia.14@gmail.com" className="break-anywhere hover:text-var(--green)-400 transition-colors">kashvia.14@gmail.com</a>
                </li>
                <li className="flex items-start justify-center gap-3 text-left text-slate-300 sm:items-center lg:justify-start">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-var(--green)-400 sm:mt-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <a href="https://github.com/kashvi147" target="_blank" rel="noopener noreferrer" className="break-anywhere hover:text-var(--green)-400 transition-colors">github.com/kashvi147</a>
                </li>
              </ul>
            </div>

            <form id="contact-form" action="https://formspree.io/f/xaqznzgw" method="POST" className="w-full min-w-0 rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-5 sm:p-8" data-aos="fade-up" data-aos-duration="650" data-aos-delay="100">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full min-w-0 rounded-xl border border-[#2a2a3a] bg-[#1a1a24] px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition-colors focus:border-var(--green)-500 focus:ring-1 focus:ring-var(--green)-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full min-w-0 rounded-xl border border-[#2a2a3a] bg-[#1a1a24] px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition-colors focus:border-var(--green)-500 focus:ring-1 focus:ring-var(--green)-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full min-w-0 resize-none rounded-xl border border-[#2a2a3a] bg-[#1a1a24] px-4 py-3 text-base text-white placeholder-slate-500 outline-none transition-colors focus:border-var(--green)-500 focus:ring-1 focus:ring-var(--green)-500 sm:text-sm"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="min-h-[2.75rem] w-full rounded-xl bg-var(--green)-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-var(--green)-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;