import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import Contact from "../Pages/Contact/Contact";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skill";

const Root = () => {
  return (
    <div className="font-ubuntu ">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto space-y-15">
        <Home />
        {/* Experience */}
        <Experience />
        {/* Education */}
        <Education />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
        {/* Footer */}
      </div>
      <Footer />
    </div>
  );
};
export default Root;
