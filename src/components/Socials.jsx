import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

const instagramIcon = (
  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
);
const skullCrossbonesIcon = (
  <FontAwesomeIcon icon={faSkullCrossbones} className="social-icon" />
);

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://www.instagram.com/kaselart">{instagramIcon}</a>

      <span>{skullCrossbonesIcon}</span>
    </div>
  );
}
