import { useEffect, useState } from "react";
import ProjectsCard from "../../Components/Projects/ProjectsCard";
import SectionTitle from "../../Components/Shared/SectionTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);
  return (
    <div id="projects">
      <SectionTitle title={"Feature Projects"} />
      <div className="flex flex-wrap justify-center gap-5 md:gap-0 md:justify-between">
        {projects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
