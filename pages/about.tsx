import React from "react";
import Layout from "../components/Layout";
import { Container } from "../styles/Container";

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <Layout pageTitle="About">
      <Container>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          repudiandae? Laudantium velit inventore minus repellendus
          reprehenderit quod, magni libero. Facere culpa dicta asperiores
          delectus debitis omnis sit dolorum similique voluptatem.
        </p>
      </Container>
    </Layout>
  );
};

export default about;
