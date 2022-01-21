import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);
  console.log(menuOpen);
  return (
    <section className="layout">
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        openMenu={openMenu}
      ></Header>
      <section className="layout__main">{children}</section>
      <Socials></Socials>
      <Footer></Footer>
    </section>
  );
}
