import React, { useState, useEffect } from "react";
import styles from "./Book.module.css";
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
import portfolioImage1 from "../assets/portfolio/slide1.png";
import portfolioImage2 from "../assets/portfolio/slide2.png";

import javascriptIcon from "../assets/images/javascript.png";
import javaIcon from "../assets/images/java.png";
import pythonIcon from "../assets/images/python.png";
import typescriptIcon from "../assets/images/typescript.png";
import cssIcon from "../assets/images/css.png";
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
    writeup:
      "Created for the 2023 Computational Thinking and Design 1D project, this Python game simulates a day-in-the-life where the player's choices shape the ending. The GUI was built and styled using Tkinter.",
    tech: [pythonIcon],
    media: [{ src: ctdVideo, type: "video" }],
    figmaLink: null,
    githubLink: "https://github.com/mhmmleanne/CTD_1D_Project",
  },
  {
    id: "#002",
    name: "D'Light",
    role: "UX Designer",
    date: "Jan-Apr 2024",
    writeup:
      "Part of the 2024 Design Thinking and Innovation course, I incoporated double diamond and other design thinking skills to address safety in a dimly lit canteen staircase. Through user research and prototyping with Raspberry Pi sensors, my group developed a motion-sensored LED system that aimed to enhance safety and foster social interaction.",
    tech: [figmaIcon],
    media: [
      { src: dtiPoster, type: "image" },
      { src: dtiImage1, type: "image" },
      { src: dtiImage2, type: "image" },
    ],
    figmaLink: null,
    githubLink: null,
  },
  {
    id: "#003",
    name: "Split!!Mate",
    role: "Frontend Dev & UX Designer",
    date: "Jan-Apr 2025",
    writeup:
      "Split!! Mate is an Android app that simplifies splitting expenses among friends and groups, with real-time updates and automatic debt calculations. Built with Java, Firebase Realtime Database, and Firebase Authentication.",
    tech: [firebaseIcon, javaIcon, figmaIcon, htmlIcon],
    media: [
      { src: infosysPoster, type: "image" },
      { src: infosysVideo, type: "video" },
    ],
    figmaLink:
      "https://www.figma.com/design/DN1PMK705YtHkj6I3FC0j6/PSP-UI?node-id=0-1",
    githubLink: "https://github.com/NoelRook/SplitMate",
  },
  {
    id: "#004",
    name: "Im-Connected",
    role: "Frontend Dev & UX Designer",
    date: "June-Sept 2025",
    writeup:
      "IM-CONNECTED is a project under 50.003 Elements of Software Construction, aimed at designing a webapp to allievate the workload experienced by caregivers. Our webapp features multi-langugage support, easy reader mode and summarisation features hoping to make information accessible to all elderly.",
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
  },
  {
    id: "#005",
    name: "Portfolio",
    role: "Frontend Dev and UX Designer",
    date: "Oct 2025",
    writeup:
      "This current portfolio, featuring some early prototypes.",
    tech: [typescriptIcon, cssIcon, htmlIcon, figmaIcon],
    media: [
      { src: portfolioImage1, type: "image" },
      { src: portfolioImage2, type: "image" },
    ],
    figmaLink:
      "https://www.figma.com/design/PH5tMyEDJjlfXPHF7R5OKI/haha-for-fun?node-id=0-1&t=LDXFfPXdKi0osdgq-1",
    githubLink: "https://github.com/Bearson678/IM-CONNECTED",
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

  const goNextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.media.length);
  };
  const goPrevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide(
      (prev) => (prev - 1 + project.media.length) % project.media.length
    );
  };

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

            <div className={styles.writeup}>{project.writeup}</div>
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

        {/* === MODAL === */}
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <button className={styles.navArrow} onClick={goPrevSlide}>
              ‹
            </button>
            {project.media[currentSlide].type === "video" ? (
              <video
                src={project.media[currentSlide].src}
                className={styles.modalImage}
                controls
                autoPlay
              />
            ) : (
              <img
                src={project.media[currentSlide].src}
                alt="Full view"
                className={styles.modalImage}
              />
            )}
            <button className={styles.navArrow} onClick={goNextSlide}>
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
