
import styles from './Frame.module.css';


const Frame = () => {
  	return (
    		<div className={styles.framebody}>
      			<div className={styles.introductionframe}>
        				<div className={styles.introductionframeChild} />
        				<div className={styles.introduction}>introduction</div>
      			</div>
      			<div className={styles.introductionframe}>
        				<div className={styles.introductionframeChild} />
        				<div className={styles.introduction}>Projects</div>
      			</div>
      			<div className={styles.introductionframe}>
        				<div className={styles.introductionframeChild} />
        				<div className={styles.introduction}>Work Experience</div>
      			</div>
      			<div className={styles.introductionframe}>
        				<div className={styles.introductionframeChild} />
        				<div className={styles.introduction}>Tech Stack</div>
      			</div>
      			<div className={styles.introductionframe}>
        				<div className={styles.introductionframeChild} />
        				<div className={styles.introduction}>Education</div>
      			</div>
      			<div className={styles.introductionframe}>
        				<div className={styles.introductionframeChild} />
        				<div className={styles.introduction}>Contact</div>
      			</div>
    		</div>);
};

export default Frame;
