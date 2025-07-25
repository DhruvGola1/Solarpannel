import React from "react";
import Topbar from "../../Component/Topbar/Topbar";
import Navbar from "../../Component/Navbar/Navbar";
import CustomComponent from "../PageComponent/CustomComponent";
import Quote from "../../Component/Quote/Quote";
import Footer from "../../Component/Footer/Footer";
import BackToTop from "../../Component/BackToTop/BackToTop";

const FreeQuote = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="Free Quote" />
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

export default FreeQuote;
