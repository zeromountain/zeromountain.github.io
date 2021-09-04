import React from "react";
import Layout from "../components/Layout";

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <Layout pageTitle="About">
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
        repudiandae? Laudantium velit inventore minus repellendus reprehenderit
        quod, magni libero. Facere culpa dicta asperiores delectus debitis omnis
        sit dolorum similique voluptatem.
      </p>
    </Layout>
  );
};

export default about;
