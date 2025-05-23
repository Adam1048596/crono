import './navbar.scss';
import cronoLogo from '../../assets/crono-black-logo.png';

// navbar component
const NavBar = () => {
  const className = "navbar";
  return (
    <div className={className}>
      <Logo />
      <Nav />
      <ThemeToggle />
    </div>
  );
}
// logo component
const Logo = () => {
  const className = "logo";
  return (
    <a
      href=""
      className={className}>
    <img src={cronoLogo} alt="" />
    </a>
  );
}
// navigation component
const Nav = () => {
  const className = "nav";
  return (
    <ul className={className}>
      <li><a href="">Home</a></li>
      <li><a href="">portflio</a></li>
      <li><a href="">about me</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">resume</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  );
}
const ThemeToggle = () => {
  const className = "theme-toggle";
  return <button className={className}>toggle</button>
}    


    
    
export default NavBar