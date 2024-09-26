import { useEffect, useContext, useState } from "react";
import TechCard from "../components/TechCard";
import AddTechForm from "../components/AddTechForm";
import styles from "../styles/modules/Projects.module.css";
import { SessionContext } from "../contexts/SessionContext";

const Tech = () => {
  const { userRole, isTechnologiesLoading, fetchedTechnologies } =
    useContext(SessionContext);

  if (isTechnologiesLoading) {
    return <p>Loading technologies...</p>;
  }

  return (
    <div className={styles.page}>
      {userRole === "Admin" && <AddTechForm />}

      <div className={styles.container}>
        {fetchedTechnologies && fetchedTechnologies.length > 0 ? (
          fetchedTechnologies.map((tech) => (
            <TechCard key={tech._id} tech={tech} />
          ))
        ) : (
          <p>No technologies available</p>
        )}
      </div>
    </div>
  );
};

export default Tech;
