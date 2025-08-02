import styles from './footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <h1>
          Got a project? <br />
          <span>Lets talk. <em>Hi,</em></span>
        </h1>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="What's your name?" />
          <button>
            Submit <span>→</span>
          </button>
        </div>
      </div>

      <div className={styles.middleRow}>
        <div className={styles.socialIcons}>

        </div>

        <ul className={styles.links}>
          <li>Home</li>
          <li>/</li>
          <li>About Us</li>
          <li>/</li>
          <li>Projects</li>
          <li>/</li>
          <li>Services</li>
          <li>/</li>
          <li>Careers</li>
          <li>/</li>
          <li>Blogs</li>
        </ul>
      </div>

      <div className={styles.bottomRow}>
        <div>
          <h4>Contact Us</h4>
          <p>+1 891 989-11-91</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>2972 Westheimer Rd. Santa Ana,<br />Illinois 85486</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>hello@gmail.com</p>
        </div>
      </div>

      <div className={styles.footerEnd}>
        <span>Top</span>
        <span className={styles.arrow}>↑</span>
      </div>
    </footer>
  );
}


export default Footer;