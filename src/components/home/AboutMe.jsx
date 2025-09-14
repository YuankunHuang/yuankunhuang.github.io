import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = ({ heading, message, stats, skills, resume }) => {
  // Animate stat numbers
  React.useEffect(() => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const finalValue = stat.textContent.trim();
      
      // Skip non-numeric values like "IGG"
      if (!/\d/.test(finalValue)) {
        return;
      }
      
      stat.textContent = '0';
      let current = 0;
      const numericPart = parseInt(finalValue);
      const increment = finalValue.includes('+') ? 1 : numericPart > 10 ? Math.ceil(numericPart/20) : 1;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericPart) {
          stat.textContent = finalValue;
          clearInterval(timer);
        } else {
          stat.textContent = current + (finalValue.includes('%') ? '%' : finalValue.includes('+') ? '+' : '');
        }
      }, 80);
    });
  }, []);

  return (
    <section className="about-section" id="about">
      <Container>
        <div className="section-title">
          <h2>{heading}</h2>
          <p className="lead">Passionate Unity developer focused on crafting exceptional mobile gaming experiences</p>
        </div>
        
        <Row>
          <Col lg={8}>
            <p className="mb-4 lead">
              {message}
            </p>
            <div className="mb-4">
              {skills && skills.map((skill, index) => (
                <span key={index} className="skill-highlight">
                  {skill}
                </span>
              ))}
            </div>
            {resume && (
              <div className="mb-4">
                <a
                  className="btn-primary-custom"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  <i className="fas fa-download me-2"></i>
                  Download Resume
                </a>
              </div>
            )}
          </Col>
          <Col lg={4}>
            <div className="about-stats">
              {stats && stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;