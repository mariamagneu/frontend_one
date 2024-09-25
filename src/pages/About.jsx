import { Paper, Title, Container, Image } from "@mantine/core";
import styles from "../styles/modules/About.module.css";

function About() {
  return (
    <>
      <Title align="center">Welcome to My Portfolio Application</Title>

      <Container size={800} my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <div className={styles.aboutMeContainer}>
            <div>
              <Image
                src="https://i.imgur.com/0qdor4s.jpeg"
                alt="Profile picture"
                className={styles.profileImage}
              />
            </div>

            <div className={styles.textContainer}>
              <p>
                🚀 I’m a high-energy and communicative professional with a
                passion for inclusion, environmental protection, and community
                engagement. Fluent in German, Brazilian Portuguese, English, and
                Spanish, I bring a culturally rich perspective to everything I
                do. My background in teaching, communication, and Sociomuseology
                combines with technology to foster social change.
              </p>
              <p>
                🔄 Having transitioned from museums and politics to Web3, where
                I worked as a Community Manager, Partnerships Manager, and
                public speaker, I now focus on web development. My goal is to
                bridge the communication gap in the developer community,
                especially in Developer Relations.
              </p>
            </div>
          </div>

          <p>
            This project marks my first solo venture into{" "}
            <strong>FullStack</strong> development, born out of the need to
            create something meaningful. The concept of a portfolio felt like
            the perfect starting point. Here, admin users have the ability to
            add technologies and projects, with future plans to expand into
            skills like workshops.
          </p>
          <p>
            I envision adding features that allow the owners of the app to
            showcase workshops they've led, share speaker engagements, and more.
            The projects model is thoughtfully designed with various fields, one
            of which is a relationship to technologies — a separate collection.
            These interconnected collections help me hone my skills in building
            more complex APIs and improving communication between components.
          </p>

          <p>
            I am currently searching for my next position in IT.{" "}
            <strong>Let me know if you'd like to connect.</strong> How to reach
            me?{" "}
            <a
              href="https://telegram.me/mariamneu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            , <a href="mailto:neumariamagdalena@gmail.com">E-Mail</a>,{" "}
            <a
              href="https://twitter.com/mariamagneu"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (formerly Twitter)
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/maria-magdalena-neu-85845b141/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </Paper>
      </Container>
    </>
  );
}

export default About;
