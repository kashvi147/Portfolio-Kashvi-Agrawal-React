import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);
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
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>

        <li>
          <a href="#contact" className="contact-btn">
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