import React from "react";
import "./CustomComponent.css";
import bgImage from "../../assets/images/carousel-1.jpg";
const CustomComponent = (props) => {
  return (
    <div
      className="custom-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1 className="text-cust">{props.props}</h1>
    </div>
  );
};

export default CustomComponent;
