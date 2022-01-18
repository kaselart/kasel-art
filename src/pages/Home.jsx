import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FeaturedItemPreview from "../components/FeaturedItemPreview";
import "../css/App.css";

export default function Home({ data }) {
  const allItems = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <section className="home">
        <div className="featured">
          {allItems.map((item) => {
            return <FeaturedItemPreview item={item} />;
          })}
        </div>
      </section>
    </Layout>
  );
}
