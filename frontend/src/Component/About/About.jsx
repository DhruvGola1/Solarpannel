import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-grid-text">
        <div className="about-image-container">
          <img
            src={aboutImage}
            alt="Solar panels on a roof"
            className="about-image"
          />
        </div>
        <div className="about-text-container">
          <div className="about-text-content">
            <h6 className="section-subtitle">About Us</h6>
            <h1 className="section-title">
              25+ Years Experience In Solar & Renewable Energy Industry
            </h1>
            <p className="section-paragraph">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <p>
              <i className="fa fa-check-circle text-primary"></i>Diam dolor diam
              ipsum
            </p>
            <p>
              <i className="fa fa-check-circle text-primary"></i>Aliqu diam amet
              diam et eos
            </p>
            <p>
              <i className="fa fa-check-circle text-primary"></i>Tempor erat
              elitr rebum at clita
            </p>
            <Link to="/about" className="btn-explore">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
