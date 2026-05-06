import React from "react";
import PropTypes from "prop-types";
import image from "../images/motion-background.jpg";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="hero-section">
      <img className="background" src={image} alt="" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-greeting">Hi there, I'm</p>
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <div className="hero-cta-row">
          <a href="#about" className="btn-primary">About me</a>
          <a href="#portfolio" className="btn-outline">My work</a>
        </div>
      </div>
      <a href="#about" className="hero-scroll-hint" aria-label="Scroll down">
        <span className="scroll-chevron" />
      </a>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
