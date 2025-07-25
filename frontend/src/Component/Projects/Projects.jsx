import React, { useState } from "react";
import "./Projects.css";

import project1 from "../../assets/images/img-600x400-1.jpg";
import project2 from "../../assets/images/img-600x400-2.jpg";
import project3 from "../../assets/images/img-600x400-3.jpg";
import project4 from "../../assets/images/img-600x400-4.jpg";
import project5 from "../../assets/images/img-600x400-5.jpg";
import project6 from "../../assets/images/img-600x400-6.jpg";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    img: project6,
    category: "solar",
    title: "Solar Panels for Residential Homes",
  },
  {
    id: 2,
    img: project5,
    category: "wind",
    title: "Offshore Wind Turbine Farm",
  },
  {
    id: 3,
    img: project4,
    category: "hydro",
    title: "Large Scale Hydropower Dam",
  },
  {
    id: 4,
    img: project3,
    category: "solar",
    title: "Commercial Solar Installation",
  },
  { id: 5, img: project2, category: "wind", title: "Onshore Wind Power Plant" },
  {
    id: 6,
    img: project1,
    category: "hydro",
    title: "River-based Hydropower System",
  },
];

const categoryMap = {
  solar: "Solar Panels",
  wind: "Wind Turbines",
  hydro: "Hydropower Plants",
};

const Projects = () => {
  const [filter, setFilter] = useState("*");

  const filteredProjects =
    filter === "*"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="projects-section">
      <div className="container-project">
        <div className="section-header">
          <h6 className="section-subtitle">Our Projects</h6>
          <h1 className="section-title">
            Visit Our Latest Solar And Renewable Energy Projects
          </h1>
        </div>

        <div className="project-filters">
          <button
            className={filter === "*" ? "active" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </button>
          <button
            className={filter === "solar" ? "active" : ""}
            onClick={() => setFilter("solar")}
          >
            Solar Panels
          </button>
          <button
            className={filter === "wind" ? "active" : ""}
            onClick={() => setFilter("wind")}
          >
            Wind Turbines
          </button>
          <button
            className={filter === "hydro" ? "active" : ""}
            onClick={() => setFilter("hydro")}
          >
            Hydropower Plants
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <Link
                    to={project.img}
                    className="project-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                  <a href="/" className="project-icon">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="project-details">
                <p className="project-category">
                  {categoryMap[project.category]}
                </p>
                <hr className="project-divider" />
                <h5 className="project-title">{project.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
