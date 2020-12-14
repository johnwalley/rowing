import Blade, { clubs, names } from "react-rowing-blades";

import Layout from "../components/layout";
import React from "react";
import { graphql } from "gatsby";

const allNames = {
  ...names.cambridge,
  ...names.oxford,
  ...names.uk,
};

// TODO: Download as PNG
// TODO: Use plugin to get at files
export default ({ data }) => {
  return (
    <Layout>
      <h1>{allNames[data.file.name]}</h1>
      <a href={`/${data.file.name}.svg`} download={`${data.file.name}.svg`}>
        <button>Download svg</button>
      </a>

      <Blade club={data.file.name} size={400} />
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      name
    }
  }
`;
