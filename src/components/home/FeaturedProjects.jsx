import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FeaturedProjects = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className="featured-projects" id="projects">
      <Container>
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p className="lead">Showcasing impactful mobile game development and performance optimization work</p>
        </div>
        
        <Row>
          {projects.map((project, index) => (
            <Col key={project.id} lg={6} className="mb-4">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  <i className={getProjectIcon(project.tags[0])}></i>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-highlights">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span key={highlightIndex} className="highlight-item">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.detailsModal && (
                      <button
                        className="btn-primary-custom"
                        data-bs-toggle="modal"
                        data-bs-target={`#${project.detailsModal}`}
                      >
                        <i className="fas fa-eye me-2"></i>View Details
                      </button>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="btn-outline-custom">
                        <i className="fas fa-play me-2"></i>Play Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        className="btn-outline-custom"
                      >
                        <i className="fab fa-github me-2"></i>Source Code
                      </a>
                    )}
                    
                    {/* Optional Project Website */}
                    {project.projectUrl && (
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        className="btn-primary-custom"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        {project.projectUrlLabel || "Visit Website"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        {/* Dynamic Demo Sections */}
        {projects.filter(p => p.demoUrl && p.demoUrl.startsWith('#')).map(project => {
          const demoId = project.demoUrl.substring(1);
          return (
            <Row key={`demo-${project.id}`} className="mt-5" id={demoId}>
              <Col xs={12}>
                <div className="demo-section">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${getProjectIcon(project.tags[0])} fa-2x text-primary me-3`}></i>
                    <div>
                      <h3 className="mb-1">{project.title} - Live Demo</h3>
                      <p className="text-muted mb-0">
                        {project.demoDescription || "Experience the project features in your browser"}
                      </p>
                    </div>
                  </div>
                  
                  {/* Web Demo Embed - Support for Unity WebGL, iframe, etc. */}
                  {project.webDemo ? (
                    <div className="web-demo-container">
                      {project.webDemo.type === 'unity' && (
                        <div className="unity-webgl-container">
                          <canvas id={`unityCanvas-${project.id}`} 
                                  width={project.webDemo.width || 960} 
                                  height={project.webDemo.height || 600}>
                          </canvas>
                          <div className="demo-loading" id={`loading-${project.id}`}>
                            <div className="loading-bar">
                              <div className="loading-progress"></div>
                            </div>
                            <p>Loading {project.title}...</p>
                          </div>
                        </div>
                      )}
                      {project.webDemo.type === 'iframe' && (
                        <iframe 
                          src={project.webDemo.url}
                          width="100%" 
                          height={project.webDemo.height || 600}
                          frameBorder="0"
                          allowFullScreen
                          title={`${project.title} Demo`}
                        />
                      )}
                      {project.webDemo.type === 'video' && (
                        <video 
                          width="100%" 
                          height={project.webDemo.height || 400}
                          controls 
                          poster={project.webDemo.poster}
                        >
                          <source src={project.webDemo.url} type="video/mp4" />
                          Your browser does not support video playback.
                        </video>
                      )}
                    </div>
                  ) : (
                    // Placeholder demo section
                    <div className="demo-placeholder">
                      <div>
                        <i className={`${getProjectIcon(project.tags[0])} fa-3x mb-3`}></i>
                        <p>{project.title} Demo</p>
                        <small>{project.demoTech || "Unity WebGL Build • Optimized Performance"}</small>
                      </div>
                    </div>
                  )}
                  
                  <div className="demo-controls">
                    {project.webDemo && (
                      <>
                        <button className="btn-primary-custom" onClick={() => startDemo(project.id)}>
                          <i className="fas fa-play me-2"></i>
                          {project.webDemo.startText || "Start Demo"}
                        </button>
                        <button className="btn-outline-custom" onClick={() => toggleFullscreen(project.id)}>
                          <i className="fas fa-expand me-2"></i>Fullscreen
                        </button>
                      </>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        className="btn-outline-custom"
                      >
                        <i className="fab fa-github me-2"></i>View Source
                      </a>
                    )}
                    <button className="btn-outline-custom">
                      <i className="fas fa-info me-2"></i>Details
                    </button>
                  </div>
                  
                  {project.demoFeatures && (
                    <div className="mt-3">
                      <small className="text-muted">
                        <strong>Demo Features:</strong> {project.demoFeatures.join(", ")}
                      </small>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

// Helper function to get appropriate icon for project type
const getProjectIcon = (projectType) => {
  const iconMap = {
    "Unity": "fas fa-gamepad",
    "Mobile": "fas fa-mobile-alt",
    "Tools": "fas fa-tools",
    "Healthcare": "fas fa-heartbeat",
    "Editor": "fas fa-code",
    "RPG": "fas fa-dragon",
    "Leap Motion": "fas fa-hand-paper",
    "Web": "fas fa-globe",
    "AI": "fas fa-brain",
    "VR": "fas fa-vr-cardboard",
    "AR": "fas fa-eye",
  };
  
  return iconMap[projectType] || "fas fa-cube";
};


// Demo control functions
const startDemo = (projectId) => {
  console.log(`Starting demo for project ${projectId}`);
  // Implementation for starting Unity WebGL or other demos
  const canvas = document.getElementById(`unityCanvas-${projectId}`);
  const loading = document.getElementById(`loading-${projectId}`);
  
  if (canvas && loading) {
    loading.style.display = 'block';
    // Initialize Unity WebGL build here
    // This would connect to your actual Unity WebGL loader
  }
};

const toggleFullscreen = (projectId) => {
  const container = document.getElementById(`unityCanvas-${projectId}`)?.parentElement;
  if (container) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  }
};

// Add demo section styling
const demoStyles = `
.demo-section {
  background: white;
  border: 2px dashed #e5e7eb;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  margin: 30px 0;
  position: relative;
  overflow: hidden;
}

.demo-placeholder {
  background: #f9fafb;
  height: 400px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.2rem;
  margin: 20px 0;
}

.demo-controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
`;

// Inject styles if not already present
if (!document.querySelector('#demo-styles')) {
  const styleElement = document.createElement('style');
  styleElement.id = 'demo-styles';
  styleElement.textContent = demoStyles;
  document.head.appendChild(styleElement);
}

export default FeaturedProjects;