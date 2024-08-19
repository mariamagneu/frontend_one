import { Container, Text, Center } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "../styles/modules/Homepage.module.css";
import header from "../assets/header.png";

function Homepage() {
  return (
    <Container className={styles.container}>
      <Center className={styles.center}>
        <img src={header} alt="Logo" className={styles.logo} />

        <div>
          <Text align="center" mt="md">
            <strong>Welcome to Project One.</strong> This is a high effort
            Portfolio page, where you can learn about me as a person and the
            things I've been learning in Code-World. It is a Full-Stack solo
            project.
          </Text>
          <Center mt="lg">
            <Link to="/login" className={styles.loginLink}></Link>
          </Center>
        </div>
      </Center>
    </Container>
  );
}

export default Homepage;
