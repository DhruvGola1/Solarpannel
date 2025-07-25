import React from "react";
import "./WhyChooseUs.css";
import featureImage from "../../assets/images/feature.jpg";

const features = [
  { icon: "fa-check", title: "Quality", subtitle: "Services" },
  { icon: "fa-user-check", title: "Expert", subtitle: "Workers" },
  { icon: "fa-drafting-compass", title: "Free", subtitle: "Consultation" },
  { icon: "fa-headphones", title: "Customer", subtitle: "Support" },
];

const WhyChooseUs = () => {
  return (
    <div className="choose-us-section-text">
      <div className="choose-us-grid">
        <div className="choose-us-text-container">
          <div className="choose-us-text-content">
            <h6 className="section-subtitle">Why Choose Us!</h6>
            <h1 className="section-title">
              Complete Commercial & Residential Solar Systems
            </h1>
            <p className="section-paragraph">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon-wrapper">
                    <i className={`fa ${feature.icon}`}></i>
                  </div>
                  <div className="feature-text">
                    <p>{feature.title}</p>
                    <h5>{feature.subtitle}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="choose-us-image-container">
          <img
            src={featureImage}
            alt="Wind turbines"
            className="choose-us-image"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
