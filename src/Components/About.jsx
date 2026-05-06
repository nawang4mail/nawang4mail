import React from "react";

const description =
  "I'm a software developer who loves building clean, efficient, and user-friendly applications. I enjoy turning complex problems into simple, beautiful solutions.";

const skillsList = [
  "JavaScript / TypeScript",
  "React & Node.js",
  "Python",
  "Git & GitHub",
  "REST APIs",
  "UI/UX Design",
  "Cloud Platforms",
  "Problem Solving",
];

const detailOrQuote =
  "Passionate about open source and continuous learning. I believe great software is built at the intersection of technical excellence and thoughtful design.";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="large">{description}</p>
            <hr className="about-divider" />
            <p className="about-quote">&ldquo;{detailOrQuote}&rdquo;</p>
          </div>
          <div className="about-skills">
            <h3 className="skills-heading">Skills &amp; Technologies</h3>
            <ul className="skills-grid">
              {skillsList.map((skill) => (
                <li key={skill} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
