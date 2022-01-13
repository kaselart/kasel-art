import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import "../css/App.css";

export default function Home() {
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
      <section className="home"></section>
    </Layout>
    //   )}
    // />
  );
}
