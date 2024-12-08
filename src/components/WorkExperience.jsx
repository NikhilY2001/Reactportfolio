import React from "react";
import "./WorkExperience.css";

function WorkExperience() {
  const experiences = [
    {
      role: "Intern/Training",
      company: "Incadea",
      duration: "Feb 2023 - July 2023",
      description:
        "Joined as intern and was in the learning period for 6 months had great learning experience",
    },
    {
      role: "Software Engineer",
      company: "Incadea",
      duration: "Aug 2023 - Present",
      description:
        "Developed and Maintained Scalable Application and Enhanced User Experience",
    },
  ];

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="card-container">
        {experiences.map((experience, index) => (
          <div className="card" key={index}>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <span style={{ color: "black" }}>{experience.duration}</span>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
