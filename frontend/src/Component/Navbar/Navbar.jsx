import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${isSticky ? "sticky" : ""}`}>
      <Link to="/" className="navbar-brand">
        <h2 className="brand-text">Solartec</h2>
      </Link>

      <button className="navbar-toggler" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      <div className={`navbar-collapse ${isOpen ? "open" : ""}`}>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/service" className="nav-link">
            Service
          </Link>
          <Link to="/project" className="nav-link">
            Project
          </Link>
          {/* A dropdown */}
          <div className="nav-item-dropdown">
            <a href="#" className="nav-link dropdown-toggle">
              Pages
            </a>
            <div className="dropdown-menu">
              <Link to="/feature" className="dropdown-item">
                Feature
              </Link>
              <Link to="/freequote" className="dropdown-item">
                Free Quote
              </Link>
              <Link to="/ourteam" className="dropdown-item">
                Our Team
              </Link>
              <Link to="/testimonialdrop" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="/error404" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <div>
          <Link to="/login" className="btn-quote-desktop">
            Login <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
