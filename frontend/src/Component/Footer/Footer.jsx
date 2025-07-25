import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import gallery1 from "../../assets/images/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery-4.jpg";
import gallery5 from "../../assets/images/gallery-5.jpg";
import gallery6 from "../../assets/images/gallery-6.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h5 className="footer-title">Address</h5>
            <p>
              <i className="fa fa-map-marker-alt"></i>123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope"></i>info@example.com
            </p>
            <div className="footer-socials">
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
            <Link to="/service" className="footer-link">
              Our Services
            </Link>
            <Link to="/contact" className="footer-link">
              Terms & Condition
            </Link>
            <Link to="/contact" className="footer-link">
              Support
            </Link>
          </div>

          <div className="footer-col">
            <h5 className="footer-title">Project Gallery</h5>
            <div className="gallery-grid">
              {galleryImages.map((img, index) => (
                <img key={index} src={img} alt={`Gallery item ${index + 1}`} />
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h5 className="footer-title">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="button">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <div className="container-copyright">
          <div className="copyright-content">
            <p>
              © <Link to="/">Your Site Name</Link>, All Right Reserved.
            </p>
            <p>
              Designed By{" "}
              <a
                href="https://htmlcodex.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML Codex
              </a>{" "}
              | Distributed By:{" "}
              <a
                href="https://themewagon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ThemeWagon
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
