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
  message: " Senior Unity Developer passionate about creating immersive gaming experiences. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/yuankunhuang",
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
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "../editable-stuff/yuankunhuang.jpg",
  imageSize: 375,
  message:
    "I'm Yuankun Huang, a Senior Unity Developer at IGG Canada with 5+ years of professional experience in game development. I specialize in mobile game development and have a Master's degree from Centre for Digital Media. My expertise spans Unity, C#, C++, and cross-platform game programming. I'm passionate about creating engaging gaming experiences and continuously expanding my technical skills through professional certifications and hands-on development.",
  resume: "../editable-stuff/resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "yuankunhuang",
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
    { name: "C++", value: 85 },
    { name: "Mobile Game Development", value: 90 },
    { name: "Unreal Engine", value: 75 },
    { name: "Cross-platform Development", value: 85 },
    { name: "Game Programming", value: 90 },
    { name: "Software Architecture", value: 80 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Team Collaboration", value: 85 },
    { name: "Project Management", value: 80 },
    { name: "Technical Leadership", value: 85 },
    { name: "Continuous Learning", value: 95 },
    { name: "Communication", value: 80 },
    { name: "Adaptability", value: 90 },
    { name: "Creative Thinking", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm open to exciting opportunities in game development, Unity programming, and mobile game projects. Whether you're looking for a senior developer or want to discuss innovative gaming solutions, feel free to reach out at",
  email: "buptforeverbean@gmail.com",
};

const experiences = {
  show: true,
  heading: "Professional Experience",
  data: [
    {
      role: 'Senior Unity Developer - IGG Canada',
      companylogo: '../editable-stuff/igg.png',
      date: '2021 - Present',
    },
    {
      role: 'Master\'s Degree - Centre for Digital Media',
      companylogo: '../editable-stuff/cdm.png',
      date: '2019 - 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
