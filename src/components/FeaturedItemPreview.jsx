import React from "react";
import { Link } from "gatsby";
import { removeSpaces } from "../utils/stringUtils";
export default function FeaturedItemPreview({ item }) {
  return (
    <div className="featured__item">
      <Link
        className="featured__item-img"
        to={"/shop/" + removeSpaces(item.frontmatter.title)}
      >
        <img src={item.frontmatter.images[0]} alt="" />
      </Link>
      <p className="featured__item--title">{item.frontmatter.title}</p>
    </div>
  );
}
