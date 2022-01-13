import React from "react";
import Layout from "../components/Layout";
import "../css/App.css";

//import Feed from "../components/Feed";

export default function Bio() {
  //const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <section className="bio">
        <p className="bio__text--main">
          Michael Kasel{" "}
          <span className="bio__text--secondary">
            (Omaha, Nebraska, 3 March 1988)
          </span>
          , professionally known as Mark Chisel, is a painter, writer, and
          ventriloquist.
        </p>
      </section>
    </Layout>
  );
}
