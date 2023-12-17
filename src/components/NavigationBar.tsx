import React from "react";
import "../styles/NavigationBar.css";
import { Link } from "react-router-dom";

interface NavigationItem {
  name: string;
  route: string
}

interface NavigationBarProps {
  isNavVisible: boolean;
  toggleNav: () => void;
  items: NavigationItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  isNavVisible,
  toggleNav,
  items,
}) => {
  return (
    <nav className={`sidebar ${isNavVisible ? "visible" : ""}`}>
      <ul className="nav-items">
        <button className="x" onClick={toggleNav}>
          X
        </button>
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <Link to={item.route} onClick={toggleNav}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
