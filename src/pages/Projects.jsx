import { useEffect, useContext, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import AddProjectForm from "../components/AddProjectForm";
import styles from "../styles/modules/Projects.module.css";
import { SessionContext } from "../contexts/SessionContext";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { userRole } = useContext(SessionContext);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={styles.page}>
      {/* Conditionally render the form if the user is an admin */}
      {userRole === "Admin" && <AddProjectForm />}

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
