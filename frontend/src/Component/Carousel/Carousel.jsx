import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css";
import carousel1 from "../../assets/images/carousel-1.jpg";
import carousel2 from "../../assets/images/carousel-2.jpg";
import carousel3 from "../../assets/images/carousel-3.jpg";

const slideData = [
  {
    img: carousel1,
    title: "Pioneers Of Solar And Renewable Energy",
    description:
      "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
  },
  {
    img: carousel2,
    title: "The Future of Clean Energy is Here",
    description:
      "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.",
  },
  {
    img: carousel3,
    title: "Powering a Greener Tomorrow",
    description:
      "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita.",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slideData.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="carousel-img"
            />
            <div className="carousel-inner">
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-description">{slide.description}</p>
                  <a href="#" className="btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => selectSlide(index)}
          >
            <img src={slideData[index].img} alt={`Dot ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
