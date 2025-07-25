import React from "react";
import Topbar from "../../Component/Topbar/Topbar";
import Navbar from "../../Component/Navbar/Navbar";
import CustomComponent from "../PageComponent/CustomComponent";
import Testimonials from "../../Component/Testimonials/Testimonials";
import Footer from "../../Component/Footer/Footer";
import BackToTop from "../../Component/BackToTop/BackToTop";

const TestimonialDropdown = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="Testimonial" />
      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default TestimonialDropdown;
