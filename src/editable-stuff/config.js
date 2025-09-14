// ========================================
// PORTFOLIO CONFIGURATION FILE
// ========================================
// This file controls all content on your portfolio website.
// Simply edit the values below to update your portfolio instantly!
// 
// 🎯 QUICK EDITING GUIDE:
// - Text content: Change values in quotes "like this"
// - Lists: Add/remove items in brackets ["item1", "item2"] 
// - Show/hide sections: Change 'true' to 'false'
// - Links: Update URLs in quotes
// - Images: Replace file names (ensure files exist in editable-stuff/)
//
// 🚀 NO CODING REQUIRED - Just edit and save!
// ========================================

// Navigation Bar SECTION
const navBar = {
  show: true, // Set to false to hide navigation
};

// ========================================
// HERO SECTION (封面区域)
// ========================================
const mainBody = {
  // Background gradient colors
  gradientColors: "#667eea, #764ba2", // Change these hex colors for different gradient
  
  // Your name (将显示在大标题)
  firstName: "Yuankun",
  middleName: "", // Leave empty if no middle name
  lastName: "Huang",
  
  // Typewriter message (打字机效果的个人介绍)
  message: "Senior Unity Engineer crafting robust mobile gaming experiences with expertise in performance optimization and system architecture.",
  
  // Social media icons (社交媒体图标)
  // Available icons: fa-github, fa-linkedin, fa-twitter, fa-instagram, fa-facebook, etc.
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/YuankunHuang",
    },
    {
      image: "fa-linkedin", 
      url: "https://www.linkedin.com/in/yuankun-huang/",
    },
    // Add more social links here:
    // {
    //   image: "fa-twitter",
    //   url: "https://twitter.com/yourusername",
    // },
  ],
};

// ========================================
// ABOUT ME SECTION (关于我)
// ========================================
const about = {
  show: true, // Set to false to hide this section
  heading: "About Me", // Section title
  
  // Profile image (个人照片)
  imageLink: require("../editable-stuff/profile.png"), // Update filename if needed
  
  // About me text (个人简介)
  message:
    "I'm Yuankun, a Senior Unity Engineer with 5+ years of experience shipping and operating large-scale mobile games. At IGG Canada, I've been a core contributor to Mythic Heroes (10M+ downloads, 4.5★ rating) and led UI framework redesigns that reduced development time by 30% and improved performance by 20%. I specialize in performance optimization, hot-update systems, and developer tooling. Currently expanding my expertise into Unreal Engine and advanced C++ development, always excited to explore cutting-edge game technologies. When not coding, you'll find me composing orchestral music or playing badminton.",
  
  // Resume/CV file (简历文件)
  resume: require("../editable-stuff/resume.pdf"), // Update filename if needed
  
  // Statistics (统计数据) - Easy to modify
  stats: [
    { number: "5+", label: "Years Experience" },
    { number: "10M+", label: "Game Downloads" },
    { number: "3", label: "Major Projects" },
    { number: "IGG", label: "Current Company" }
    // Add more stats:
    // { number: "50+", label: "GitHub Repos" },
  ],
  
  // Skills tags (技能标签) - Add/remove as needed
  skills: [
    "Unity Engine", 
    "C#", 
    "Mobile Game Development", 
    "Performance Optimization", 
    "UI Architecture", 
    "HybridCLR/ILRuntime",
    "System Design", 
    "Developer Tooling"
    // Add new skills:
    // "Unreal Engine",
    // "C++",
    // "Shader Programming",
  ]
};

// ========================================
// FEATURED PROJECTS SECTION (精选项目)
// ========================================
// 🎮 ADDING NEW PROJECTS:
// 1. Copy a project object and paste it below
// 2. Update id to next number (4, 5, etc.)
// 3. Fill in your project details
// 4. Add project image to editable-stuff/ folder
// 5. Save and your project appears instantly!

// 🎯 DEMO OPTIONS:
// - demoUrl: "#demoId" = Embedded demo section
// - demoUrl: "https://..." = External link
// - githubUrl: GitHub repository link
// - detailsModal: Modal popup (for future enhancement)

const featuredProjects = [
  {
    id: 1,
    title: "Mythic Heroes - Mobile RPG",
    description: "Led performance optimization and UI architecture for this successful mobile RPG with 10M+ downloads. Implemented advanced memory management and rendering optimizations.",
    image: "/api/placeholder/400/300", // Replace with actual image path
    
    // Project tags (项目标签) - Add/remove/modify as needed
    tags: ["Unity", "Mobile", "Idle RPG"],
    
    // Achievement highlights (成就亮点)
    highlights: [
      "10M+ Downloads Achieved",
      "60 FPS Performance Optimized", 
      "30% Development Time Reduced",
      "ILRuntime & HybridCLR Hotfix Integration"
      // Add more highlights:
      // "Awards Won",
      // "Team Size: 15+",
    ],
    
    // Demo and links (演示和链接)
    demoUrl: "#mythicDemo", // "#demoId" for embedded demo, "https://..." for external
    // githubUrl: "https://github.com/yourusername/repo", // Uncomment if public
    
    // Optional project website (可选项目网站)
    projectUrl: "https://mythicheroes.com", // Official website, press coverage, etc.
    projectUrlLabel: "Official Website", // Button text
    
    detailsModal: "mythicModal",
    status: "shipped" // shipped, active, research
  },
  {
    id: 2,
    title: "Unity Performance Analyzer",
    description: "Custom Unity Editor tools for real-time performance monitoring and optimization. Helps development teams identify and fix performance bottlenecks efficiently.",
    image: "/api/placeholder/400/300",
    tags: ["Unity", "Tools", "Editor"],
    highlights: [
      "Real-time Profiling",
      "Memory Leak Detection", 
      "Automated Reports",
      "70% Designer Self-Service"
    ],
    githubUrl: "https://github.com/YuankunHuang",
    detailsModal: "toolsModal",
    status: "active"
  },
  {
    id: 3,
    title: "HIVE Rehab - Gesture Training",
    description: "Leap Motion neuro-rehabilitation game with gesture-driven training loops and clinical data logging for stroke recovery research.",
    image: "/api/placeholder/400/300", 
    tags: ["Unity", "Healthcare", "Leap Motion"],
    highlights: [
      "< 20ms Interaction Latency",
      "Clinical Data Export",
      "Patient-Mode UI",
      "50% Study Cost Reduction"
    ],
    githubUrl: "https://github.com/YuankunHuang/HIVE-Rehab-Project",
    detailsModal: "hiveModal",
    status: "research"
  }
];

// RESEARCH SECTION
const research = {
  show: true,
  heading: "Research & Exploration", 
  subtitle: "Current learning projects and technical explorations",
  projects: [
    {
      title: "Unreal Engine 5 Exploration",
      status: "learning",
      icon: "fas fa-cube",
      description: "Diving deep into UE5's new features including Nanite virtualized geometry, Lumen global illumination, and Blueprint visual scripting. Building small prototypes to understand the engine's architecture.",
      tags: ["Unreal Engine 5", "Blueprint", "Nanite", "Lumen"]
    },
    {
      title: "Advanced C++ Patterns", 
      status: "exploring",
      icon: "fas fa-code",
      description: "Studying modern C++ design patterns, memory management techniques, and performance optimization strategies. Focus on game engine architecture and real-time systems.",
      tags: ["C++20", "Memory Management", "Design Patterns", "Performance"]
    },
    {
      title: "AI Integration in Games",
      status: "prototype", 
      icon: "fas fa-brain",
      description: "Experimenting with AI-driven game mechanics, procedural content generation, and intelligent NPC behavior systems using machine learning techniques.",
      tags: ["Machine Learning", "Procedural Generation", "AI Behavior", "Unity ML-Agents"]
    },
    {
      title: "Cross-Platform Optimization",
      status: "exploring",
      icon: "fas fa-mobile-alt", 
      description: "Researching advanced techniques for optimizing games across multiple platforms, including mobile, console, and PC. Focus on shader optimization and rendering pipelines.",
      tags: ["Shader Optimization", "Mobile Performance", "Rendering Pipeline", "Cross-Platform"]
    }
  ]
};

// BLOG SECTION
const blog = {
  show: true,
  heading: "Personal Blog",
  subtitle: "Sharing insights, tutorials, and thoughts on game development", 
  description: "I regularly write about Unity development, performance optimization techniques, C# programming insights, and my learning journey in game development. Topics range from technical deep-dives to career reflections.",
  tags: ["Unity Tips", "Performance", "C# Patterns", "Career Insights"],
  url: "https://yuque.com", // Replace with actual Yuque blog URL
  icon: "fas fa-pen-fancy"
};

// Legacy repos config for backward compatibility
const repos = {
  show: false, // Hide legacy GitHub repos section  
  heading: "Recent Projects",
  gitHubUsername: "YuankunHuang",
  reposLength: 0,
  specificRepos: [],
};

// SKILLS SECTION - Simplified
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Unity Engine", value: 95 },
    { name: "C#", value: 90 },
    { name: "Mobile Game Development", value: 90 },
    { name: "Performance Optimization", value: 95 },
    { name: "UI Architecture", value: 85 },
    { name: "HybridCLR/ILRuntime", value: 80 },
    { name: "C++", value: 75 },
    { name: "Unreal Engine", value: 60 },
  ],
  softSkills: [
    { name: "Technical Leadership", value: 85 },
    { name: "System Design", value: 90 },
    { name: "Code Architecture", value: 85 },
    { name: "Mentoring", value: 80 },
    { name: "Problem Solving", value: 90 },
    { name: "Continuous Learning", value: 95 },
    { name: "Team Collaboration", value: 85 },
    { name: "Communication", value: 80 },
  ],
};

// CONTACT SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  subtitle: "I enjoy connecting with fellow developers and exploring collaboration opportunities",
  message: "Whether you're interested in discussing Unity architecture, performance optimization techniques, or have an interesting project idea, I'd love to hear from you!",
  email: "buptforeverbean@gmail.com",
  phone: "1-236-868-8713",
  location: "Vancouver, BC, Canada",
  contacts: [
    {
      type: "Email",
      icon: "fas fa-envelope", 
      description: "Drop me a line anytime",
      value: "buptforeverbean@gmail.com",
      action: "mailto:buptforeverbean@gmail.com"
    },
    {
      type: "LinkedIn",
      icon: "fab fa-linkedin",
      description: "Let's connect professionally", 
      value: "Connect on LinkedIn",
      action: "https://www.linkedin.com/in/yuankun-huang/"
    },
    {
      type: "GitHub", 
      icon: "fab fa-github",
      description: "Check out my code",
      value: "View Projects", 
      action: "https://github.com/YuankunHuang"
    }
  ]
};

// Legacy experiences config
const experiences = {
  show: false, // Hide legacy experience section, now integrated into about/featured projects
  heading: "Professional Experience", 
  data: []
};

export { 
  navBar, 
  mainBody, 
  about, 
  featuredProjects,
  research,
  blog,
  repos, // Keep for backward compatibility
  skills, 
  getInTouch, 
  experiences // Keep for backward compatibility
};
