import React from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import logo from "../images/logo.png";
export default function Header({ menuOpen, toggleMenu, closeMenu, openMenu }) {
  const handleClick = () => {
    if (!menuOpen) {
      openMenu();
    }
  };
  return (
    <div className="header">
      <Menu closeMenu={closeMenu} menuOpen={menuOpen}></Menu>
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
      </div>
      <div className={!menuOpen ? "hamburger" : "hamburger open"}>
        <button onClick={handleClick} className="btn--menu hamburger__icon">
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </button>
      </div>
      <Link className="header__link" to="/">
        <div className="header__logo--container">
          <h1 className="header__logo--text">KASEL</h1>
          <img src={logo} className="header__logo-img" alt="logo" />
        </div>
      </Link>
    </div>
  );
}
