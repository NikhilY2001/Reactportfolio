import React from "react";
import "./Skills.css"; // Make sure to link the CSS file

function Skills() {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills I possess</h2>

      <div className="skills-section">
        <h3 className="skills-subtitle">Core React Skills</h3>
        <ul className="skills-list">
          <li>React.js - Component-based architecture</li>
          <li>State Management - React Context API, Redux & Redux Toolkit</li>
          <li>
            React Hooks - `useState`, `useEffect`, `useContext`, `useReducer`
          </li>
          <li>React Router - Dynamic routing, Nested routes</li>
          <li>
            Performance Optimization - Lazy loading, Memoization (`React.memo`)
          </li>
        </ul>
      </div>

      <div className="skills-section">
        <h3 className="skills-subtitle">Web Development Skills</h3>
        <ul className="skills-list">
          <li>HTML5 - Semantic HTML, Accessibility (ARIA roles)</li>
          <li>CSS3 - Flexbox, Grid, Responsive design, Animations</li>
          <li>JavaScript (ES6+) - Promises, Async/Await, Fetch API</li>
          <li>Frontend Libraries - Styled-components, Material-UI</li>
          <li>Backend Integration - REST APIs, Node.js, Express.js</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
