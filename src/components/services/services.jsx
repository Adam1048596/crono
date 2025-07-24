import styles from './services.module.scss';
import video1 from '../assets/videos/34631baa3.mp4';
import video2 from '../assets/videos/d97d95.mp4';
import video3 from'../assets/videos/e6ebdb91b.mp4';

const Service = () => {
  console.log("Service component loaded");
  const serviceData = [
    {
      title: "Graphic Design",
      description: "From eye-catching logos to full brand kits, I design visuals that communicate clearly and leave a lasting impression. Whether it’s for print or digital, I make sure every piece reflects your brand’s personality with purpose and creativity.",
      video: video1

    },{
      title: "Frontend Dev",
      description: "I build modern, responsive, and interactive user interfaces using HTML, CSS, JavaScript, and React. My focus is on making websites and apps look great and feel smooth across all devices, giving users the best experience possible.",
      video: video2
    },{
      title: "Backend Dev",
      description: "I handle the behind-the-scenes logic that powers your website or app. Using tools like Node.js and Express, I build secure servers, APIs, and databases that make sure everything works fast, safely, and efficiently.",
      video: video3
    }
  ];
  return (
    <div className={styles.serviceContainer}>
      {serviceData.map((service) => (
        <div key={crypto.randomUUID()} className={styles.service}>
          <video
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}


export default Service