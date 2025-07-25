import React from "react";
import Topbar from "../Component/Topbar/Topbar";
import Navbar from "../Component/Navbar/Navbar";
import CustomComponent from "./PageComponent/CustomComponent";
import Services from "../Component/Services/Services";
import WhyChooseUs from "../Component/WhyChooseUs/WhyChooseUs";
import Testimonials from "../Component/Testimonials/Testimonials";
import Footer from "../Component/Footer/Footer";
import BackToTop from "../Component/BackToTop/BackToTop";

const ServicesPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="Services" />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ServicesPage;
