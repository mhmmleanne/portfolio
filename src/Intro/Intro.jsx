import styles from "./Intro.module.css";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import image1 from "../assets/wallpapers/pic1.jpg";
import image2 from "../assets/wallpapers/pic2.jpg";
import image3 from "../assets/wallpapers/pic3.jpg";

export default function Intro() {
  return (
    <div className={styles.introcontainer}>
      <div className={styles.introwrapper}>
        <div className={styles.introgrid}>
          {/* Left side */}
          <div className={styles.introleft}>
            <div className={styles.mainimage}>
              <img src={image1} />
            </div>
            <div className={styles.smallimages}>
              <div className={styles.smallimagebox}>
                <img src={image2} />
              </div>
              <div className={styles.smallimagebox}>
                <img src={image3} />
              </div>
            </div>
          </div>
          <div className={styles.introright}>
            <div className={styles.introlabel}>Hello, I'm</div>

            <h1 className={styles.introtitle}>Iris!!</h1>

            <p className={styles.introsubtitle}>UIUX Designer | Frontend Dev</p>

            <p className={styles.introdescription}>
              I'm a 3rd year student studying Computer Science and Design (CSD)
              @ SUTD! I love building cool(and pretty) webapps/apps and below
              are several projects that I have worked on! I'm currently doing a
              UI/UX Developer Internship in Govtech Singapore.
            </p>

            {/* Buttons */}
            <div className={styles.buttonrow}>
              <a href="/resume.pdf" download className={styles.btnoutline}>
                <Download className={styles.icon} />
                <span>Resume</span>
              </a>
            </div>
    
            {/* Social Links */}
            <div className={styles.socialrow}>
              <a
                href="https://github.com/mhmmleanne"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialbtn}
              >
                <Github className={styles.iconsm} />
              </a>
              <a
                href="https://www.linkedin.com/in/iris-chan-359406333/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialbtn}
              >
                <Linkedin className={styles.iconsm} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=irischan2512@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialbtn}
              >
                <Mail className={styles.iconsm} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
