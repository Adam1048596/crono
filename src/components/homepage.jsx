import NavBar from './navbar/navbar.jsx';
import styles from './homepage.module.scss';
import image01 from '../assets/1.png';
import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video3 from '../assets/videos/3.mp4';

const HomePage = () => {
  return (
    <>
      <NavBar />
      {/* hero section */}
      <div className={styles.hero}>
        <h1>Crafting Beyond <span>the ordinary</span></h1>
        <p>intrigued by beauty fascinated by technology and filled with everlasting
          devotion to digital craftsmanship and meaningful aesthetics.</p>
      </div>
      {/* services section */}
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
      <div>
        
        <p>Here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that.</p>
        <button>download cv</button>
        <img src={image01} alt="" />
      </div>
    </>
  );
}



export default HomePage;