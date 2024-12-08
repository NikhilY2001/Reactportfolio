import React, { useState } from "react";
import "./Skills";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you could use emailJS, Formspree, or API)
    alert("Message Sent!");
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <h3 style={{ color: "white" }}>
        It would be better if you could connect with me through this email ID:
      </h3>
      <a
        href="mailto:nikhily1515@gmail.com"
        class="email-link"
        style={{ color: "white" }}
      >
        nikhily1515@gmail.com
      </a>
      <h1>" "</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your sweet name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Mail id please"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
