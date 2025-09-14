import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { about } from "../../editable-stuff/config.js";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(135deg,${gradient})`,
          backgroundSize: "100% 100%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        {/* Floating shapes for animation */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="hero-content">
                <h1 ref={ref} className="display-1 mb-4">
                  {title}
                </h1>
                <Typist typingDelay={25} cursor={false}>
                  <div className="lead typist mb-4">
                    {message}
                  </div>
                </Typist>
                <div className="mb-4">
                  {icons.map((icon, index) => (
                    <a
                      key={`social-icon-${index}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={icon.url}
                      aria-label={`My ${icon.image.split("-")[1]}`}
                      className="socialicons me-3"
                    >
                      <i className={`fab ${icon.image} fa-2x`} />
                    </a>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    className="btn btn-light btn-lg me-3"
                    href="#about"
                    role="button"
                    aria-label="Learn more about me"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('about');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    About Me
                  </a>
                  <a
                    className="btn btn-outline-light btn-lg"
                    href="#projects"
                    role="button"
                    aria-label="View my projects"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('projects');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              {about.imageLink && (
                <img 
                  src={about.imageLink}
                  alt="Yuankun Huang"
                  className="profile-image"
                />
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
