import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tools = ({ heading, subtitle, projects, coreTagFilters = [] }) => {
  const [selectedTags, setSelectedTags] = React.useState([]);

  if (!projects || projects.length === 0) {
    return null;
  }

  const getStatusClass = (status) => {
    const statusMap = {
      "active": "status-active",
      "prototype": "status-prototype", 
      "exploring": "status-exploring"
    };
    return statusMap[status] || "status-active";
  };

  const getStatusText = (status) => {
    const textMap = {
      "active": "Active",
      "prototype": "Prototype",
      "exploring": "Exploring"
    };
    return textMap[status] || "Active";
  };

  // Filter projects based on selected tags
  const filteredProjects = projects.filter(project => {
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

  return (
    <section className="tools-section" id="tools">
      <Container>
        <div className="section-title">
          <h2>{heading}</h2>
          <p className="lead">{subtitle}</p>
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
          {filteredProjects.map((tool, index) => (
            <Col key={index} md={6}>
              <div className="tools-item">
                <div className="tools-title">
                  <div className="tools-icon">
                    <i className={tool.icon}></i>
                  </div>
                  {tool.title}
                  <span className={`tools-status ${getStatusClass(tool.status)}`}>
                    {getStatusText(tool.status)}
                  </span>
                </div>
                <p className="tools-description">
                  {tool.description}
                </p>
                {tool.features && tool.features.length > 0 && (
                  <div className="tools-features mb-3">
                    {tool.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-item">
                        <i className="fas fa-check me-2"></i>
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
                <div className="tools-tags">
                  {tool.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`tools-tag ${selectedTags.includes(tag) ? 'highlighted' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {tool.githubUrl && (
                  <div className="tools-actions mt-3">
                    <a 
                      href={tool.githubUrl} 
                      target="_blank" 
                      rel="noreferrer noopener" 
                      className="btn-outline-custom"
                    >
                      <i className="fab fa-github me-2"></i>View Source
                    </a>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>

        {filteredProjects.length === 0 && selectedTags.length > 0 && (
          <div className="no-results text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4>No tools match the selected tags</h4>
            <p className="text-muted">Try selecting different tags or clear all filters</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Tools;