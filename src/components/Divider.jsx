import React from "react";
export default function Divider({ text }) {
  return (
    <div className="divider">
      <p className="divider__text">{text}</p>
    </div>
  );
}
