import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import testimonial1 from "../../assets/images/testimonial-1.jpg";
import testimonial2 from "../../assets/images/testimonial-2.jpg";
import testimonial3 from "../../assets/images/testimonial-3.jpg";
import Button from "../button";

const testimonialsData = [
  {
    img: testimonial1,
    name: "Sarah Johnson",
    profession: "Homeowner",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
  },
  {
    img: testimonial2,
    name: "Mark Davis",
    profession: "Business Owner",
    text: "A great experience from start to finish. The team was professional, and the solar installation has exceeded our expectations, significantly lowering our energy bills.",
  },
  {
    img: testimonial3,
    name: "Emily Chen",
    profession: "Architect",
    text: "As an architect, I appreciate quality design and execution. Solartec delivered on both. Their integration of renewable energy into our project was seamless and efficient.",
  },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <i className="fa fa-arrow-right"></i>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <i className="fa fa-arrow-left"></i>
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="testimonial-section">
      <div className="container-testimonial">
        <div className="section-header">
          <h6 className="section-subtitle">Testimonial</h6>
          <h1 className="section-title">What Our Clients Say!</h1>
        </div>

        <div className="testimonial-carousel-wrapper">
          <Slider {...settings}>
            {testimonialsData.map((item, index) => (
              <div key={index} className="slider-slow">
                <div className="testimonial-slide-content">
                  <div className="testimonial-img-wrapper">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="testimonial-img"
                    />
                    <div className="quote-icon">
                      <i className="fa fa-quote-left"></i>
                    </div>
                  </div>
                  <div className="testimonial-text-box">
                    <p>{item.text}</p>
                    <h5>{item.name}</h5>
                    <span>{item.profession}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
