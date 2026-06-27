import { useEffect, useState } from "react";
import "./Navbar.css";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (
        window.scrollY >= top &&
        window.scrollY < top + height
      ) {
        setActiveSection(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <nav className="navbar">
      

  <div className="logo">
    Kashvi
  </div>

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a
  href="#about"
  className={activeSection === "about" ? "active-link" : ""}
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("about");
    setMenuOpen(false);
  }}
>
  About
</a></li>
        <li><a
  href="#skills"
  className={activeSection === "skills" ? "active-link" : ""}
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("skills");
    setMenuOpen(false);
  }}
>
  Skills
</a></li>
        <li><a
  href="#projects"
  className={activeSection === "projects" ? "active-link" : ""}
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("projects");
    setMenuOpen(false);
  }}
>
  Projects
</a></li>
        <li><a
  href="#achievements"
  className={activeSection === "achievements" ? "active-link" : ""}
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("achievements");
    setMenuOpen(false);
  }}
>
  Achievements
</a></li>

        <li>
          <a
  href="#contact"
  className={activeSection === "contact" ? "active-link" : ""}
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("contact");
    setMenuOpen(false);
  }}
>
  Contact
</a>
        </li>

        <li>
          <button
  className="theme-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "🌙" : "☀️"}
</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;