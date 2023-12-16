import React from "react";
import "../styles/NavigationBar.css";

interface NavigationItem {
  name: string;
}

interface NavigationBarProps {
  isNavVisible: boolean;
  toggleNav: () => void;
  items: NavigationItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  isNavVisible,
  toggleNav,
  items
}) => {
  return (
    <nav className={`sidebar ${isNavVisible ? "visible" : ""}`}>
      <ul className="nav-items">
        <button className="x" onClick={toggleNav}>
          X
        </button>
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
