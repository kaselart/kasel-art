import React from "react";
import { Link } from "gatsby";
import { removeSpaces } from "../utils/stringUtils";
import image from "../look_img/image5.jpg";
export default function FeaturedItemPreview({ item }) {
  console.log(item);
  return (
    <div className="featured__item">
      <Link
        className="featured__item-img"
        to={"/" + removeSpaces(item.frontmatter.title)}
      >
        <img src={item.frontmatter.images[0]} alt="" />
      </Link>
      <div className="featured__item-text">
        <p className="title">{item.frontmatter.title}</p>
      </div>
    </div>
  );
}
