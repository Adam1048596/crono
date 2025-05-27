//hero styles file
import styles from 'styled-components';
const HeroContent = styles.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 160px 0 90px 0;

  h1 {
    font-family: "Geist";
    font-weight: 600;
    font-size: 80px;
    margin-bottom: 15px;
    background: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.5));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span{
    font-family: "Tangerine";
    font-weight: 100;
    }
  }

  p {
    font-family: "Geist";
    color: #888888;
    font-weight: 400;
    font-size: 14px;
  }

  `
  export default HeroContent;