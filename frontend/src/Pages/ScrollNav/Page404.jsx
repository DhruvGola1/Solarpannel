import React from "react";
import Topbar from "../../Component/Topbar/Topbar";
import Navbar from "../../Component/Navbar/Navbar";
import CustomComponent from "../PageComponent/CustomComponent";
import Footer from "../../Component/Footer/Footer";
import BackToTop from "../../Component/BackToTop/BackToTop";
import Error from "./Error/Error";

const Page404 = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <CustomComponent props="404 Error" />
      <Error />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Page404;
