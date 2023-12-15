import React from 'react';
import '../styles/Hero.css';
interface HeroProps {
  title: string;
  heroPic: string;
}

const Hero: React.FC<HeroProps> = ({ title, heroPic }) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <img src={heroPic} alt="hero" />
    </div>
  );
};

export default Hero;
