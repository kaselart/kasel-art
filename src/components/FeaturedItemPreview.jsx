import React from "react";
import { Link } from "gatsby";
import image from "../look_img/image5.jpg";
export default function FeaturedItemPreview({ item }) {
  console.log(item);
  return (
    <Link className="featured__item" to="/">
      <div className="featured__item-img">
        <img src={item.frontmatter.images[0]} alt="" />
      </div>
      <div className="featured__item-text">
        <p className="title">{item.frontmatter.title}</p>
        <p className="price">${item.frontmatter.price}</p>
      </div>
    </Link>
  );
}
