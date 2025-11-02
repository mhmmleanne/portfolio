import React, { useState, useEffect } from "react";
import styles from "./Log.module.css";
import leftScroll from "../assets/images/leftscroll.png";
import rightScroll from "../assets/images/rightscroll.png";
import openScroll from "../assets/images/scroll.png";
import leftflip from "../assets/images/leftarrow.png";
import rightflip from "../assets/images/rightarrow.png";

const dummyData = [
  {
    companyName: "Govtech",
    role: "UI/UX Designer & Dev",
    year: "Aug-Dec 2025",
    description: [
      "Analyzed existing research, manuals, and workflows to identify major system and UX inefficiencies.",
      "Designed improved workflows and core use cases addressing unstable forms and unreliable data.",
      "Prototyped frontend components in Figma using the ShadCN design system.",
    ],

    hp: "+50 HP +10 DEF",
  },
];

const Log = () => {
  const [isUnrolled, setIsUnrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to trigger animation
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) setIsUnrolled(true); // scroll down → unroll
      else if (e.deltaY < 0) setIsUnrolled(false); // scroll up → roll back
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2) % dummyData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 + dummyData.length) % dummyData.length);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.scrollOuter} ${
          isUnrolled ? styles.unrolled : styles.rolled
        }`}
      >
        {/* Left scroll cap */}
        <img
          src={leftScroll}
          alt="Left cap"
          className={`${styles.cap} ${styles.leftCap}`}
        />

        {/* Middle expanding section */}
        <div
          className={styles.middleSection}
          style={{ backgroundImage: `url(${openScroll})` }}
        >
          {isUnrolled && (
            <div className={styles.textContent}>
              <h1 className={styles.header}>Job Experience</h1>
              <div className={styles.experienceWrapper}>
                {dummyData
                  .slice(currentIndex, currentIndex + 2)
                  .map((item, index) => (
                    <div key={index} className={styles.experience}>
                      <div className={styles.companyName}>
                        {item.companyName}
                      </div>
                      <div className={styles.yourRoleParent}>
                        <div className={styles.yourRole}>{item.role}</div>
                        <div className={styles.yearXxxx}>{item.year}</div>
                      </div>
                      <ul className={styles.description}>
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      <div className={styles.hp}>{item.hp}</div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Right scroll cap */}
        <img
          src={rightScroll}
          alt="Right cap"
          className={`${styles.cap} ${styles.rightCap}`}
        />
        <div className={styles.bottomArrows}>
          <img
            src={leftflip}
            alt="Previous Project"
            className={styles.bottomArrow}
            onClick={handlePrev}
          />
          <img
            src={rightflip}
            alt="Next Project"
            className={styles.bottomArrow}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Log;
