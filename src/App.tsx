import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
// Import other pages as needed
import Logo from "./assets/logo.png";
import { useState } from "react";
const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    // Add more items as needed
  ];

  return (
    <Router>
      <Header logoPath={Logo} toggleNav={toggleNav} />
      <NavigationBar
        items={navItems}
        toggleNav={toggleNav}
        isNavVisible={isNavVisible}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as needed */}
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
