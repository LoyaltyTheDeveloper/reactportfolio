import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []); 

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`} id="navbar">
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#heroSection"
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#MyPortfolio"
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href ="#AboutMe"
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
            >
              About Me
            </a>
          </li>
          <li>
            <a href="#testimonial"
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
      <a href="#Contact"
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="btn btn-outline-primary"
      >
        Contact Me
      </a>
    </nav>
  );
}

export default Navbar;