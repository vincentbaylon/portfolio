import { useRef } from "react";
import FadeIn from "react-fade-in";

import About from "./About";
import BottomFixedContainer from "./BottomFixedContainer";
import Contact from "./Contact";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";
import Projects from "./Projects";

function App() {
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleProjectClick = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        id="top"
        className="flex flex-col items-center justify-center h-full min-h-screen p-2 pt-0 m-0 text-white md:p-5 bg-slate-100"
      >
        <div className="max-w-full px-5 md:px-12 sm:px-10 lg:max-w-6xl">
          <NavBar
            handleProjectClick={handleProjectClick}
            handleAboutClick={handleAboutClick}
            handleContactClick={handleContactClick}
          />

          <Main handleProjectClick={handleProjectClick} />
          <div ref={aboutRef}>
            <FadeIn>
              <About />
            </FadeIn>
          </div>

          <div ref={projectRef}>
            <FadeIn>
              <Projects />
            </FadeIn>
          </div>

          <div ref={contactRef}>
            <FadeIn>
              <Contact />
            </FadeIn>
          </div>
        </div>
      </div>
      <BottomFixedContainer />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
