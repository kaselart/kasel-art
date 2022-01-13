import React from "react";
import ImagePost from "./ImagePost";

export default function Feed({ data }) {
  const posts = data.allCloudinaryMedia.edges.filter((post) =>
    post.node.public_id.includes("feed")
  );

  return (
    <div className="feed">
      {posts.map((post) => {
        return <ImagePost post={post.node} key={post.node.id} />;
      })}
    </div>
  );
}
