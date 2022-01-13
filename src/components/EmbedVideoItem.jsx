import React, { useLayoutEffect, useRef, useState } from "react";

export default function EmbedVideoItem({ url, description, title, details }) {
  const [containerStatus, setContainerStatus] = useState("");
  const [scrollAmount, setScrollAmount] = useState(0);
  const descriptionRef = useRef(null);
  useLayoutEffect(() => {
    if (
      descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight
    ) {
      setContainerStatus("overflow");
      setScrollAmount(
        descriptionRef.current.scrollHeight -
          descriptionRef.current.clientHeight
      );
    }
  }, [descriptionRef]);
  const expand = () => {
    setContainerStatus("expanded");
    setTimeout(() => {
      window.scrollBy({ top: scrollAmount * 1, behavior: "smooth" });
    }, 200);
  };
  const hide = () => {
    setContainerStatus("overflow");
  };
  const handleClick = () => {
    if (containerStatus === "overflow") {
      setContainerStatus("expanded");
      setTimeout(() => {
        window.scrollBy({ top: scrollAmount * 1.5, behavior: "smooth" });
      }, 200);
    } else if (containerStatus === "expanded") {
      setContainerStatus("overflow");
    }
  };
  console.log(containerStatus);
  console.log(scrollAmount);
  return (
    <div className="embed-video-item">
      <div className="embed-video-item__iframe-wrap">
        <iframe
          className="embed-video-item__iframe"
          src={url}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <section
        ref={descriptionRef}
        className={"embed-video-item__description " + containerStatus}
      >
        <h1 className="embed-video-item__heading--primary">{title}</h1>
        <p className="embed-video-item__text">{description}</p>
        {details.map((detail) => (
          <p className="embed-video-item__detail">{detail}</p>
        ))}
        {containerStatus !== "" && (
          <button
            onClick={handleClick}
            className={"btn--toggle-description " + containerStatus}
          >
            {containerStatus === "overflow" ? "read more" : "read less"}
          </button>
        )}
      </section>
    </div>
  );
}
