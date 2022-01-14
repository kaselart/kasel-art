import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import FeaturedItemPreview from "../components/FeaturedItemPreview";
import "../css/App.css";

export default function Home() {
  const featuredItems = [
    { title: "example1", img: "some url" },
    { title: "example2", img: "some url" },
    { title: "example3", img: "some url" },
    { title: "example4", img: "some url" },
    { title: "example5", img: "some url" },
    { title: "example6", img: "some url" },
  ];
  return (
    // <StaticQuery
    //   query={graphql`
    //     query MyQuery {
    //       allCloudinaryMedia(sort: { fields: created_at, order: DESC }) {
    //         edges {
    //           node {
    //             created_at(formatString: "YYYY-MM-DD")
    //             public_id
    //             secure_url
    //             id
    //           }
    //         }
    //       }
    //     }
    //   `}
    //   render={(data) => (
    <Layout>
      <section className="home">
        <div className="featured">
          {featuredItems.map((item) => {
            return <FeaturedItemPreview item={item} />;
          })}
        </div>
      </section>
    </Layout>
    //   )}
    // />
  );
}
