import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.css";
import Navbar from "../Component/Navbar/Navbar";
import Topbar from "../Component/Topbar/Topbar";
import Footer from "../Component/Footer/Footer";
import BackToTop from "../Component/BackToTop/BackToTop";
import CustomComponent from "../Pages/PageComponent/CustomComponent";

const Details = () => {
  const { state: service } = useLocation();
  console.log(service);
  return (
    <div className="carddetials-container">
      <Topbar />
      <Navbar />
      <CustomComponent props="Detials" />
      <div className="carddetails">
        <div className="imgcard">
          <img src={service.img} alt="" />
        </div>
        <div className="textcard">
          <h1>{service.title}</h1>
          <p>
            {service.text} Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Iusto dolorem eaque sed ratione ad, eveniet magni ullam sit
            reiciendis ipsum tenetur fuga at earum mollitia porro nemo pariatur
            explicabo aliquid quam. Optio beatae laudantium minima nihil
            delectus autem aliquam itaque sint et quasi cumque, ducimus
            perspiciatis impedit similique voluptates iure voluptate quo
            accusamus quod. Accusamus accusantium in rem! Qui, cumque placeat
            illo nobis minima vel. Nemo doloremque, ipsa nam qui quibusdam
            reprehenderit. Ex numquam fugiat architecto commodi perferendis,
            veritatis sit obcaecati qui odit vero. Accusantium dicta provident
            incidunt, officia asperiores sit iusto. Praesentium officia tempora
            expedita maxime ea illum vel!
          </p>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Details;
