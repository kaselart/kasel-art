import * as React from "react";
import { graphql } from "gatsby";
import Home from "./Home";
import "../css/App.css";

export default function IndexPage({ data }) {
  console.log(data);
  return (
    <>
      <title>{"MIKE KASEL | artist"}</title>
      <Home data={data} />
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          price
          medium
          size
          images
        }
        html
      }
    }
  }
`;
