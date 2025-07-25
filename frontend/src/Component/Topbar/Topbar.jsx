import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <div className="topbar-info-item">
            <i className="fa fa-map-marker-alt"></i>
            <small>123 Street, New York, USA</small>
          </div>
          <div className="topbar-info-item">
            <i className="far fa-clock"></i>
            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-info-item">
            <i className="fa fa-phone-alt"></i>
            <small>+012 345 6789</small>
          </div>
          <div className="topbar-socials">
            <a href="/#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
