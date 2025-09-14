import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Research = ({ heading, subtitle, projects }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  const getStatusClass = (status) => {
    const statusMap = {
      "learning": "status-learning",
      "exploring": "status-exploring", 
      "prototype": "status-prototype"
    };
    return statusMap[status] || "status-exploring";
  };

  const getStatusText = (status) => {
    const textMap = {
      "learning": "Learning",
      "exploring": "Exploring",
      "prototype": "Prototype"
    };
    return textMap[status] || "Exploring";
  };

  return (
    <section className="research-section" id="research">
      <Container>
        <div className="section-title">
          <h2>{heading}</h2>
          <p className="lead">{subtitle}</p>
        </div>
        
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6}>
              <div className="research-item">
                <div className="research-title">
                  <div className="research-icon">
                    <i className={project.icon}></i>
                  </div>
                  {project.title}
                  <span className={`research-status ${getStatusClass(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
                <p className="research-description">
                  {project.description}
                </p>
                <div className="research-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="research-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Research;