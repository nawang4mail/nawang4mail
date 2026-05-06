import React from "react";

const projectList = [
  {
    title: "Project One",
    description:
      "Describe your first project here — what it does, what tech you used, and what problem it solves.",
    url: "https://github.com/nawang4mail",
    tag: "Open Source",
  },
  {
    title: "Project Two",
    description:
      "Describe your second project here. Link to a live demo or the GitHub repo.",
    url: "https://github.com/nawang4mail",
    tag: "Web App",
  },
  {
    title: "Project Three",
    description:
      "Describe your third project — it could be a tool, library, or anything you're proud of.",
    url: "https://github.com/nawang4mail",
    tag: "Tool",
  },
  {
    title: "Project Four",
    description:
      "Another project to showcase your range. Update these with your real projects!",
    url: "https://github.com/nawang4mail",
    tag: "API",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-inner">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Things I've built and shipped</p>
        <div className="project-grid">
          {projectList.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <span className="project-link-hint">View project →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
