import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Multi Page Responsive Website Source Code",
    description:
      "Complete HTML, CSS & JavaScript source code for a professional multi-page website with modern design patterns.",
    price: "Free",
    rating: 4.9,
    downloads: 1250,
    isBestSeller: true,
    driveFile:
      "https://drive.google.com/file/d/15ARx6fw4ceCAA7MwgLF2QNohKpt0htJm/view?usp=sharing",
    thumbnail:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1750754868/Screenshot_49_pa6l7i.png",
  },
  {
    id: 2,
    title: "Netflix Landing Page Using HTML and CSS",
    description:
      "Pixel-perfect Netflix homepage clone built with HTML5 and CSS3.",
    price: "Free",
    rating: 4.8,
    downloads: 890,
    isBestSeller: false,
    driveFile: "https://drive.google.com/file/d/example2/view?usp=sharing",
    thumbnail:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1750754868/Screenshot_49_pa6l7i.png",
  },
  {
    id: 3,
    title: "HTML & CSS Project Source Code: 5 Projects",
    description:
      "Bundle of 5 complete HTML & CSS projects with modern designs.",
    price: "Free",
    rating: 4.9,
    downloads: 2100,
    isBestSeller: true,
    driveFile: "https://drive.google.com/file/d/example3/view?usp=sharing",
    thumbnail:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1750754868/Screenshot_49_pa6l7i.png",
  },
  {
    id: 4,
    title: "Responsive Amazon Clone",
    description:
      "Amazon homepage clone with responsive design and product grids.",
    price: "Free",
    rating: 4.7,
    downloads: 756,
    isBestSeller: false,
    driveFile: "https://drive.google.com/file/d/example4/view?usp=sharing",
    thumbnail:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1750754868/Screenshot_49_pa6l7i.png",
  },
  {
    id: 5,
    title: "React Weather App with API",
    description: "React.js weather app with live data and responsive UI.",
    price: "Free",
    rating: 4.8,
    downloads: 634,
    isBestSeller: false,
    driveFile: "https://drive.google.com/file/d/example5/view?usp=sharing",
    thumbnail:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1750754868/Screenshot_49_pa6l7i.png",
  },
  {
    id: 6,
    title: "Interactive JavaScript Todo App",
    description: "Todo app with drag/drop, local storage, filters, and more.",
    price: "Free",
    rating: 4.6,
    downloads: 543,
    isBestSeller: false,
    driveFile: "https://drive.google.com/file/d/example6/view?usp=sharing",
    thumbnail:
      "https://res.cloudinary.com/dqhk94co9/image/upload/v1750754868/Screenshot_49_pa6l7i.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-icon">
            <span className="code-icon">💻</span>
          </div>
          <h1 className="main-title">Featured Projects</h1>
          <p className="main-description">
            Discover our collection of carefully crafted, production-ready
            templates and tools designed to accelerate your development process.
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <span className="zap-icon">⚡</span>
            </div>
            <div className="stat-number">6+</div>
            <div className="stat-label">Projects Available</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <span className="palette-icon">🎨</span>
            </div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Design Categories</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <span className="code-icon">💻</span>
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Open Source</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Ready to Build Something Amazing?</h3>
            <p className="cta-description">
              Join thousands of developers who trust our templates to kickstart
              their projects.
            </p>
            <button className="cta-button">Browse All Projects</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
