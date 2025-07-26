import NavBar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import Service from './services/services.jsx';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Service />
      <p>Here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that.</p>
      <button>download cv</button>
    </>
  );
}



export default HomePage;