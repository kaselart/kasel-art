import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FeaturedItemPreview from "../components/FeaturedItemPreview";
import Divider from "../components/Divider";
import "../css/App.css";

export default function Home({ data }) {
  const allItems = data.allMarkdownRemark.nodes;
  return (
    <>
      <title>{"MIKE KASEL | artist"}</title>
      <Layout>
        <section className="home">
          <Divider text="recent work" />
          <div className="featured">
            <section className="featured__grid">
              {allItems.map((item, i) => {
                if (i < 8) {
                  return <FeaturedItemPreview item={item} />;
                }
              })}
            </section>
          </div>
        </section>
      </Layout>
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
