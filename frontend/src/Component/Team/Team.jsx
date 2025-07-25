import React from "react";
import "./Team.css";
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";

const teamMembers = [
  { img: team1, name: "John Doe", designation: "CEO & Founder" },
  { img: team2, name: "Jane Smith", designation: "Project Manager" },
  { img: team3, name: "Peter Jones", designation: "Lead Engineer" },
];

const Team = () => {
  return (
    <div className="team-section">
      <div className="container-team">
        <div className="section-header">
          <h6 className="section-subtitle">Team Member</h6>
          <h1 className="section-title">Experienced Team Members</h1>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-item" key={index}>
              <div className="team-image-section">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-member-image"
                />
                <div className="team-socials">
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h5>{member.name}</h5>
                <span>{member.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
