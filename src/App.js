import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  featuredProjects,
  tools,
  research,
  blog,
  repos,  // Keep for backward compatibility
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import FeaturedProjects from "./components/home/FeaturedProjects";
import Tools from "./components/home/Tools";
import Research from "./components/home/Research";
import BlogSection from "./components/home/BlogSection";
import Project from "./components/home/Project";  // Legacy component
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      {/* Hero Section */}
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      
      {/* About Me Section */}
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          stats={about.stats}
          skills={about.skills}
          resume={about.resume}
        />
      )}
      
      {/* Featured Projects Section */}
      {featuredProjects && featuredProjects.length > 0 && (
        <FeaturedProjects 
          projects={featuredProjects} 
          coreTagFilters={tools.coreTagFilters}
        />
      )}
      
      {/* Tools Section */}
      {tools.show && (
        <Tools
          heading={tools.heading}
          subtitle={tools.subtitle}
          projects={tools.projects}
          coreTagFilters={tools.coreTagFilters}
        />
      )}
      
      {/* Research Section */}
      {research.show && (
        <Research
          heading={research.heading}
          subtitle={research.subtitle}
          projects={research.projects}
        />
      )}
      
      {/* Skills Section - keeping for detailed skills display */}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
      {/* Blog Section */}
      {blog.show && (
        <BlogSection
          heading={blog.heading}
          subtitle={blog.subtitle}
          description={blog.description}
          tags={blog.tags}
          url={blog.url}
          icon={blog.icon}
        />
      )}
      
      {/* Legacy Experience Section - keep if still needed */}
      {experiences.show && (
        <Experience experiences={experiences}/>
      )}
      
      {/* Legacy Projects Section - fallback if no featured projects */}
      {repos.show && !featuredProjects.length && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      {/* Contact Section - moved outside footer for better layout */}
      {getInTouch.show && (
        <GetInTouch
          heading={getInTouch.heading}
          subtitle={getInTouch.subtitle}
          message={getInTouch.message}
          contacts={getInTouch.contacts}
        />
      )}
      
      <Footer />
      
    </BrowserRouter>
  );
};

export default App;
