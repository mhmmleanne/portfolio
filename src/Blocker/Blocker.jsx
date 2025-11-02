import { useEffect, useState } from "react";
import styles from "./Blocker.module.css"
import rotate from "../assets/images/rotate.png"

export default function Blocker() {
  const [isPortrait, setIsPortrait] = useState(false);

  const checkOrientation = () => {
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    const isMobile = window.innerWidth < 900;
    setIsPortrait(portrait && isMobile);
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!isPortrait) return null;

  return (
    <div className={styles.orientationoverlay}>
      <div className={styles.orientationbox}>
        <p>Please rotate your phone!</p>
        <p>Best viewed on computer</p>
        <img src={rotate}className={styles.rotateicon}/>
      </div>
    </div>
  );
}
