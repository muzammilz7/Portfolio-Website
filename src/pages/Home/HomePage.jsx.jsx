import Hero from "./Hero";
import About from "./About"
import Project from "./Projects"
import Experience from "./Experience"
import Footer from "./Footer"

export default function IHome() {
    return (
      <>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Footer />
      </>
    );
  }