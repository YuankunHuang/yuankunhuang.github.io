# 🚀 Portfolio Configuration Guide

## 📖 Overview
This guide shows you how to easily customize your portfolio website by editing just the `config.js` file. No coding knowledge required!

## 🎯 Quick Start
1. Open `src/editable-stuff/config.js`
2. Edit the values you want to change
3. Save the file
4. Run `npm run deploy` to publish changes

## 📝 Content Management

### 🏠 Hero Section (封面区域)
```javascript
const mainBody = {
  gradientColors: "#667eea, #764ba2", // Background gradient colors
  firstName: "Your",
  lastName: "Name",
  message: "Your tagline or professional summary here",
  icons: [
    { image: "fa-github", url: "https://github.com/yourusername" },
    { image: "fa-linkedin", url: "https://linkedin.com/in/yourusername" }
  ]
};
```

**Available Social Icons:**
- `fa-github`, `fa-linkedin`, `fa-twitter`, `fa-instagram`, `fa-facebook`
- `fa-youtube`, `fa-twitch`, `fa-discord`, `fa-telegram`

### 👤 About Me Section
```javascript
const about = {
  show: true, // Set to false to hide section
  message: "Your detailed bio here...",
  resume: require("../editable-stuff/resume.pdf"), // Update filename
  stats: [
    { number: "5+", label: "Years Experience" },
    // Add more stats as needed
  ],
  skills: [
    "Skill 1", "Skill 2", "Skill 3"
    // Add/remove skills easily
  ]
};
```

### 🎮 Featured Projects

#### Adding a New Project
```javascript
{
  id: 4, // Next available ID
  title: "Your Project Name",
  description: "Project description...",
  image: "/path/to/project-image.png", // Add image to editable-stuff/
  tags: ["Unity", "Mobile", "RPG"], // Technology tags
  highlights: [
    "Achievement 1",
    "Achievement 2",
    "Key Metric"
  ],
  
  // DEMO OPTIONS:
  demoUrl: "#projectDemo", // For embedded demo
  // OR
  demoUrl: "https://external-demo-link.com", // For external demo
  
  githubUrl: "https://github.com/user/repo", // Optional
  
  // PROJECT LINKS (额外项目链接) - NEW FEATURE!
  projectLinks: [
    {
      type: "website",           // Button style type
      label: "Official Website", // Button text
      url: "https://your-game.com", // Link URL
      icon: "fas fa-globe"       // FontAwesome icon
    },
    {
      type: "store",
      label: "Download on App Store",
      url: "https://apps.apple.com/app/your-game",
      icon: "fab fa-apple"
    },
    {
      type: "press",
      label: "Press Coverage",
      url: "https://news-site.com/your-game-review",
      icon: "fas fa-newspaper"
    }
    // Add more links as needed
  ],
  
  status: "shipped" // shipped, active, research
}
```

#### Project Link Types & Colors
- **`website`**: Blue primary button for official websites
- **`store`**: Green button for app stores (Apple, Google Play, Steam)
- **`press`**: Light blue button for press coverage and reviews
- **`documentation`**: Gray button for technical documentation
- **`blog`**: Orange button for development blogs
- **`video`**: Red button for video content (YouTube, Vimeo)
- **`social`**: Outline button for social media links

#### Common Icons for Project Links
```javascript
// Website & Store Icons
"fas fa-globe"        // Website
"fab fa-apple"        // App Store
"fab fa-google-play"  // Google Play
"fab fa-steam"        // Steam
"fas fa-shopping-cart" // General store

// Media & Press Icons  
"fas fa-newspaper"    // Press coverage
"fab fa-youtube"      // YouTube
"fas fa-video"        // Video content
"fas fa-camera"       // Screenshots
"fas fa-images"       // Gallery

// Documentation & Code
"fas fa-book"         // Documentation
"fas fa-file-alt"     // Articles
"fab fa-github"       // GitHub
"fas fa-code"         // Source code
"fas fa-download"     // Downloads
```

#### Web Demo Integration
For interactive demos, add a `webDemo` object:

```javascript
// Unity WebGL Demo
webDemo: {
  type: 'unity',
  width: 960,
  height: 600,
  startText: "Play Game",
  buildPath: "/demos/your-unity-build/"
}

// Iframe Demo  
webDemo: {
  type: 'iframe',
  url: "https://your-demo-url.com",
  height: 500
}

// Video Demo
webDemo: {
  type: 'video',
  url: "/demos/project-demo.mp4",
  poster: "/demos/video-thumbnail.png",
  height: 400
}
```

### 🔬 Research Section
```javascript
const research = {
  show: true,
  projects: [
    {
      title: "Research Topic",
      status: "learning", // learning, exploring, prototype
      icon: "fas fa-brain", // FontAwesome icon
      description: "What you're researching...",
      tags: ["Technology", "Framework", "Tool"]
    }
  ]
};
```

### ✉️ Contact Section
```javascript
const getInTouch = {
  show: true,
  contacts: [
    {
      type: "Email",
      icon: "fas fa-envelope",
      description: "Drop me a line",
      value: "your@email.com",
      action: "mailto:your@email.com"
    }
  ]
};
```

## 📁 File Management

### Adding Images
1. Add images to `src/editable-stuff/` folder
2. Update config references:
   ```javascript
   imageLink: require("../editable-stuff/your-image.png")
   ```

### Adding Documents
1. Add PDFs to `src/editable-stuff/` folder
2. Reference in config:
   ```javascript
   resume: require("../editable-stuff/your-resume.pdf")
   ```

## 🎨 Customization Options

### Show/Hide Sections
Set `show: false` for any section you don't want:
```javascript
const about = { show: false }; // Hides entire About section
```

### Colors & Styling
- Hero gradient: Change `gradientColors` in `mainBody`
- The CSS automatically adapts to your content

### Project Tags & Icons
Available project icons are automatically mapped:
- "Unity" → Game controller icon
- "Mobile" → Mobile phone icon  
- "Tools" → Tools icon
- "Healthcare" → Heart icon
- "Web" → Globe icon
- "AI" → Brain icon
- "VR" → VR headset icon

## 🚀 Deployment
After making changes:
```bash
npm run build    # Test locally
npm run deploy   # Publish to GitHub Pages
```

## 📞 Need Help?
- All changes are made in `config.js` - no other files needed
- If something breaks, check the browser console for errors  
- Make sure all quotes and brackets match correctly
- Keep the file structure intact when adding new items

## 🎯 Pro Tips
- **Testing**: Use `npm run build` to test locally before deploying
- **Backup**: Keep a copy of working config before major changes
- **Images**: Optimize images for web (PNG/JPG, < 1MB) for faster loading
- **Demos**: Test demo links work before publishing

---
Happy customizing! 🎉