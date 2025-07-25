import React from "react";
import Topbar from "../Component/Topbar/Topbar";
import Navbar from "../Component/Navbar/Navbar";
import CustomComponent from "./PageComponent/CustomComponent";
import Projects from "../Component/Projects/Projects";
import Quote from "../Component/Quote/Quote";
import Testimonials from "../Component/Testimonials/Testimonials";
import Footer from "../Component/Footer/Footer";
import BackToTop from "../Component/BackToTop/BackToTop";

const ProjectPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="Projects" />
      <Projects />
      <Quote />
      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProjectPage;
