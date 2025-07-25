import React from "react";
import { Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import PagesPage from "./Pages/PagesPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import Feature from "./Pages/ScrollNav/Feature.jsx";
import FreeQuote from "./Pages/ScrollNav/FreeQuote.jsx";
import OurTeam from "./Pages/ScrollNav/OurTeam.jsx";
import Page404 from "./Pages/ScrollNav/Page404.jsx";
import TestimonialDropdown from "./Pages/ScrollNav/TestimonialDropdown.jsx";
import Details from "./Details/Details.jsx";
import LoginFrom from "./Component/Form/LoginFrom.jsx";
import RegistrationForm from "./Component/Form/RegistrationForm.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="service" element={<ServicesPage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
        <Route path="/pages" element={<PagesPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/Feature" element={<Feature />}></Route>
        <Route path="/freequote" element={<FreeQuote />}></Route>
        <Route path="/ourteam" element={<OurTeam />}></Route>
        <Route path="/error404" element={<Page404 />}></Route>
        <Route
          path="/testimonialdrop"
          element={<TestimonialDropdown />}
        ></Route>
        <Route path="/viewdetails" element={<Details />}></Route>
        <Route path="/login" element={<LoginFrom />}></Route>
        <Route path="/registor" element={<RegistrationForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
