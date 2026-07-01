import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
  AOS.init({
    duration: 700,
    once: true,
    easing: "ease-out-cubic",
  });
}, []);
  return (
    <>
     <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;