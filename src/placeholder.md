import BookContents from "./BookContents/BookContents";
import ctdVideo from "./assets/ctd/ctd_video.mp4";
import dtiPoster from "./assets/dti/dti_poster.png";
import dtiImage1 from "./assets/dti/dti_pt1_pg1.png";
import dtiImage2 from "./assets/dti/dti_pt1_pg2.png";
import infosysPoster from "./assets/infosys/infosys_poster.png";
import infosysVideo from "./assets/infosys/infosys_video.mp4";
import escImage1 from "./assets/esc/esc_1.png";
import escImage2 from "./assets/esc/esc_2.png";
import escImage3 from "./assets/esc/esc_3.png";
import escImage4 from "./assets/esc/esc_4.png";      
      
      
      
      <BookContents
        projectId="1"
        projectDate="Oct-Nov 2023"
        projectRole="Solo Full Stack Developer"
        projectName="That Time I accidentally spilled Kaya Toast on my Shirt"
        projectWriteup="This project was created as part of 2023 Computational Thinking and Design 1D project, 
      where we were tasked to create a game using only python. The game showcases a day-in-the-life of a classmate, 
      where choices made by the user influence the ending of the game. The GUI was created using tkinter, where custom styles were applied."
        githubRepo="https://github.com/mhmmleanne/CTD_1D_Project"
        videos={[ctdVideo]}
      />
      <BookContents
        projectId="2"
        projectDate="Jan-Apr 2024"
        projectRole="Product Manager & Lead UX Designer"
        projectName="D'Light"
        projectWriteup="This project was created as part of 2024 Design Thinking and Innovation course, 
      where we applied double diamond framework and design thinking tools such as wireframing, user analysis,
      user journey mapping to solve our problem statement. Our landscape and user research revealed that the
      dimly lit canteen staircase was overlooked but posed many safety issues. We created a motion-sensored
      LED system underneath the steps that aims to improve the safety of users as well as a hub for social
      interaction. Our prototypes included a site model, functional prototype made using raspberry PI and sensors,
      as well as a cad of the system."
        images={[dtiPoster, dtiImage1, dtiImage2]}
      />
      <BookContents
        projectId="3"
        projectDate="Jan-Apr 2025"
        projectRole="Frontend & Lead UX Designer"
        projectName="Split!!Mate"
        projectWriteup="Split!! Mate is an Android app that simplifies splitting expenses among friends and groups, 
      with real-time updates and automatic debt calculations. Built with Java, Firebase Realtime Database, and Firebase Authentication."
        images={[infosysPoster]}
        videos={[infosysVideo]}
        githubRepo="https://github.com/NoelRook/SplitMate"
        figmaLink="https://www.figma.com/design/DN1PMK705YtHkj6I3FC0j6/PSP-UI?node-id=0-1&t=sgTFPAGPVMGuLdNh-0"
      />
      <BookContents
        projectId="4"
        projectDate="June-Sept 2025"
        projectRole="Frontend & Lead UX Designer"
        projectName="Im-Connected"
        projectWriteup="IM-CONNECTED is a project under 50.003 Elements of Software Construction. 
      The goal is to design a webapp designed for LionDefenders's needs to allievate the stresses and workload experienced by Caregivers."
        images={[escImage1, escImage2, escImage3, escImage4]}
        githubRepo="https://github.com/Bearson678/IM-CONNECTED"
        figmaLink="https://www.figma.com/design/g7tJNxVOaBgosPzpOvZ0Xy/ESC-2025-project-prototype?node-id=0-1&t=6hpufQdg1ghNANwr-1"
      />






* {
  transition: all 0.3s ease;
}



.bookWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f8f4ec;
  padding: 40px 0;
}

.bookBackground {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: min(1600px, 95vw);
  aspect-ratio: 16 / 9.5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.contentsWithProperAutoLayo {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 66.5%;
  height: 83.5%;
  position: absolute;
  top: 8.5%;
  left: 16.5%;
  background: none;
  margin: 1%;
}

/* --- LEFT & RIGHT PAGE --- */
.leftPage,
.rightPage {
  align-self: stretch;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  animation: fadeInUp 1s ease forwards;
  opacity: 0;
}

.leftPage {
  animation-delay: 0.2s;
}

.rightPage {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* --- SLIDESHOW IMAGE CROSSFADE (already has opacity transitions) --- */
.slide {
  transition: opacity 1s ease, transform 0.6s ease;
}

.slide.active {
  opacity: 1;
  transform: scale(1.02);
}

/* --- HINT TEXT ANIMATION (subtle fade pulse) --- */
.clickHint {
  animation: fadePulse 2s infinite ease-in-out;
}

@keyframes fadePulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* --- BUTTON INTERACTIONS --- */
.githubRepo {
  position: relative;
  overflow: hidden;
}

.githubRepo::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: left 0.4s ease;
}

.githubRepo:hover::after {
  left: 100%;
}

/* --- TECHSTACK ELEMENT ANIMATIONS --- */
.techstackChild {
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
}

.techstackChild:hover {
  border-color: rgba(125, 79, 80, 1);
  transform: scale(1.03) rotate(1deg);
}

/* --- PROJECT NAME + WRITEUP FLOAT EFFECT --- */
.name:hover,
.writeup:hover {
  color: #7d4f50;
  transform: translateY(-4px);
  text-shadow: 0 2px 8px rgba(125, 79, 80, 0.25);
}

/* --- ARROW NAVIGATION FEEDBACK --- */
.navArrow:hover {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.4);
}

/* --- SUBTLE PAGE TILT ON HOVER --- */
.leftPage:hover {
  transform: rotateY(-1deg) scale(1.01);
}

.rightPage:hover {
  transform: rotateY(1deg) scale(1.01);
}



/* --- HEADER --- */
.header {
  width: clamp(300px, 35vw, 557px);
  height: auto;
  position: relative;
}

.projectId {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  line-height: 1.5;
  font-size: clamp(14px, 1.5vw, 22px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.githubRepo:hover,
.techstackChild:hover,
.navArrow:hover,
.slideshowWrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

/* --- NAME --- */
.name {
  align-self: stretch;
  text-align: center;
  font-size: clamp(30px, 6vw, 120px);
  line-height: 1.1;
}

/* --- SLIDESHOW --- */
.slideshowWrapper {
  position: relative;
  width: clamp(260px, 80%, 420px);
  aspect-ratio: 3 / 4;
  border-radius: 10px;
  background-color: #f4ebe2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.slide {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: contain;
  opacity: 0;
  transition: opacity 1s ease;
}

.slide.active {
  opacity: 1;
}

.clickHint {
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-size: clamp(10px, 1vw, 14px);
  font-family: 'Lato', sans-serif;
  color: rgba(80, 50, 40, 0.7);
  background: rgba(255, 255, 255, 0.6);
  padding: 3px 6px;
  border-radius: 5px;
}

/* --- RIGHT PAGE ELEMENTS --- */
.projectRoleParent {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, 2vw, 30px);
}

.projectRole {
  line-height: 1.5;
  font-size: clamp(16px, 1.6vw, 22px);
}

.frameParent {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(6px, 1vw, 10px);
  font-size: clamp(16px, 1.8vw, 24px);
  color: #fff;
  font-family: 'Chicken Quiche';
}

.githubRepo {
  width: clamp(100px, 10vw, 120px);
  height: clamp(28px, 2vw, 33px);
  border-radius: 5px;
  background-color: #7d4f50;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  font-size: clamp(14px, 1.6vw, 20px);
}

/* --- TECHSTACK --- */
.techstack {
  align-self: stretch;
  position: relative;
  height: auto;
  display: flex;               /* ✅ enables flexbox */
  justify-content: center;     /* ✅ centers horizontally */
  align-items: center;         /* ✅ centers vertically */
  flex-direction: column;      /* ✅ keeps label above box */
  gap: 8px;                    /* small spacing between label & box */
}

.techstackChild {
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0);
  border: 2px dashed rgba(125, 79, 80, 0.8);
  width: 90%;
  height: clamp(80px, 10vw, 125px);
  box-sizing: border-box;
  display: flex;               /* ✅ centers content inside the box */
  align-items: center;
  justify-content: center;
}

.ingredientsUsed {
  position: relative;
  line-height: 1.4;
  font-size: clamp(16px, 1.8vw, 24px);
  font-family: 'Lato', sans-serif;
  color: #4a2d2d;
  margin-bottom: 6px;
  text-align: center;          /* ✅ centers the label text */
  width: 100%;
}


.writeup {
  align-self: stretch;
  flex: 1;
  text-align: center;
  font-size: clamp(64px, 5vw, 128px);
  line-height: 1.2;
  font-family: 'Chicken Quiche';
}

/* --- MODAL OVERLAY --- */
.modalOverlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: zoom-out;
  backdrop-filter: blur(3px);
  padding: 2vw;
}

.modalImage {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

/* --- ARROW BUTTONS --- */
.navArrow {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: clamp(2.5rem, 4vw, 4rem);
  padding: 0 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  user-select: none;
  border-radius: 10px;
}

.navArrow:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* --- RESPONSIVENESS --- */
@media (max-width: 1100px) {
  .contentsWithProperAutoLayo {
    width: 80%;
    left: 10%;
    height: 82%;
  }

  .name {
    font-size: clamp(36px, 5vw, 80px);
  }

  .writeup {
    font-size: clamp(36px, 4.5vw, 90px);
  }

  .slideshowWrapper {
    width: 70%;
  }

  .projectRole {
    font-size: clamp(14px, 1.3vw, 18px);
  }
}

@media (max-width: 900px) {
  .contentsWithProperAutoLayo {
    width: 85%;
    left: 7.5%;
    height: 78%;
  }

  .name {
    font-size: clamp(28px, 7vw, 72px);
  }

  .slideshowWrapper {
    width: 75%;
  }

  .writeup {
    font-size: clamp(32px, 7vw, 80px);
  }

  .projectRole,
  .ingredientsUsed,
  .githubRepo {
    font-size: clamp(12px, 2.2vw, 16px);
  }
}

@media (max-width: 700px) {
  .contentsWithProperAutoLayo {
    width: 90%;
    left: 5%;
    height: 74%;
  }

  .name {
    font-size: clamp(26px, 6.5vw, 60px);
  }

  .writeup {
    font-size: clamp(28px, 6vw, 70px);
  }

  .slideshowWrapper {
    width: 85%;
  }

  .clickHint {
    font-size: 10px;
  }
}

@media (max-width: 600px) {
  .bookBackground {
    aspect-ratio: 1 / 1.3;
  }

  .contentsWithProperAutoLayo {
    width: 92%;
    left: 4%;
    height: 70%;
    top: 10%;
  }

  .slideshowWrapper {
    width: 95%;
    aspect-ratio: 3 / 4;
  }

  .name {
    font-size: clamp(22px, 8vw, 52px);
  }

  .writeup {
    font-size: clamp(26px, 8vw, 60px);
  }

  .projectId,
  .projectRole,
  .githubRepo,
  .ingredientsUsed {
    font-size: clamp(10px, 2.8vw, 14px);
  }

  .clickHint {
    font-size: 10px;
    bottom: 6px;
    right: 8px;
  }
}
