import React from "react";
import Topbar from "../Component/Topbar/Topbar.jsx";
import Navbar from "../Component/Navbar/Navbar.jsx";
import Carousel from "../Component/Carousel/Carousel.jsx";
import FeatureStats from "../Component/FeatureStats/FeatureStats.jsx";
import About from "../Component/About/About.jsx";
import Services from "../Component/Services/Services.jsx";
import WhyChooseUs from "../Component/WhyChooseUs/WhyChooseUs.jsx";
import Projects from "../Component/Projects/Projects.jsx";
import Quote from "../Component/Quote/Quote.jsx";
import Team from "../Component/Team/Team.jsx";
import Testimonials from "../Component/Testimonials/Testimonials.jsx";
import Footer from "../Component/Footer/Footer.jsx";
import BackToTop from "../Component/BackToTop/BackToTop.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <main>
        <Carousel />
        <FeatureStats />
        <About />
        <Services />
        <WhyChooseUs />

        <Projects />
        <Quote />
        <Team />
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
