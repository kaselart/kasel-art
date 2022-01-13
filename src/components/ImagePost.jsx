import React from "react";

export default function ImagePost({ post }) {
  const { secure_url, context } = post;

  return (
    <div className={"image-post"}>
      <div className="image-post__image--box">
        <img
          className="image-post__image"
          src={secure_url}
          alt={context ? context.alt : "no alt :("}
        />
      </div>
    </div>
  );
}
