import styles from "./modal.module.css";
import { useEffect, useRef } from "react";

export default function Modal ({ project,onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.caseStudyContainer}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* === HERO / COVER === */}
        <section className={styles.caseHero}>
          <h2>{project.name}</h2>
          <p>{project.role} · {project.date}</p>
        </section>

        {/* === MEDIA (optional carousel / static hero) === */}
        <section className={styles.caseMedia}>
          {project.media.map((media, i) =>
            media.type === "video" ? (
              <video key={i} src={media.src} controls />
            ) : (
              <img key={i} src={media.src} alt="" />
            )
          )}
        </section>

        {/* === CASE STUDY BODY === */}
        <section className={styles.caseSection}>
          <h3>Project Intro</h3>
          <p>
            {project.intro}
          </p>
        </section>

        <section className={styles.caseSection}>
          <h3>My Role</h3>
          <p>
            {project.experience}
          </p>
        </section>

        <section className={styles.caseSection}>
          <h3>Key UX Decisions</h3>
          <ul>
            {project.ux.map((point, index) => (
              <li key={index}>{point}</li>
            ))} 
          </ul>
        </section>

        <section className={styles.caseSection}>
          <h3>Iteration & Feedback</h3>
          <p>{project.feedback}</p>
        </section>

        <section className={styles.caseSection}>
          <h3>Outcome</h3>
          <p>{project.outcome}</p>
        </section>
      </div>
    </div>
  );
};
