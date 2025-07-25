import React from "react";
import "./Quote.css";
import quoteImage from "../../assets/images/quote.jpg";

const Quote = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Demo)");
  };

  return (
    <div className="quote-section">
      <div className="quote-grid">
        <div className="quote-image-container">
          <img
            src={quoteImage}
            alt="Worker installing solar panel"
            className="quote-image"
          />
        </div>
        <div className="quote-form-container">
          <div className="quote-form-content">
            <h6 className="section-subtitle">Free Quote</h6>
            <h1 className="section-title">Get A Free Quote</h1>
            <p className="section-paragraph">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Your Mobile" required />
                <select>
                  <option>Select A Service</option>
                  <option value="1">Solar Panels</option>
                  <option value="2">Wind Turbines</option>
                  <option value="3">Hydropower Plants</option>
                </select>
              </div>
              <div className="form-row">
                <textarea placeholder="Special Note"></textarea>
              </div>
              <div className="form-row">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
