import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";
//import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  return (
    <section className="layout">
      <Socials></Socials>
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        openMenu={openMenu}
      ></Header>
      <section className="layout__main">{children}</section>
      {/* <Navbar /> */}
      <Footer></Footer>
    </section>
  );
}
