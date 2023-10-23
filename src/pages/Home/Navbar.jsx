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
      <div className="logo_image_nav">
        <img src="/logo.png" alt="logoimage" />
      </div>
      <a className={`hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>
      <div className={`navbar_items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar_active_content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="hero_sec"
              className="navbar_con"
            >
              Home
            </Link>
          </li>
          <li>
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
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="active_nav"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar_content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar_active_content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar_content"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar_active_content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact_sec" // Replace with the ID of your Contact section
              className="navbar_content"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;