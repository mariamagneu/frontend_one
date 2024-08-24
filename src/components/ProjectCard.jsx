import { useContext } from "react"; // Fixed extra space
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import styles from "../styles/modules/ProjectCard.module.css";
import { SessionContext } from "../contexts/SessionContext";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    technology,
    repos,
    status,
    _id,
    author,
    collaborators,
  } = project;
  const { token, isAuthenticated } = useContext(SessionContext);

  const truncatedDescription =
    description.length > 140
      ? `${description.substring(0, 140)}...`
      : description;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/projects/${_id}`);
  };

  return (
    <div className={styles.card}>
      <div
        className={`${styles.technologyLabel} ${styles[formattedtechnology]}`}
      >
        {technology}
      </div>
      {/*       <img src= alt={title} className={styles.image} />
       */}
      <div className={styles.details}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={statusClass}>{status}</p>
        </div>
        <p className={styles.description}>{truncatedDescription}</p>
        <p className={styles.repos}>repos: {repos}</p>
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
