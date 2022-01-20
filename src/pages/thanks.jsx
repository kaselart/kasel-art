import React from "react";
import Layout from "../components/Layout";
import { navigate } from "gatsby-link";
import "../css/App.css";

export default function thanks() {
  const navigateHome = () => {
    setTimeout(() => navigate("/"), 6000);
  };
  navigateHome();
  return (
    <Layout>
      <section className="thanks">
        <h1 className="thanks__heading-primary">THANK YOU!</h1>

        <p className="thanks__text">
          Your questions and/or comments have been received.
        </p>
      </section>
    </Layout>
  );
}
