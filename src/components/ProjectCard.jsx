import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import styles from "../styles/modules/ProjectCard.module.css";
import { SessionContext } from "../contexts/SessionContext";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    technology, // This might be an object
    repos,
    status,
    _id,
    author,
    collaborators,
  } = project;

  const { token, isAuthenticated } = useContext(SessionContext);
  const navigate = useNavigate();

  // Truncate description if it is too long
  const truncatedDescription =
    description.length > 140
      ? `${description.substring(0, 140)}...`
      : description;

  // Handle view details click
  const handleViewDetails = () => {
    navigate(`/projects/${_id}`);
  };

  // Extract technology title if technology is an object
  const technologyTitle = technology?.title || "Unknown Technology";

  return (
    <div className={styles.card}>
      <div className={styles.technologyLabel}>{technologyTitle}</div>
      {/* Uncomment if you have images for projects */}
      {/* <img src={imageUrl} alt={title} className={styles.image} /> */}
      <div className={styles.details}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.status}>{status}</p>
        </div>
        <p className={styles.description}>{truncatedDescription}</p>
        <p className={styles.repos}>Repos: {repos}</p>
        <p className={styles.author}>Author: {author}</p>
        <p className={styles.collaborators}>Collaborators: {collaborators}</p>
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
