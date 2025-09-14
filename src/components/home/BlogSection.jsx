import React from "react";
import Container from "react-bootstrap/Container";

const BlogSection = ({ heading, subtitle, description, tags, url, icon }) => {
  return (
    <section className="blog-section" id="blog">
      <Container>
        <div className="section-title">
          <h2>{heading}</h2>
          <p className="lead">{subtitle}</p>
        </div>
        
        <div className="blog-card">
          <div className="blog-icon">
            <i className={icon}></i>
          </div>
          <h3 className="mb-4">Game Development Journey</h3>
          <p className="lead mb-4">
            {description}
          </p>
          <div className="mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="skill-highlight">
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noreferrer noopener" 
            className="btn-primary-custom"
          >
            <i className="fas fa-external-link-alt me-2"></i>Visit My Blog on Yuque
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;