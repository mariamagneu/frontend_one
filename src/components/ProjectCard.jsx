import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import styles from "../styles/modules/ProjectCard.module.css";
import { SessionContext } from "../contexts/SessionContext";
import hand from "../assets/hand.png";

const getTechnologyColor = (technologyTitle) => {
  const colors = {
    JavaScript: "#F7DF1E",
    "Node.js": "#8CC84B",
    MongoDB: "#47A248",
    Express: "#000000",
    React: "#61DAFB",
    // Add more technology colors here
  };

  return colors[technologyTitle] || "#D3D3D3";
};

const ProjectCard = ({ project }) => {
  const {
    title,
    imageUrl,
    description,
    technology = [],
    repos,
    status,
    _id,
    author,
    collaborators,
  } = project;

  const { fetchedTechnologies = [] } = useContext(SessionContext);
  const navigate = useNavigate();

  const truncatedDescription =
    description.length > 140
      ? `${description.substring(0, 140)}...`
      : description;

  const handleViewDetails = () => {
    navigate(`/projects/${_id}`);
  };

  // Map technology IDs to titles
  const technologyMap = fetchedTechnologies.reduce((map, tech) => {
    map[tech._id] = tech.title;
    return map;
  }, {});

  // Extract IDs from the `technology` array in the project data
  const technologyIds = technology.map((tech) => tech._id);

  const renderTechnologyLabels = () => {
    return technologyIds.map((techId) => {
      const technologyTitle = technologyMap[techId] || "Unknown Technology";
      const color = getTechnologyColor(technologyTitle);

      return (
        <div
          key={techId}
          className={styles.technologyLabel}
          style={{ backgroundColor: color }}
        >
          {technologyTitle}
        </div>
      );
    });
  };

  return (
    <div className={styles.card}>
      {/* Keep the image at the top */}
      <img src={imageUrl || hand} alt={title} className={styles.image} />

      {/* Card text content */}
      <div className={styles.details}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.status}>{status}</p>
        </div>
        <p className={styles.description}>{truncatedDescription}</p>
        <p className={styles.repos}>Repos: {repos}</p>
        <p className={styles.author}>Author: {author}</p>
        <p className={styles.collaborators}>Collaborators: {collaborators}</p>

        {/* Render technologies below repos */}
        <div className={styles.technologyContainer}>
          {renderTechnologyLabels()}
        </div>

        <div className={styles.buttonContainer}>
          <Button
            onClick={handleViewDetails}
            variant="outline"
            color="#224EFF"
            size="xs"
            className={styles.button}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
