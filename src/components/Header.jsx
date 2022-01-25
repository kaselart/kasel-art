import React from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function Header({ menuOpen, toggleMenu, closeMenu, openMenu }) {
  const chevronRight = (
    <FontAwesomeIcon icon={faChevronRight} className="caret-icon" />
  );
  const handleClick = () => {
    if (!menuOpen) {
      openMenu();
    }
  };
  return (
    <div className="header">
      <Menu closeMenu={closeMenu} menuOpen={menuOpen}></Menu>

      <button
        onClick={handleClick}
        className={menuOpen ? "btn--menu open" : "btn--menu"}
      >
        {chevronRight}
      </button>
      <Link className="header__link" to="/">
        <div className="header__logo">
          <h1 className="glitch" data-glitch="MIKE KASEL">
            MIKE KASEL
          </h1>
        </div>
      </Link>
      <div className="header__navlinks">
        <Link className="header__navlink" to="/shop" activeClassName="active">
          SHOP
        </Link>
        <Link
          className="header__navlink"
          to="/contact"
          activeClassName="active"
        >
          CONTACT
        </Link>
        <Link className="header__navlink" to="/" activeClassName="active">
          HOME
        </Link>
      </div>
      <div className="spacer"></div>
    </div>
  );
}
