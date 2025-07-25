import React, { useState } from "react";
import "./Registration.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";
import axios from "axios";

const RegistrationForm = () => {
  const [msg, setMsg] = useState(null);
  const [validation, setValidation] = useState("");
  const [redError, setRedError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    address1: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, address, city, state, zip } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !address ||
      !city ||
      !state ||
      !zip
    ) {
      setValidation("All fields are required.");
      setRedError(true);
      return;
    }

    try {
      setRedError(false);
      setValidation("");

      const result = await axios.post(
        "http://localhost:4000/user/userpost",
        formData
      );
      console.log(result.data);
      setMsg(result.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registration-wrapper">
      <Topbar />
      <Navbar />
      <div className="registration-content">
        <p className="p-text">Registration Form</p>
        <div className="registration-form-section">
          <form className="registration-form">
            <div className="name-row">
              <input
                type="text"
                className={`form-input ${
                  redError && !formData.firstName ? "lable-red" : ""
                }`}
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                className={`form-input ${
                  redError && !formData.lastName ? "lable-red" : ""
                }`}
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className={`form-input ${
                  redError && !formData.email ? "lable-red" : ""
                }`}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={`form-input ${
                  redError && !formData.password ? "lable-red" : ""
                }`}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className={`form-input ${
                  redError && !formData.address ? "lable-red" : ""
                }`}
                placeholder="1234 Main St"
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address 2</label>
              <input
                type="text"
                className="form-input"
                placeholder="Apartment, studio, or floor"
                name="address1"
                onChange={handleChange}
              />
            </div>
            <div className="city-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className={`form-input ${
                    redError && !formData.city ? "lable-red" : ""
                  }`}
                  name="city"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  className={`form-input ${
                    redError && !formData.state ? "lable-red" : ""
                  }`}
                  name="state"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Zip</label>
                <input
                  type="text"
                  className={`form-input ${
                    redError && !formData.zip ? "lable-red" : ""
                  }`}
                  name="zip"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmitForm}
            >
              Register
            </button>
            <button type="button" className="submit-button">
              Back
            </button>
          </form>
        </div>
        <p>{validation}</p>
        <p>{msg}</p>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default RegistrationForm;
