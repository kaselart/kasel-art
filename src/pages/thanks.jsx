import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import { navigate } from "gatsby-link";
import "../css/App.css";

export default function thanks() {
  const smiley = <FontAwesomeIcon icon={faSmile} />;
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
        <p className="thanks__smiley">{smiley}</p>
      </section>
    </Layout>
  );
}
