# Yuankun Huang - Portfolio ✨

Personal portfolio website showcasing game development projects and professional experience

**🚀 Live Site:** [YuankunHuang.github.io](https://YuankunHuang.github.io)

[![Portfolio Screenshot](/public/social-image.png)](https://YuankunHuang.github.io)

![GitHub stars](https://img.shields.io/github/stars/YuankunHuang/yuankunhuang.github.io?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/YuankunHuang/yuankunhuang.github.io?style=for-the-badge)](https://github.com/YuankunHuang/yuankunhuang.github.io/network)
[![GitHub license](https://img.shields.io/github/license/YuankunHuang/yuankunhuang.github.io?style=for-the-badge)](https://github.com/YuankunHuang/yuankunhuang.github.io/blob/master/LICENSE)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuankun-huang/)

## ✨ Features

- **Dynamic Tag Filtering** - Filter projects by Unity, C++, Mobile, XR, etc.
- **Interactive WebGL Demos** - Embedded Unity game demos
- **Responsive Design** - Optimized for all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Customizable Sections** - Easy-to-modify configuration system

## 🛠️ Technology Stack

- **Frontend:** React 18, Bootstrap 5, SCSS
- **Build Tools:** Create React App, Node.js
- **Deployment:** GitHub Pages
- **APIs:** GitHub API for dynamic content

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/en/) (>= 22.12.0)
- [Git](https://git-scm.com/)
- GitHub account

### Installation

1. **Fork and Clone**
   ```bash
   git clone https://github.com/<your-username>/yuankunhuang.github.io.git
   cd yuankunhuang.github.io
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## ⚙️ Configuration Guide

All website content is configurable through the main configuration file. This guide shows you how to modify every aspect of your portfolio.

### 📍 Main Configuration File

**File:** `src/editable-stuff/config.js`

This single file controls all website content. Here's how to customize each section:

---

### 🏠 Navigation & Hero Section

```javascript
// Navigation Bar
const navBar = {
  show: true,
  links: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tools", href: "#tools" },
    { name: "Research", href: "#research" },
    { name: "Skills", href: "#skills" }
  ]
};

// Hero/Main Section
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Your",
  middleName: "Full",
  lastName: "Name",
  message: "Passionate about changing the world with technology.",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/yourusername"
    },
    {
      image: "fab fa-linkedin-in", 
      url: "https://www.linkedin.com/in/yourprofile"
    }
    // Add more social links
  ]
};
```

**How to modify:**
- Change your name in `firstName`, `middleName`, `lastName`
- Update `message` with your personal tagline
- Add/remove social icons in the `icons` array
- Customize gradient colors for the background

---

### 👤 About Me Section

```javascript
const about = {
  show: true,
  heading: "About Me",
  imageLink: "/path/to/your/photo.jpg", // Optional profile photo
  imageSize: 375,
  message: "Your detailed professional biography goes here. Talk about your experience, passion, and what drives you in your career.",
  resume: "/path/to/your/resume.pdf", // Link to your resume
  skills: ["Unity Development", "C# Programming", "Mobile Games", "Performance Optimization"]
};
```

**How to modify:**
- Update `heading` to change the section title
- Set `imageLink` to your profile photo path (put image in `public/` folder)
- Write your story in `message`
- Add your resume PDF to `public/` folder and update `resume` path
- List your key skills in the `skills` array

---

### 🎮 Featured Projects Section

```javascript
const featuredProjects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Detailed description of your project, its impact, and your role.",
    image: "/api/placeholder/400/300", // Project thumbnail
    tags: ["Unity", "Mobile", "C#"], // Technology tags
    highlights: [
      "Key Achievement 1",
      "Key Achievement 2", 
      "Key Achievement 3"
    ],
    
    // Demo Configuration (optional)
    demoConfig: {
      icon: "fas fa-gamepad",
      title: "Project Name - Live Demo",
      description: "Experience the project in your browser",
      placeholderTitle: "Project WebGL Build",
      tech: "Unity 2021.3 LTS • Optimized Performance",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      startText: "Start Demo",
      
      // For Unity WebGL demos
      webDemo: {
        type: "unity",
        buildPath: "/webgl-demos/your-project",
        buildName: "your-project-build",
        width: 960,
        height: 600,
        loadingText: "Loading your game...",
        companyName: "Your Company",
        productName: "Game Name",
        productVersion: "1.0"
      }
    },
    
    // External Links
    githubUrl: "https://github.com/yourusername/project",
    projectUrl: "https://yourproject.com",
    projectUrlLabel: "Visit Website",
    detailsModal: "projectModal1", // For detail popup
    status: "shipped" // shipped, active, research
  }
  // Add more projects...
];

// Core tags for filtering
const coreTagFilters = ["Unity", "Unreal", "C#", "C++", "Mobile", "XR", "Performance", "Tools"];
```

**How to modify:**
- **Add new project:** Copy the project object structure and fill in your details
- **Project thumbnail:** Add image to `public/` folder and update `image` path
- **Technology tags:** Add relevant technologies to `tags` array
- **Achievements:** List key accomplishments in `highlights`
- **Demo integration:** See [WebGL Integration Guide](#webgl-integration) below
- **Filter tags:** Modify `coreTagFilters` to match your technology stack

---

### 🔧 Tools & Utilities Section

```javascript
const tools = {
  show: true,
  heading: "Tools & Utilities",
  subtitle: "Development tools and utilities I've built",
  projects: [
    {
      title: "Tool Name",
      description: "What this tool does and why it's useful",
      tags: ["Unity", "Editor Tools", "C#"],
      status: "active", // active, prototype, exploring
      icon: "fas fa-tools",
      githubUrl: "https://github.com/yourusername/tool",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      category: "Development Tools"
    }
    // Add more tools...
  ],
  coreTagFilters: ["Unity", "Tools", "Automation"] // Same filtering system
};
```

---

### 🔬 Research & Exploration Section

```javascript
const research = {
  show: true,
  heading: "Research & Exploration",
  subtitle: "Current learning projects and technical investigations", 
  projects: [
    {
      title: "Research Topic",
      description: "What you're researching and why it matters",
      tags: ["New Technology", "Research"],
      status: "exploring",
      icon: "fas fa-search",
      progress: "In Progress", // Current status
      timeline: "2024 - Present"
    }
    // Add more research projects...
  ]
};
```

---

### 💪 Skills Section

```javascript
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Unity Development", value: 90 },
    { name: "C# Programming", value: 85 },
    { name: "Mobile Game Development", value: 80 }
    // Add more skills with proficiency levels (0-100)
  ],
  softSkills: [
    { name: "Team Leadership", value: 85 },
    { name: "Problem Solving", value: 90 }
    // Add soft skills
  ]
};
```

---

### 📝 Blog Section (Optional)

```javascript
const blog = {
  show: true, // Set to false to hide
  heading: "Recent Posts",
  subtitle: "Thoughts on game development and technology"
};
```

---

### 📞 Contact Section

```javascript
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "Whether you're interested in my work or have collaboration opportunities, I'd love to hear from you!",
  email: "your.email@example.com"
};
```

---

## 🎮 WebGL Integration Guide

To add Unity WebGL demos to your projects:

### 1. File Structure
```
public/
├── webgl-demos/
│   ├── your-project/
│   │   ├── Build/
│   │   │   ├── your-project.loader.js
│   │   │   ├── your-project.framework.js
│   │   │   ├── your-project.data
│   │   │   └── your-project.wasm
│   │   └── StreamingAssets/ (if needed)
```

### 2. Unity Build Settings
- **Platform:** WebGL
- **Compression:** Gzip (recommended)
- **Build file name:** Match `buildName` in config

### 3. Project Configuration
Add `webDemo` object to your project in `featuredProjects` array (see example above).

### 4. Demo Features
- ✅ Real-time loading progress
- ✅ Responsive canvas sizing
- ✅ Fullscreen support
- ✅ Error handling
- ✅ Mobile optimization

---

## 🎨 Visual Customization

### Colors and Themes
**File:** `src/scss/_variables.scss`

```scss
// Primary colors
:root {
  --primary-color: #667eea;
  --primary-light: #764ba2;
  --primary-dark: #1a202c;
  --bg-neutral: #f7fafc;
  --bg-white: #ffffff;
}
```

### Typography
**File:** `src/scss/_typography.scss`

```scss
// Font families
$font-primary: 'Inter', sans-serif;
$font-secondary: 'Roboto', sans-serif;

// Font sizes
$font-size-h1: 3rem;
$font-size-h2: 2.5rem;
```

### Layout and Spacing
**File:** `src/scss/_ui-enhancements.scss`

Modify section padding, margins, and responsive breakpoints.

---

## 🚀 Deployment

### GitHub Pages (Recommended)
1. **Set homepage in package.json:**
   ```json
   "homepage": "https://yourusername.github.io"
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

### Custom Domain
1. **Add CNAME file in public/:**
   ```
   yourdomain.com
   ```

2. **Configure DNS:**
   - Point your domain to GitHub Pages IPs
   - See [GitHub Pages documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 📁 File Structure

```
src/
├── components/
│   └── home/
│       ├── AboutMe.jsx          # About section
│       ├── FeaturedProjects.jsx # Projects with WebGL demos
│       ├── Tools.jsx            # Tools & utilities
│       ├── Research.jsx         # Research projects
│       ├── Skills.jsx           # Skills showcase
│       └── GetInTouch.jsx       # Contact section
├── editable-stuff/
│   ├── config.js               # 🎯 MAIN CONFIGURATION FILE
│   └── resume.pdf              # Your resume
├── scss/
│   ├── _variables.scss         # Colors and theme variables
│   ├── _typography.scss        # Font and text styles
│   └── _ui-enhancements.scss   # Layout and component styles
└── App.js                      # Main application component

public/
├── webgl-demos/               # Unity WebGL builds
├── images/                    # Your images and photos
├── resume.pdf                # Your resume (copy from src/editable-stuff/)
├── social-image.png          # Social sharing thumbnail
└── index.html                # Page metadata and title
```

---

## 🔧 Advanced Customization

### Adding New Sections
1. **Create component:** `src/components/home/NewSection.jsx`
2. **Add to config:** Define data structure in `config.js`
3. **Import in App.js:** Add import and JSX element
4. **Style:** Add CSS in `_ui-enhancements.scss`

### Custom Animations
**File:** `src/scss/_animations.scss`

```scss
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animated {
  animation: fadeInUp 0.6s ease-out;
}
```

### SEO Optimization
**File:** `public/index.html`

```html
<title>Your Name - Game Developer Portfolio</title>
<meta name="description" content="Your professional description for search engines" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="%PUBLIC_URL%/social-image.png" />
```

---

## 📞 Support

Questions about customization or need help with setup?

- **Email:** buptforeverbean@gmail.com
- **LinkedIn:** [Yuankun Huang](https://www.linkedin.com/in/yuankun-huang/)
- **Issues:** [Create a GitHub issue](https://github.com/YuankunHuang/yuankunhuang.github.io/issues)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with React • Deployed on GitHub Pages • Optimized for game developers*