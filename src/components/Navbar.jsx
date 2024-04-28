import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}
      style={{ opacity: isNavbarVisible ? 1 : 0.6 }}
    >
      <div className="logo">
        <a href="#home">Thainlao Dev</a>
      </div>
      <div
        className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
        <a className="nav_list" href="#home">
          Home
        </a>
        <a className="nav_list" href="#about">
          About
        </a>
        <a className="nav_list" href="#skill">
          Skill
        </a>
        <a className="nav_list" href="#project">
          Project
        </a>
        <a className="nav_list" href="#contact">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
