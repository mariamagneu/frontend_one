import { Title, Container, Text, Center } from "@mantine/core";
function About() {
  return (
    <>
      <Title>Welcome to My Portfolio Application</Title>
      <p>
        This project marks my first solo venture into FullStack development,
        born out of the need to create something meaningful. The concept of a
        portfolio felt like the perfect starting point. Here, admin users have
        the ability to add technologies and projects, with future plans to
        expand into skills like workshops.
      </p>
      <p>
        I envision adding features that allow users to showcase workshops
        they've led, share speaker engagements, and more. The projects model is
        thoughtfully designed with various fields, one of which is a
        relationship to technologies — a separate collection. These
        interconnected collections help me hone my skills in building more
        complex APIs and improving communication between components.
      </p>

      <p>
        I am currently searching for my next position in IT. Let me know if
        you'd like to connect.
      </p>
    </>
  );
}
export default About;
