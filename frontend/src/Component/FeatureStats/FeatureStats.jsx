import React from "react";
import "./FeatureStats.css";
import CountUp from "react-countup";

const stats = [
  { icon: "fa-users", count: 3453, title: "Happy Customers" },
  { icon: "fa-check", count: 4234, title: "Project Done" },
  { icon: "fa-award", count: 3123, title: "Awards Win" },
  { icon: "fa-users-cog", count: 1831, title: "Expert Workers" },
];

const FeatureStats = () => {
  return (
    <div className="stats-section">
      <div className="container-text">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-header">
                <div className="stat-icon-wrapper">
                  <i className={`fa ${stat.icon}`}></i>
                </div>
                <h1 className="stat-count">
                  <CountUp
                    start={0}
                    end={stat.count}
                    duration={3}
                    delay={1}
                  ></CountUp>
                </h1>
              </div>
              <h5 className="stat-title">{stat.title}</h5>
              <span>Tempor erat elitr rebum at clita.</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureStats;
