import heroPic from "../assets/hero.png";
import Hero from "./Hero";
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className="hero-container">
        <Hero title="Krisell Bakes" heroPic={heroPic} />
      </div>
    </>
  );
};

export default HomePage;
