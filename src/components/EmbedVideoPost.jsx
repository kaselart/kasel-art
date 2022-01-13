import React from "react";

export default function EmbedVideoPost() {
  return (
    <div className="embed-video-post">
      <iframe
        className="embed-video-post__iframe"
        src={}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
