import React from "react";
import Topbar from "../Component/Topbar/Topbar.jsx";
import Navbar from "../Component/Navbar/Navbar.jsx";
import CustomComponent from "./PageComponent/CustomComponent";
import FeatureStats from "../Component/FeatureStats/FeatureStats";
import About from "../Component/About/About";
import Team from "../Component/Team/Team";
import Footer from "../Component/Footer/Footer";
import BackToTop from "../Component/BackToTop/BackToTop.jsx";

const AboutPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="About Us" />
      <FeatureStats />
      <About />
      <Team />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
