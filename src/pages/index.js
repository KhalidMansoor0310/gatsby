import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return <main style={pageStyles}>Wellcome to New Gatsby Project</main>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
