import styles from './services.module.scss';
import video1 from '../../assets/videos/1.mp4';
import video2 from '../../assets/videos/2.mp4';
import video3 from '../../assets/videos/3.mp4';

const Service = () => {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.service}>
        <video src={video1} autoPlay loop muted playsInline className={styles.video}/>
        <div>
          <h2>Graphic Design</h2>
          <p>From eye-catching logos to full brand kits, We design visuals that communicate clearly and leave a lasting impression.
            Whether it’s for print or digital, We make sure every piece reflects your brand’s personality with purpose and creativity.</p>
        </div>
      </div>
      <div className={styles.service}>
        <video src={video2} autoPlay loop muted playsInline className={styles.video}/>
        <div>
          <h2>Frontend Dev</h2>
          <p>We build modern, responsive, and interactive user interfaces using HTML, CSS, JavaScript, and React. Our focus is on making
            websites and apps look great and feel smooth across all devices, giving users the best experience possible.</p>
        </div>
      </div>
      <div className={styles.service}>
        <video src={video3} autoPlay loop muted playsInline className={styles.video}/>
        <div>
          <h2>Backend Dev</h2>
          <p>We handle the behind-the-scenes logic that powers your website or app. Using tools like Node.js and Express, I build secure
            servers, APIs, and databases that make sure everything works fast, safely, and efficiently.</p>
        </div>
      </div>
    </div>
  );
}


export default Service