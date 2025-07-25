import React from "react";
import "./Services.css";
import service1 from "../../assets/images/img-600x400-1.jpg";
import service2 from "../../assets/images/img-600x400-2.jpg";
import service3 from "../../assets/images/img-600x400-3.jpg";
import service4 from "../../assets/images/img-600x400-4.jpg";
import service5 from "../../assets/images/img-600x400-5.jpg";
import service6 from "../../assets/images/img-600x400-6.jpg";
import { Link, useNavigate } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    img: service1,
    icon: "fa-solar-panel",
    title: "Solar Panels",
    text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsumloremdiam",
  },
  {
    id: 2,
    img: service2,
    icon: "fa-wind",
    title: "Wind Turbines",
    text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsumloremdiam",
  },
  {
    id: 3,
    img: service3,
    icon: "fa-lightbulb",
    title: "Hydropower Plants",
    text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsumloremdiam",
  },
  {
    id: 4,
    img: service4,
    icon: "fa-solar-panel",
    title: "Solar Panels",
    text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsumloremdiam",
  },
  {
    id: 5,
    img: service5,
    icon: "fa-wind",
    title: "Wind Turbines",
    text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsumloremdiam",
  },
  {
    id: 6,
    img: service6,
    icon: "fa-lightbulb",
    title: "Hydropower Plants",
    text: "Stet stet justo dolor sed duo. Ut clita sea sit ipsumloremdiam",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const handleViewDetails = (e, service) => {
    e.preventDefault();
    navigate("/viewdetails", { state: service });
  };

  return (
    <div className="services-section">
      <div className="container-services">
        <div className="section-header">
          <h6 className="section-subtitle">Our Services</h6>
          <h1 className="section-title">
            We Are Pioneers In The World Of Renewable Energy
          </h1>
        </div>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="service-image-wrapper">
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <i className={`fa ${service.icon} fa-3x`}></i>
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p>{service.text}</p>
                <Link
                  to="/viewdetails"
                  className="read-more"
                  onClick={(e) => handleViewDetails(e, service)}
                >
                  Read More <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
