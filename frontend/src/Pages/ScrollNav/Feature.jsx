import React from "react";
import CustomComponent from "../PageComponent/CustomComponent";
import FeatureStats from "../../Component/FeatureStats/FeatureStats";
import WhyChooseUs from "../../Component/WhyChooseUs/WhyChooseUs";
import Footer from "../../Component/Footer/Footer";
import BackToTop from "../../Component/BackToTop/BackToTop";
import Topbar from "../../Component/Topbar/Topbar";
import Navbar from "../../Component/Navbar/Navbar";

const Feature = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="Features" />
      <FeatureStats />
      <WhyChooseUs />
      <br />
      <br />
      <br />
      <br />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Feature;
