import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { NavLink } from "react-router-dom";
import WorkExperience from "./components/WorkExperience";
import Interests from "./components/Skills";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import About from "./components/About";

// Home Component
function Home() {
  return (
    <section className="home">
      <h1 className="hero-heading">Welcome to My Portfolio</h1>
      <p className="hero-subheading">
        Explore my journey, skills, and passion for web development.
      </p>

      <a
        href="https://github.com/NikhilY2001/CVMINE/blob/a01ab2792ff8d7a7cb1a0883b4922965208d8f83/Nikhil%20Y.pdf"
        target="_blank"
        className="cta-button"
      >
        Discover More
      </a>
    </section>
  );
}

<About></About>;
// Interests Component
<Skills></Skills>;
// Contact Component
<Contact></Contact>;

// Main App Component
function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">My Portfolio</h1>Welcome to my profile, Hope you
        like it 😊
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/WorkExperience"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Work Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interests"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Interests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/WorkExperience" element={<WorkExperience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
