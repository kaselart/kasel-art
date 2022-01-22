import React from "react";
import Layout from "../components/Layout";
import FeaturedItemPreview from "../components/FeaturedItemPreview";
import "../css/App.css";

export default function Home({ data }) {
  // console.log(data.allMarkdownRemark);
  // const allItems = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <section className="home">
        <div className="featured">
          {/* {allItems.map((item, i) => {
            if (i < 8) {
              return <FeaturedItemPreview item={item} />;
            }
          })} */}
        </div>
      </section>
    </Layout>
  );
}
