import { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
    <nav className={`Navbar ${navActive ? "active" : ""}`}>
      <Link to="hero_sec" spy={true} smooth={true} offset={-70} duration={500}>
        <div className="logo_image_nav">
          <img src="/logo.png" alt="logoimage" />
        </div>
      </Link>
      <a className={`hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>
      <div className={`navbar_items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <Link
              onClick={closeMenu}
              activeClass="navbar_active_content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about_sec"
              className="navbar_content"
            >
              About
            </Link>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </li>
          <li>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <Link
              onClick={closeMenu}
              activeClass="active_nav"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects_sec"
              className="navbar_content"
            >
              Projects
            </Link>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </li>
          <li>
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <Link
              onClick={closeMenu}
              activeClass="navbar_active_content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="experience-section"
              className="navbar_content"
            >
              Experience
            </Link>
            {/* eslint-enable jsx-a11y/anchor-is-valid */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;