import React from "react";
import { Link } from "gatsby";
import image from "../look_img/image5.jpg";
export default function FeaturedItemPreview({ item }) {
  return (
    <Link className="featured__item" to="/">
      <div className="featured__item-img">
        <img src={image} alt="" />
      </div>
      <div className="featured__item-text">
        <p className="title">Really long item title that will have to wrap</p>
        <p className="price">$100</p>
      </div>
    </Link>
  );
}
