import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aos from "aos";

function App() {
  return (
    <>
      <div className="bg-base-100 min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <div className="container mx-auto min-h-screen w-full relative">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
