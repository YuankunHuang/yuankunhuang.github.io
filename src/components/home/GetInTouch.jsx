import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GetInTouch = ({ heading, subtitle, message, contacts }) => {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="section-title">
          <h2>{heading}</h2>
          <p className="lead">{subtitle}</p>
        </div>
        
        <Row>
          {contacts && contacts.map((contact, index) => (
            <Col key={index} md={4}>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className={contact.icon}></i>
                </div>
                <h5>{contact.type}</h5>
                <p className="text-muted mb-3">{contact.description}</p>
                <a 
                  href={contact.action} 
                  target={contact.action.startsWith('http') ? "_blank" : "_self"}
                  rel={contact.action.startsWith('http') ? "noreferrer noopener" : ""}
                  className="btn-outline-custom"
                >
                  {contact.value}
                </a>
              </div>
            </Col>
          ))}
        </Row>
        
        {message && (
          <div className="text-center mt-5">
            <p className="lead">
              {message}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default GetInTouch;