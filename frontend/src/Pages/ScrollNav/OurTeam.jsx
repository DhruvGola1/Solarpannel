import React from "react";
import Topbar from "../../Component/Topbar/Topbar";
import Navbar from "../../Component/Navbar/Navbar";
import CustomComponent from "../PageComponent/CustomComponent";
import Team from "../../Component/Team/Team";
import Footer from "../../Component/Footer/Footer";
import BackToTop from "../../Component/BackToTop/BackToTop";

const OurTeam = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="Our Team" />
      <Team />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default OurTeam;
