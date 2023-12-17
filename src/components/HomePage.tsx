import { useState } from "react";
import Logo from "../assets/logo.png";
import heroPic from "../assets/hero.png";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Hero from "./Hero";
import '../styles/HomePage.css';

const HomePage = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    console.log(isNavVisible);
  };
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "QnA", route: "/qna" },
    { name: "Socials", route: "/socials" },
    { name: "Contact", route: "/contact" },
  ];
  return (
    <>
      <Header logoPath={Logo} toggleNav={toggleNav} />
      <div className="hero-container">
        <Hero title="Krisell Bakes" heroPic={heroPic} />
      </div>
      <NavigationBar
        items={navItems}
        toggleNav={toggleNav}
        isNavVisible={isNavVisible}
      />
    </>
  );
};

export default HomePage;
