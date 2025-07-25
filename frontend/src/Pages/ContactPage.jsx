import React from "react";
import Topbar from "../Component/Topbar/Topbar";
import Navbar from "../Component/Navbar/Navbar";
import CustomComponent from "./PageComponent/CustomComponent";
import Footer from "../Component/Footer/Footer";
import Quote from "../Component/Quote/Quote";
import BackToTop from "../Component/BackToTop/BackToTop";

const ContactPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="Contact Us" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Quote />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;
