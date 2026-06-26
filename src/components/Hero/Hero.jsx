import { FaGithub, FaLinkedin } from "react-icons/fa";
import KBot from "./KBot";

function Hero() {
  return (
    <section id="hero" className="safe-x sm:px-8">
      <div className="hero-aurora" aria-hidden="true">
        <div className="hero-aurora__layer hero-aurora__layer--green"></div>
        <div className="hero-aurora__layer hero-aurora__layer--cyan"></div>
        <div className="hero-aurora__layer hero-aurora__layer--depth"></div>
      </div>

      <div className="hero-grid">

        <div className="hero-content">
          <p className="hero-eyebrow">
            Robotics & AI · JIIT
          </p>

          <h1 className="hero-headline">
            <span className="hero-headline-accent">
              Engineering systems
            </span>

            <span className="hero-headline-highlight">
              that ship.
            </span>
          </h1>

          <p className="hero-identity">
            I'm <span>Kashvi Agrawal</span> — building at the intersection of software, embedded hardware, and machine learning.
          </p>

          <p className="hero-tagline">
            From responsive web apps to IoT prototypes and AI-powered robotics — focused on practical solutions with measurable impact.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn--primary">
              View Projects
            </a>

            <a href="#contact" className="hero-btn hero-btn--ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero-social">
  <a
    href="https://github.com/kashvi147"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="https://www.linkedin.com/in/kashvi-agrawal-454607375/"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin size={22} />
  </a>
</div>
        </div>

        <KBot />

      </div>
    </section>
  );
}

export default Hero;