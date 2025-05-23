import cronoLogo from '../../assets/crono-black-logo.png';
import './logo.css';

const Logo = () => {
  const className = "logo";

  return <a
            href=""
            className={className}>
    <img src={cronoLogo} alt="" />
  </a>
}

export default Logo