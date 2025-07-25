import React from "react";
import "./Login.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";
import FeatureStats from "../FeatureStats/FeatureStats";
import { Link } from "react-router-dom";

const LoginFrom = () => {
  return (
    <div className="login-contianer">
      <Topbar />
      <Navbar />
      <div className="form-child-container">
        <p className="p-text">Login Here</p>
        <form className="form-text">
          <div className="row mb-3 text text-gap">
            <label for="inputEmail3" className="col-sm-2 col-form-label ">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control text"
                id="inputEmail3"
              />
            </div>
          </div>
          <div className="row mb-3 text-gap">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control text"
                id="inputPassword3"
              />
            </div>
          </div>
          <div className="row mb-3 text-gap-1">
            <Link type="submit" className="btn btn-primary btns-text">
              Sign in
            </Link>
            <Link type="submit" to="/" className="btn btn-primary btns-text">
              Back
            </Link>
          </div>
        </form>
        <label className="col-sm-2 col-form-label">
          <span>don't have an Account</span> /{" "}
          <Link to="/registor">Registor</Link>
        </label>
      </div>
      <FeatureStats />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default LoginFrom;
