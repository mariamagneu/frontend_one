import React from "react";
import { Card, Badge, Button } from "@mantine/core";
import styles from "../styles/modules/TechCard.module.css";
import { format } from "date-fns";

const TechCard = ({ tech }) => {
  const { title, version, firstContact, knowledge } = tech;

  const formattedDate = firstContact
    ? format(new Date(firstContact), "MMMM dd, yyyy")
    : "Unknown";

  // Assign colors based on knowledge status
  const getKnowledgeColor = (knowledge) => {
    switch (knowledge) {
      case "Overwhelmed":
        return "red";
      case "Can Work With This":
        return "green";
      case "I'm (still) lost":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Badge
          color="blue"
          size="sm"
          className={styles.versionBadge}
        >{`Version: ${version}`}</Badge>
      </div>

      <div className={styles.details}>
        <p>
          <strong>First Contact:</strong> {formattedDate}
        </p>
        <p>
          <strong>Knowledge Status:</strong>{" "}
          <Badge
            color={getKnowledgeColor(knowledge)}
            size="sm"
            className={styles.knowledgeBadge}
          >
            {knowledge}
          </Badge>
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <Button variant="outline" color="blue" size="xs">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default TechCard;
