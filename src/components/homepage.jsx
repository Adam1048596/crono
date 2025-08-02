import NavBar from './navbar/navbar.jsx';
import Footer from './footer.jsx';
import styles from './homepage.module.scss';
import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video3 from '../assets/videos/3.mp4';


const ProductPrinciples = () => {
  const principles = [
    {
      number: '01',
      title: 'Build Trust',
      description: 'Create confidence by ensuring that users\' experience with data and analysis is always Secure, Transparent, Accurate, Relevant, and Consistent (STARC).',
      bullets: ['SECURE', 'TRANSPARENT', 'ACCURATE', 'RELEVANT', 'CONSISTENT'],
    },
    {
      number: '02',
      title: 'Ensure Availability',
      description: 'Design systems that are stable, available as much as possible, degrade gracefully, and recover quickly. ThoughtSpot is mission critical for its customers; design, build, and maintain it accordingly.',
      bullets: ['DEGRADE GRACEFULLY', 'RECOVER QUICKLY'],
    },
    {
      number: '03',
      title: 'Make It Quick',
      description: '',
      bullets: ['ENABLE SPEED', 'CREATE EFFICIENCY', 'OPTIMIZE FOR COMMON CASES'],
    },
    {
      number: '04',
      title: 'Stay Approachable',
      description: 'Make the user experience feel familiar, inviting, and understandable, yet technically advanced. Keep interactions and workflows simple.',
      bullets: ['KEEP IT FAMILIAR', 'REASSURE USERS', 'MAKE IT ACCESSIBLE'],
    },
    {
      number: '05',
      title: 'Create Delight',
      description: 'Make ThoughtSpot distinctively engaging and pleasurable, through visually appealing graphics, data visualizations, animations, micro-interactions, and clever copy. Think of UI and UX quality as non-negotiable.',
      bullets: ['BUILD BEAUTY THAT WORKS', 'MAKE MEANING WITH MOTION', 'USE CLEAR & FRIENDLY LANGUAGE'],
    },
    {
      number: '06',
      title: 'Be Proactive',
      description: 'Design intelligent systems that learn from user activity, leverage existing context, and infer intent. Then, use these learnings to produce insights, simplify existing tasks, and suggest new ones.',
      bullets: ['CREATE AUTOMATION', 'EMPOWER USERS', 'REDUCE EFFORT'],
    },
    {
      number: '07',
      title: 'Simplify',
      description: 'Eliminate the obvious, keep the essential. Progressively disclose information, functionality, and controls. Cut down on clicks, steps, data to input, and new concepts to learn.',
      bullets: ['CREATE LESS INPUT MORE OUTPUT', 'MAKE IT SIMPLE TO LEARN', 'MAKE IT EASY TO CONSUME'],
    },
  ];

  return (
    <section className={styles.productPrinciples}>
      <div className={styles.grid}>
        <div className={styles.headerColumn}>
          <h2>Product Principles</h2>
          <div className={styles.card} data-number={principles[0].number}>
            <h3>{principles[0].title}</h3>
            {principles[0].description && <p>{principles[0].description}</p>}
            {principles[0].bullets.length > 0 && (
              <ul>
                {principles[0].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card} data-number={principles[1].number}>
            <h3>{principles[1].title}</h3>
            {principles[1].description && <p>{principles[1].description}</p>}
            {principles[1].bullets.length > 0 && (
              <ul>
                {principles[1].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.card} data-number={principles[4].number}>
            <h3>{principles[4].title}</h3>
            {principles[4].description && <p>{principles[4].description}</p>}
            {principles[4].bullets.length > 0 && (
              <ul>
                {principles[4].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card} data-number={principles[2].number}>
            <h3>{principles[2].title}</h3>
            {principles[2].description && <p>{principles[2].description}</p>}
            {principles[2].bullets.length > 0 && (
              <ul>
                {principles[2].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.card} data-number={principles[5].number}>
            <h3>{principles[5].title}</h3>
            {principles[5].description && <p>{principles[5].description}</p>}
            {principles[5].bullets.length > 0 && (
              <ul>
                {principles[5].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card} data-number={principles[3].number}>
            <h3>{principles[3].title}</h3>
            {principles[3].description && <p>{principles[3].description}</p>}
            {principles[3].bullets.length > 0 && (
              <ul>
                {principles[3].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.card} data-number={principles[6].number}>
            <h3>{principles[6].title}</h3>
            {principles[6].description && <p>{principles[6].description}</p>}
            {principles[6].bullets.length > 0 && (
              <ul>
                {principles[6].bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
const stats = [
  {
    value: '92%',
    description:
      'Our agency has produced many products that have been live, showcasing our expertise in delivering high-quality.',
  },
  {
    value: '64%',
    description:
      'Most of the designers in our agency have high job opportunities, thanks to their exceptional skills and the agency’s strong reputation.',
  },
  {
    value: '0%',
    description:
      'Our agency never gets complaints and is dedicated to consistently satisfying clients with exceptional results.',
  },
];
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


    <section className={styles.statsSection}>
      <div className={styles.left}>
        <p className={styles.location}>
          Digital Agency based in<br></br><strong>casablanca, MA</strong>
        </p>
        <button className={styles.aboutButton}>
          About Us <span>→</span>
        </button>
      </div>

      <div className={styles.right}>
        <h2>
          Explore our work, where creativity seamlessly meets purpose, pushing boundaries and transforming ideas into impactful experiences. We believe
          in crafting designs that not only captivate but also drive meaningful connections.
        </h2>
        <div className={styles.cards}>
          {stats.map((s, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.value}>{s.value}</div>
              <p className={styles.description}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.aboutSection}>
          <h1>Explore our work, where creativity seamlessly meets purpose, pushing boundaries and transforming ideas into impactful experiences.
            We believe in crafting designs that not only captivate but also drive meaningful connections.</h1>
          <div className={styles.aboutContent}>
            <p>At our web development agency, we craft high-performance digital experiences that help businesses grow, connect, and thrive in a
              fast-changing world. From responsive websites to full-stack web applications, we combine clean code with modern design to deliver
              custom solutions tailored to your goals. Whether you're a startup or a growing company, we build scalable, secure, and user-friendly
              platforms that leave a lasting impression and deliver real results.</p>
            <button>Schedule a Call</button>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>58+</span>
              <span className={styles.statLabel}>Satisfied Clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>123+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>7+</span>
              <span className={styles.statLabel}>Different Industries</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>322+</span>
              <span className={styles.statLabel}>Collaborators</span>
            </div>
        </div>
    </section>
    <ProductPrinciples />
    <Footer />
    </>
  );
}



export default HomePage;