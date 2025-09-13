// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yuankun",
  middleName: "",
  lastName: "Huang",
  message: " Unity Developer specializing in mobile game architecture and performance optimization. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/YuankunHuang",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yuankun-huang/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/profile.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/yuankunhuang.jpg"),
  imageSize: 375,
  message:
    "I'm Yuankun, a Unity developer focused on crafting robust mobile gaming experiences. Over the past 5+ years at IGG Canada, I've contributed to Mythic Heroes and other projects, specializing in performance optimization, UI architecture, and developer tooling. I believe great games emerge from the intersection of solid engineering and thoughtful design. Currently expanding my expertise into Unreal Engine and advanced C++ development, always excited to explore cutting-edge game technologies. When not coding, you'll find me composing music or playing badminton. I'm always open to meaningful conversations about game development and creative collaboration.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "YuankunHuang",
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Unity Engine", value: 95 },
    { name: "C#", value: 90 },
    { name: "Mobile Game Development", value: 90 },
    { name: "Performance Optimization", value: 85 },
    { name: "UI Architecture", value: 85 },
    { name: "HybridCLR/ILRuntime", value: 80 },
    { name: "C++", value: 75 },
    { name: "Unreal Engine", value: 60 },
  ],
  softSkills: [
    { name: "Technical Mentoring", value: 85 },
    { name: "System Design", value: 80 },
    { name: "Code Architecture", value: 85 },
    { name: "Knowledge Sharing", value: 80 },
    { name: "Problem Solving", value: 90 },
    { name: "Continuous Learning", value: 90 },
    { name: "Team Collaboration", value: 85 },
    { name: "Adaptability", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I enjoy connecting with fellow developers, sharing insights about mobile game development, and exploring collaborative opportunities. Whether you're interested in discussing Unity architecture, performance optimization techniques, or have an interesting project idea, I'd love to hear from you at",
  email: "buptforeverbean@gmail.com",
};

const experiences = {
  show: true,
  heading: "Professional Experience",
  data: [
    {
      role: 'Senior Unity Developer - IGG Canada',
      companylogo: require('../editable-stuff/igg.png'),
      date: '2021 - Present',
    },
    {
      role: 'Master\'s Degree - Centre for Digital Media',
      companylogo: require('../editable-stuff/cdm.png'),
      date: '2019 - 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
