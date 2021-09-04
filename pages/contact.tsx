import React from "react";
import Layout from "../components/Layout";
import { Container } from "../styles/Container";

interface contactProps {}

const contact: React.FC<contactProps> = () => {
  return (
    <Layout pageTitle="Contact">
      <Container>
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          asperiores blanditiis laborum numquam fugit dignissimos nemo ab
          deleniti iure. Praesentium repudiandae aspernatur ipsum voluptas
          similique nulla asperiores ea non fuga.
        </p>
      </Container>
    </Layout>
  );
};

export default contact;
