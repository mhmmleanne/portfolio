/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to  the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Iris",
  title: "Hi, I'm Iris!",
  subTitle: emoji(
    "I'm an aspiring UI/UX designer, and currently a 2nd year student studying Computer Science and Design at Singapore University of Technology and Design. I'm enthuastic about all things front-end and have experience in designing and developing web and mobile applications using languages such as html/css/java/python."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PUpab6GkUCm2q1iPAbOsn1SY7-qctj83/view",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mhmmleanne",
  linkedin: "https://www.linkedin.com/in/iris-chan-359406333/",
  gmail: "irischan2512@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle: "I've got experience with these",
  skills: [
    emoji("⚡ Developed highly interactive User Interfaces for mobile applications"),
    emoji("⚡ Integration of third party services such as Firebase")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },      
    { skillName: "figma", fontAwesomeClassname: "fab fa-figma" },    
    { skillName: "android", fontAwesomeClassname: "fab fa-android" },
    { skillName: "javascript", fontAwesomeClassname: "fab fa-js" }
  ],
    display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Singapore University of Technology and Design",
      logo: require("./assets/images/sutdLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Design",
      duration: "September 2023 - Present",
      desc: "A current student interested in UI/UX and front-end development.",
      descBullets: [
        "Focused on front-end and user-centered design",
        "Experience with project-based learning"
      ]
    }
  ]
};

// Tech Stack

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "40%" },
    { Stack: "Programming", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false,
  experience: []
};

const bigProjects = {
  title: "Project Showcase",
  subtitle: "My proudest design & development work.",
  projects: [
    {
      image: require("./assets/images/infosysofficial.png"),
      projectName: "Split!!Mate",
      projectDesc:
        "Android application project made for SUTD 50.001 Course (Introduction to Information Systems and Programming), where we created a bill-splitting application focused on accessible, friendly, user-centric design.",
      video: "https://youtu.be/zOWOIVzH-Z4",
      writeUp: `Created from March 13 2025  - 16 April 2025
Managing shared expenses among friends, roommates, couples, or family members is a common yet frustrating challenge. Whether splitting rent, groceries, travel costs, or dinner bills, people struggle with:
• Uneven spending – Not everyone pays equally, leading to complex IOUs and mental math.
• Awkwardness in asking for money – People forget who owes whom, creating tension and discomfort.
• Manual tracking – Relying on spreadsheets, paper receipts, or memory is error-prone and time-consuming.

Recognizing this pain point, we decided to create a solution that simplifies expense-sharing, eliminates awkwardness, and ensures fairness—so you can focus on enjoying time with your friends rather than worrying about who paid last.

Iris' Contributions:
• Sole UI/UX designer and front-end developer for the project
• Designed initial prototypes and user flows using Figma, and iteratively refined them based on feedback
• Developed all XML layout files in Android Studio to build the app's front-end structure
• Built and tested all UI features with dummy data before backend integration
• Designed a user flow that addresses gaps in existing apps like Splitwise by enabling bill-splitting *by item*, and including automated GST calculations.`,
      footerLink: [
        {
          name: "SplitMate Github Repo",
          url: "https://github.com/NoelRook/PaisehPay/tree/master"
        },
        {
          name: "Figma Design",
          url: "https://www.figma.com/design/DN1PMK705YtHkj6I3FC0j6/PSP-UI"
        }
      ]
    },
    {
      projectName: "That Time I spilled Kaya Toast on my Shirt",
      projectDesc:
        "Game designed for SUTD Computational Thinking and Design Course, a short 'day in the life of' game featuring several of my classmates",
      video: "https://youtu.be/pgFEpCB6Vwk",
      writeUp: `Created from Nov - Dec 2023
Users can make decisions throughout the day which can then impact the final outcome of the day. Designed using only Python and Tkinter.

Iris' Contributions:
• Solo Full Stack Developer, created the game with minimal programming and design experience.`,
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/mhmmleanne/CTD_1D_Project"
        }
      ]
    }
  ],
  display: true
};



// Open Source

const openSource = {
  showGithubProfile: "true",
  display: false
};


const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+65-90951041",
  email_address: "irischan2512@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  resumeSection
};
