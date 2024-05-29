import React, { useState, useEffect } from "react";
import "./Navbar.css";
import underline from "../../assets/underline.png";
import logo from "../../assets/logo.png";
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setMenu(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the menu after clicking a section (optional)
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? "open" : ""} ${windowWidth > 768 ? "sticky" : ""}`}>
      <img src={logo} className="logo" alt="Logo" />
      {windowWidth <= 768 ? (
        <img
          src={menuOpen ? menu_close : menu_open}
          alt=""
          className="nav-mob-icon"
          onClick={toggleMenu}
        />
      ) : null}
      <ul className="nav-menu">
        <li onClick={() => handleClick("hero")}>
          <p>Home</p>
          {menu === "hero" && <img src={underline} alt="Underline" />}
        </li>
        <li onClick={() => handleClick("about")}>
          <p>About me</p>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li onClick={() => handleClick("projects")}>
          <p>Projects</p>
          {menu === "projects" && <img src={underline} alt="Underline" />}
        </li>
        <li onClick={() => handleClick("contact")}>
          <p>Contact</p>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>
      <div className="nav-connect" onClick={() => handleClick("contact")}>Connect with me</div>
    </div>
  );
};

export default Navbar;
