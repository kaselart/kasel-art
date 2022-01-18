import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FeaturedItemPreview from "../components/FeaturedItemPreview";
import "../css/App.css";

export default function ItemPage({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <h3>{data.markdownRemark.frontmatter.medium}</h3>
      <p>{data.markdownRemark.frontmatter.price}</p>
      {data.markdownRemark.frontmatter.images.map((img) => {
        return (
          <img src={img} alt={data.markdownRemark.frontmatter.title}></img>
        );
      })}
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></div>
    </Layout>
  );
}

export const query = graphql`
  query ItemPage($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        date
        images
        medium
        price
        size
        title
      }
      html
    }
  }
`;
