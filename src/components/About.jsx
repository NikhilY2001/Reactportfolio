import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="timeline">
        <div className="branch branch-1">
          <div className="circle"></div>
          <div className="card">
            <h3>10th Grade</h3>
            <p>Alvas English Medium High School</p>
            <p>Grade:94.72%</p>
          </div>
        </div>
        <div className="branch branch-2">
          <div className="circle"></div>
          <div className="card">
            <h3>Pre University</h3>
            <p>Alvas PU College</p>
            <p>Grade:88.61%</p>
          </div>
        </div>
        <div className="branch branch-3">
          <div className="circle"></div>
          <div className="card">
            <h3>Engineering</h3>
            <p>New Horizon college of Engineering</p>
            <p>Grade:8.6 CGPA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
