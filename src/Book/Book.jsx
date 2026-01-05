import React, { useState, useEffect } from "react";
import styles from "./Book.module.css";
import Modal from "../Modal/modal";

import bookBg from "../assets/images/book.png";
import figma from "../assets/images/Figma.png";
import github from "../assets/images/GitHub.png";
import leftflip from "../assets/images/leftarrow.png";
import rightflip from "../assets/images/rightarrow.png";
import ctdVideo from "../assets/ctd/ctd_video.mp4";
import dtiPoster from "../assets/dti/dti_poster.png";
import dtiImage1 from "../assets/dti/dti_pt1_pg1.png";
import dtiImage2 from "../assets/dti/dti_pt1_pg2.png";
import infosysPoster from "../assets/infosys/infosys_poster.png";
import infosysVideo from "../assets/infosys/infosys_video.mp4";
import escImage1 from "../assets/esc/esc_1.png";
import escImage2 from "../assets/esc/esc_2.png";
import escImage3 from "../assets/esc/esc_3.png";
import escImage4 from "../assets/esc/esc_4.png";

import javascriptIcon from "../assets/images/javascript.png";
import javaIcon from "../assets/images/java.png";
import pythonIcon from "../assets/images/python.png";
import figmaIcon from "../assets/images/figmaicon.png";
import firebaseIcon from "../assets/images/firebase.png";
import mongodbIcon from "../assets/images/mongodb.png";
import reactIcon from "../assets/images/react.png";
import dockerIcon from "../assets/images/docker.png";
import tailwindIcon from "../assets/images/tailwind.png";
import nodeIcon from "../assets/images/nodejs.png";
import htmlIcon from "../assets/images/html.png";

const projects = [
  {
    id: "#001",
    name: "That Time I accidentally spilled Kaya Toast on my Shirt",
    role: "Solo Full Stack Developer",
    date: "Oct-Nov 2023",
    writeup: [
      "Developed a python-based simulation game with Tkinter UI modelling a SUTD student's daily routine",
      "Independently managed both frontend and backend, improving code structure and time management",
    ],
    tech: [pythonIcon],
    media: [{ src: ctdVideo, type: "video" }],
    figmaLink: null,
    githubLink: "https://github.com/mhmmleanne/CTD_1D_Project",
    intro:
      "This project was my first end-to-end full stack development experience, where I independently designed and built a Python-based simulation game modelling a student's daily routine. The focus was on experimenting with interface layout, interaction design, and translating creative ideas into a functional system under technical constraints.",
    experience:
      "I worked as a solo full stack developer, handling concept ideation, interface design, asset creation, and implementation. This included learning Tkinter from scratch, structuring the application logic, and building interactive UI components within a limited timeframe.",
    ux: [
      "Chose Tkinter as the UI framework due to Python-only constraints while still allowing for flexible layout and custom styling.",
      "Drew inspiration from side-scrolling dialogue games to structure narrative flow and implemented basic micro-interactions such as hover and click states to enhance engagement.",
      "Prioritised simplicity in layout and interaction after recognising the technical and performance limitations of the framework.",
    ],
    feedback:
      "Initial concepts aimed for a more complex, modern game interface, but early development revealed limitations in Tkinter's performance and flexibility. Based on these constraints and time pressure, the scope was reduced and the interface refined to focus on core interactions and usability rather than visual complexity.",
    outcome:
      "The project was completed within a month and marked my first experience shipping a complete interactive system independently. It strengthened my time management skills, introduced me to frontend layout and interaction design, and helped me realise my interest in building and coding out visual interfaces.",
  },
  {
    id: "#002",
    name: "D'Light",
    role: "UX Designer",
    date: "Jan-Apr 2024",
    writeup: [
      "Incorporated double diamond and design thinking metrologies to address social interaction and safety concerns",
      "Conducted user research, fieldwork to create low-fidelity and high-fidelity prototypes including a motion-sensor LED system using Raspberry PI which was evaluated through usability testing",
    ],
    tech: [figmaIcon],
    media: [
      { src: dtiPoster, type: "image" },
      { src: dtiImage1, type: "image" },
      { src: dtiImage2, type: "image" },
    ],
    figmaLink: null,
    githubLink: null,
    intro:
      "D'Light was a design thinking project focused on improving safety and social interaction within a high-traffic campus space. Using the Double Diamond framework, the project explored how environmental design and interactive elements could address visibility, safety, and user experience issues in a shared public setting.",
    experience:
      "I worked as a UX Designer within a team, contributing to user research, site analysis, ideation, and prototyping. My responsibilities included conducting fieldwork, developing personas and journey maps, and supporting the creation of low and mid-fidelity prototypes for both physical and interactive components.",
    ux: [
      "Identified poor lighting, weather exposure, and structural degradation as key safety pain points through site analysis and field observations.",
      "Designed a translucent dome structure to provide shelter while diffusing light, improving visibility without creating harsh illumination.",
      "Integrated interactive lighting and sound elements to encourage social interaction while maintaining functional safety.",
    ],
    feedback:
      "The solution went through multiple iterations, including scaled site models, functional prototypes of interactive mechanics, and visual representations of the environment. Feedback from testing and critique sessions informed refinements in material choice, interaction responsiveness, and overall feasibility.",
    outcome:
      "While the project focused on a physical installation, it significantly shaped my approach to UX. Although I was initially sceptical of the structured design thinking process, I later realised its value and continued applying these methodologies in subsequent projects and internships to uncover deeper user needs and generate more informed solutions.",
  },
  {
    id: "#003",
    name: "Split!!Mate",
    role: "Frontend Dev & UX Designer",
    date: "Jan-Apr 2025",
    writeup: [
      "Led a team of 7 to design and build a group expense-tracking Android app to improve transparency and accountability of group purchases",
      "Designed mock-ups, service models in Figma, implemented core features using Java and Firebase",
    ],
    tech: [firebaseIcon, javaIcon, figmaIcon, htmlIcon],
    media: [
      { src: infosysPoster, type: "image" },
      { src: infosysVideo, type: "video" },
    ],
    figmaLink:
      "https://www.figma.com/design/DN1PMK705YtHkj6I3FC0j6/PSP-UI?node-id=0-1",
    githubLink: "https://github.com/NoelRook/SplitMate",
    intro:
      "Split!!Mate was a group expense-tracking Android application designed to simplify how people split shared purchases. The project was driven by personal pain points around tracking complex group expenses and aimed to create a more intuitive, accessible alternative to existing solutions that were either overly complex or paywalled.",
    experience:
      "I led the UX design and frontend development for the project, taking full ownership of the interface, interaction flows, and visual design. This included designing the entire Figma file, iterating on wireframes and mock-ups, and implementing all frontend screens and interactions in Android using Java and XML, integrated with Firebase.",
    ux: [
      "Designed a flexible item-based splitting workflow that allowed users to divide expenses by consumed items rather than percentages or fixed amounts, removing the need for manual calculations.",
      "Prioritised receipt-based input through OCR and automatic GST calculation to reduce friction and speed up expense entry.",
      "Used overlays and pop-ups instead of full page navigation for tightly related actions, keeping users grounded in the primary task flow.",
    ],
    feedback:
      "Early feedback highlighted that the scope was too broad, particularly the inclusion of both personal and group tracking modes. Based on this, the project pivoted to focus on ease of input and clarity of group expense workflows as a clear point of differentiation. Iterative critique also influenced refinements in interaction flow, component states, and micro-interactions across the app.",
    outcome:
      "The final application was well received during the project showcase and recognised for having one of the strongest UI/UX executions in the cohort, as well as being among the most realistic and deployable solutions. This project significantly increased my confidence in designing and building end-to-end products and solidified my interest in pursuing UX design alongside frontend development.",
  },
  {
    id: "#004",
    name: "Im-Connected",
    role: "Frontend Dev & UX Designer",
    date: "June-Sept 2025",
    writeup: [
      "Designed a webapp to alleviate the workload experienced by caregivers, focusing on accessibility-first UX (multi-language support, easy-reader mode, summarisation features, text-to-speech etc)",
      "Created UI components and responsive layouts using React(JavaScript), containerised using Docker to ensure usability across all devices",
    ],
    tech: [
      mongodbIcon,
      reactIcon,
      figmaIcon,
      dockerIcon,
      nodeIcon,
      tailwindIcon,
      javascriptIcon,
    ],
    media: [
      { src: escImage1, type: "image" },
      { src: escImage2, type: "image" },
      { src: escImage3, type: "image" },
      { src: escImage4, type: "image" },
    ],
    figmaLink:
      "https://www.figma.com/design/g7tJNxVOaBgosPzpOvZ0Xy/ESC-2025-project-prototype",
    githubLink: "https://github.com/Bearson678/IM-CONNECTED",
    intro:
      "Im-Connected is a caregiver support web application developed in collaboration with Lions Befrienders to improve caregiver wellbeing and access to resources. The project focused on addressing emotional burden, information fragmentation, and accessibility challenges faced by family caregivers supporting elderly dependents.",
    experience:
      "I was the primary UX designer and frontend developer for the project, leading user research, interface design, and frontend implementation. I owned the end-to-end design process, including stakeholder alignment, accessibility-focused design decisions, and the development of responsive UI components using React.",
    ux: [
      "Designed the application around an accessibility-first approach, including multi-language support, text-to-speech, easy-reader modes, and content summarisation to support users with varying literacy and cognitive needs.",
      "Prioritised peer-to-peer support through a community forum, allowing caregivers to share lived experiences and emotional support beyond official government messaging.",
      "Structured content to address both caregiver and care recipient needs, recognising the interdependence of their mental and emotional wellbeing.",
    ],
    feedback:
      "Working with an external stakeholder introduced ambiguous requirements and evolving expectations, requiring frequent iteration and prioritisation. Feedback suggested a deeper focus on fewer features rather than broader coverage, highlighting the tradeoff between depth and feasibility within project constraints.",
    outcome:
      "While some accessibility features received limited stakeholder attention, the project significantly expanded my understanding of inclusive design and accessibility considerations in real-world products. It reinforced the importance of designing for underserved user groups and strengthened my ability to advocate for accessibility-first decisions within a team setting.",
  },

];

const Book = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const project = projects[currentProject];

  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.media.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project, isModalOpen]);

  const openModal = (index) => {
    setCurrentSlide(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setCurrentSlide(0);
  };
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentSlide(0);
  };

  return (
    <div className={styles.bookWrapper}>
      <div
        className={styles.bookBackground}
        style={{ backgroundImage: `url(${bookBg})` }}
      >
        {/* === PAGE CONTENT === */}
        <div className={styles.contentsWithProperAutoLayo} key={project.id}>
          {/* LEFT PAGE */}
          <div className={styles.leftPage}>
            <div className={styles.header}>
              <b className={styles.projectId}>{project.id}</b>
              <b className={styles.projectId}>{project.date}</b>
            </div>
            <div className={styles.name}>{project.name}</div>

            <div className={styles.slideshowWrapper}>
              {project.media.map((media, index) =>
                media.type === "video" ? (
                  <video
                    key={index}
                    src={media.src}
                    className={`${styles.slide} ${
                      index === currentSlide ? styles.active : ""
                    }`}
                    muted
                    playsInline
                    preload="metadata"
                    onClick={() => openModal(index)}
                  />
                ) : (
                  <img
                    key={index}
                    src={media.src}
                    alt={`Slide ${index + 1}`}
                    className={`${styles.slide} ${
                      index === currentSlide ? styles.active : ""
                    }`}
                    onClick={() => openModal(index)}
                  />
                )
              )}
              <div className={styles.clickHint}>Click to enlarge ⤢</div>
            </div>
          </div>

          {/* RIGHT PAGE */}
          <div className={styles.rightPage}>
            <div className={styles.role}>{project.role}</div>

            {/* Links */}
            <div className={styles.frameParent}>
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubRepo}
                >
                  <img src={figma} className={styles.icon} alt="Figma" />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubRepo}
                >
                  <img src={github} className={styles.icon} alt="GitHub" />
                </a>
              )}
            </div>

            {/* Tech Stack Icons */}
            <div className={styles.techstack}>
              <div className={styles.ingredientsUsed}>Ingredients used:</div>
              <div className={styles.techIcons}>
                {project.tech.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    className={styles.techIcon}
                    alt="tech"
                  />
                ))}
              </div>
            </div>

            <ul className={styles.writeup}>
              {project.writeup.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* === PAGE FLIP BUTTONS BELOW BOOK === */}
        <div className={styles.bottomArrows}>
          <img
            src={leftflip}
            alt="Previous Project"
            className={styles.bottomArrow}
            onClick={prevProject}
          />
          <img
            src={rightflip}
            alt="Next Project"
            className={styles.bottomArrow}
            onClick={nextProject}
          />
        </div>

        {isModalOpen && <Modal project={project} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Book;
