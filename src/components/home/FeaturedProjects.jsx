import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FeaturedProjects = ({ projects, coreTagFilters = [] }) => {
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [activeDemoProject, setActiveDemoProject] = React.useState(null);
  const [originalProjects] = React.useState(projects || []);

  if (!projects || projects.length === 0) {
    return null;
  }

  // Filter projects based on selected tags, always using original projects
  const filteredProjects = originalProjects.filter(project => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every(tag => 
      project.tags.some(projectTag => 
        projectTag.toLowerCase().includes(tag.toLowerCase())
      )
    );
  });

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Handle demo actions
  const handlePlayDemo = (project, e) => {
    e.preventDefault();
    setActiveDemoProject(project);
    // Scroll to demo section after a brief delay to allow state update
    setTimeout(() => {
      const demoSection = document.getElementById('liveDemo');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const closeLiveDemo = () => {
    setActiveDemoProject(null);
  };

  // Demo control functions
  const startDemo = (projectId) => {
    console.log(`Starting demo for project ${projectId}`);
    
    // Find the project data
    const project = originalProjects.find(p => p.id === projectId);
    if (!project || !project.webDemo || project.webDemo.type !== 'unity') {
      console.error('Unity WebGL demo not configured for project:', projectId);
      return;
    }
    
    const canvas = document.getElementById(`unityCanvas-${projectId}`);
    const loading = document.getElementById(`loading-${projectId}`);
    const progressBar = document.getElementById(`progress-${projectId}`);
    const loadingText = document.getElementById(`loadingText-${projectId}`);
    const percentage = document.getElementById(`percentage-${projectId}`);
    
    if (!canvas) {
      console.error('Unity canvas not found');
      return;
    }
    
    // Show loading screen
    if (loading) loading.style.display = 'flex';
    
    // Load Unity WebGL build
    const buildUrl = `${project.webDemo.buildPath}/Build`;
    const buildName = project.webDemo.buildName;
    
    const script = document.createElement("script");
    script.src = `${buildUrl}/${buildName}.loader.js`;
    script.onload = () => {
      if (window.createUnityInstance) {
        const config = {
          dataUrl: `${buildUrl}/${buildName}.data`,
          frameworkUrl: `${buildUrl}/${buildName}.framework.js`,
          codeUrl: `${buildUrl}/${buildName}.wasm`,
          streamingAssetsUrl: "StreamingAssets",
          companyName: project.webDemo.companyName || "DefaultCompany",
          productName: project.webDemo.productName || "WebGL Game",
          productVersion: project.webDemo.productVersion || "1.0",
        };

        // Progress callback
        const progressCallback = (progress) => {
          const percent = Math.round(progress * 100);
          if (percentage) percentage.textContent = `${percent}%`;
          if (progressBar && progressBar.style) {
            progressBar.style.width = `${percent}%`;
          }
          if (loadingText && percent < 100) {
            loadingText.textContent = `Loading... ${percent}%`;
          }
        };

        window.createUnityInstance(canvas, config, progressCallback)
          .then((unityInstance) => {
            // Hide loading screen
            if (loading) loading.style.display = 'none';
            console.log('Unity WebGL loaded successfully');
            
            // Store instance for later use
            window[`unityInstance_${projectId}`] = unityInstance;
          })
          .catch((message) => {
            console.error('Unity WebGL load failed:', message);
            if (loadingText) loadingText.textContent = 'Failed to load game';
          });
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load Unity loader script');
      if (loadingText) loadingText.textContent = 'Failed to load game';
    };
    
    document.head.appendChild(script);
  };

  const toggleFullscreen = (projectId) => {
    const container = document.getElementById(`unityCanvas-${projectId}`)?.parentElement;
    if (container) {
      if (!document.fullscreenElement) {
        container.requestFullscreen?.() || 
        container.webkitRequestFullscreen?.() || 
        container.mozRequestFullScreen?.();
      } else {
        document.exitFullscreen?.() || 
        document.webkitExitFullscreen?.() || 
        document.mozCancelFullScreen?.();
      }
    }
  };

  return (
    <section className="featured-projects" id="projects">
      <Container>
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p className="lead">Showcasing impactful mobile game development and performance optimization work</p>
        </div>

        {/* Core Tag Filters */}
        {coreTagFilters && coreTagFilters.length > 0 && (
          <div className="tag-filters mb-4">
            <div className="text-center">
              <div className="filter-tags">
                {coreTagFilters.map((tag, index) => (
                  <button
                    key={index}
                    className={`filter-tag ${selectedTags.includes(tag) ? 'active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTags.length > 0 && (
                  <button
                    className="filter-tag clear-all"
                    onClick={() => setSelectedTags([])}
                  >
                    <i className="fas fa-times me-2"></i>Clear All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        
        <Row>
          {filteredProjects.map((project, index) => (
            <Col key={project.id} lg={6} className="mb-4">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`tag ${selectedTags.includes(tag) ? 'highlighted' : ''}`}
                      >
                        {tag}
                      </span>
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
                      <button 
                        onClick={(e) => handlePlayDemo(project, e)}
                        className="btn-outline-custom"
                      >
                        <i className="fas fa-play me-2"></i>Play Demo
                      </button>
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

        {filteredProjects.length === 0 && selectedTags.length > 0 && (
          <div className="no-results text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4>No projects match the selected tags</h4>
            <p className="text-muted">Try selecting different tags or clear all filters</p>
          </div>
        )}
        
        {/* Dynamic Live Demo Section */}
        {activeDemoProject && (
          <Row className="mt-5" id="liveDemo">
            <Col xs={12}>
              <div className="demo-section">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <i className={`${activeDemoProject.demoConfig?.icon || getProjectIcon(activeDemoProject.tags[0])} fa-2x text-primary me-3`}></i>
                    <div>
                      <h3 className="mb-1">
                        {activeDemoProject.demoConfig?.title || `${activeDemoProject.title} - Live Demo`}
                      </h3>
                      <p className="text-muted mb-0">
                        {activeDemoProject.demoConfig?.description || "Experience the project features in your browser"}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={closeLiveDemo}
                    className="btn btn-outline-secondary btn-sm"
                    title="Close Demo"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                {/* Web Demo Content */}
                {activeDemoProject.webDemo ? (
                  <div className="web-demo-container">
                    {activeDemoProject.webDemo.type === 'unity' && (
                      <div className="unity-webgl-container">
                        <canvas 
                          id={`unityCanvas-${activeDemoProject.id}`} 
                          style={{
                            width: activeDemoProject.webDemo.width || 960,
                            height: activeDemoProject.webDemo.height || 600,
                            background: '#222C36'
                          }}
                        >
                        </canvas>
                        <div className="demo-loading" id={`loading-${activeDemoProject.id}`}>
                          <div className="loading-bar">
                            <div className="loading-progress" id={`progress-${activeDemoProject.id}`}></div>
                          </div>
                          <p id={`loadingText-${activeDemoProject.id}`}>
                            {activeDemoProject.webDemo.loadingText || `Loading ${activeDemoProject.title}...`}
                          </p>
                          <div className="loading-percentage" id={`percentage-${activeDemoProject.id}`}>0%</div>
                        </div>
                      </div>
                    )}
                    {activeDemoProject.webDemo.type === 'iframe' && (
                      <iframe 
                        src={activeDemoProject.webDemo.url}
                        width="100%" 
                        height={activeDemoProject.webDemo.height || 600}
                        frameBorder="0"
                        allowFullScreen
                        title={`${activeDemoProject.title} Demo`}
                      />
                    )}
                    {activeDemoProject.webDemo.type === 'video' && (
                      <video 
                        width="100%" 
                        height={activeDemoProject.webDemo.height || 400}
                        controls 
                        poster={activeDemoProject.webDemo.poster}
                      >
                        <source src={activeDemoProject.webDemo.url} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                    )}
                  </div>
                ) : (
                  // Placeholder demo section
                  <div className="demo-placeholder">
                    <div>
                      <i className={`${activeDemoProject.demoConfig?.icon || getProjectIcon(activeDemoProject.tags[0])} fa-3x mb-3`}></i>
                      <p>{activeDemoProject.demoConfig?.placeholderTitle || `${activeDemoProject.title} Demo`}</p>
                      <small>{activeDemoProject.demoConfig?.tech || "Unity WebGL Build • Optimized Performance"}</small>
                    </div>
                  </div>
                )}
                
                <div className="demo-controls">
                  {activeDemoProject.webDemo && (
                    <>
                      <button className="btn-primary-custom" onClick={() => startDemo(activeDemoProject.id)}>
                        <i className="fas fa-play me-2"></i>
                        {activeDemoProject.demoConfig?.startText || activeDemoProject.webDemo.startText || "Start Demo"}
                      </button>
                      <button className="btn-outline-custom" onClick={() => toggleFullscreen(activeDemoProject.id)}>
                        <i className="fas fa-expand me-2"></i>Fullscreen
                      </button>
                    </>
                  )}
                  {activeDemoProject.githubUrl && (
                    <a 
                      href={activeDemoProject.githubUrl} 
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
                
                {(activeDemoProject.demoConfig?.features || activeDemoProject.demoFeatures) && (
                  <div className="mt-3">
                    <small className="text-muted">
                      <strong>Demo Features:</strong> {
                        (activeDemoProject.demoConfig?.features || activeDemoProject.demoFeatures).join(", ")
                      }
                    </small>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        )}

        {/* Legacy Demo Sections - Keep for backward compatibility */}
        {filteredProjects.filter(p => p.demoUrl && p.demoUrl.startsWith('#')).map(project => {
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


export default FeaturedProjects;
