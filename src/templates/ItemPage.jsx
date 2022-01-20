import React, { useState } from "react";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import "../css/App.css";

export default function ItemPage({ data }) {
  const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;
  const chevronRight = <FontAwesomeIcon icon={faChevronRight} />;
  const { title, medium, price, images, size } =
    data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    if (counter < images.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(images.length);
    }
  };
  return (
    <Layout>
      <article className="item-page">
        <h1 className="item-page__heading--primary">{title}</h1>
        <h2 className="item-page__heading--secondary">{medium}</h2>
        <h3 className="item-page__heading--tertiary">{size}</h3>
        <div
          className="item-page__text"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>

        <div className="item-page__gallery">
          <div className="item-page__image">
            {images.map((url, i) => {
              if (counter === i + 1) {
                return <img className="active" src={url} />;
              } else {
                return <img className="inactive" src={url} />;
              }
            })}
          </div>
          <div className="gallery__navigation">
            <button onClick={decrementCounter} className="gallery__button left">
              {chevronLeft}
            </button>
            <button
              onClick={incrementCounter}
              className="gallery__button right"
            >
              {chevronRight}
            </button>
          </div>
        </div>
        <div className="item__buy">
          <p className="item-page__price">${price}</p>
          <button className="item__buy--button">buy</button>
        </div>
      </article>
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
