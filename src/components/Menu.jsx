import React, { useRef } from "react";
import { Link } from "gatsby";
import useOutsideClickHandler from "../hooks/useOutsideClickHandler";

export default function Menu({ menuOpen, closeMenu }) {
  const menuRef = useRef();
  const handleOutsideClick = () => {
    closeMenu();
  };
  useOutsideClickHandler(menuRef, () => {
    if (menuOpen) {
      handleOutsideClick();
    }
  });
  return (
    <section className={!menuOpen ? "menu" : "menu open"}>
      <div ref={menuRef} className="menu__navlinks">
        <Link className="menu__navlink" to="/" activeClassName="active">
          HOME
        </Link>
        <Link className="menu__navlink" to="/shop" activeClassName="active">
          SHOP
        </Link>
        <Link className="menu__navlink" to="/contact" activeClassName="active">
          CONTACT
        </Link>
      </div>
    </section>
  );
}
