import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
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
          <button className="theme-btn">
            🌙
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;