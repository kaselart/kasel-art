import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import FeaturedItemPreview from "../components/FeaturedItemPreview";
import "../css/App.css";

export default function Home({ data }) {
  const featuredItems = [
    { title: "example1", img: "some url" },
    { title: "example2", img: "some url" },
    { title: "example3", img: "some url" },
    { title: "example4", img: "some url" },
    { title: "example5", img: "some url" },
    { title: "example6", img: "some url" },
  ];
  console.log(data.allMarkdownRemark.nodes);
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

// export const query = graphql`
//   query MyQuery {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           title
//           date
//           price
//           medium
//           size
//           images
//         }
//         html
//       }
//     }
//   }
// `;
