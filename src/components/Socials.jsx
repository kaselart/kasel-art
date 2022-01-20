import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";

const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const skullCrossbonesIcon = <FontAwesomeIcon icon={faSkullCrossbones} />;

export default function Socials() {
  return (
    <div className="socials">
      <a href="https://www.instagram.com/kaselart" className="social-icon">
        {instagramIcon}
      </a>

      <span className="social-icon">{skullCrossbonesIcon}</span>
    </div>
  );
}
