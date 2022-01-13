import React, { useState, useRef } from "react";
import useOutsideClickHandler from "../hooks/useOutsideClickHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function MasonryImage({ edge }) {
  const closeIcon = (
    <FontAwesomeIcon icon={faTimes} className="fa-times__close" />
  );

  const clickArea = useRef();
  const [isShowcase, setIsShowcase] = useState(false);
  const showcaseImage = () => {
    setIsShowcase(true);
  };
  const removeShowcase = () => {
    setIsShowcase(false);
  };
  const handleOutsideClick = () => {
    removeShowcase();
  };
  useOutsideClickHandler(clickArea, () => {
    if (isShowcase) {
      handleOutsideClick();
    }
  });
  return (
    <div
      className={isShowcase ? "grid-img-wrap showcase" : "grid-img-wrap"}
      ref={clickArea}
    >
      {isShowcase ? (
        <button onClick={removeShowcase} className="btn--showcase-close">
          {closeIcon}
        </button>
      ) : null}
      <img
        className={"look-feed__img"}
        src={edge.node.secure_url}
        onClick={showcaseImage}
        alt={"fernando leyra"}
      />
    </div>
  );
}
