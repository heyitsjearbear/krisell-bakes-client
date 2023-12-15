import React from 'react';
import '../styles/NavigationBar.css';

interface NavigationBarProps {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isNavVisible, toggleNav }) => {
  return (
    <nav className={`sidebar ${isNavVisible ? 'visible' : ''}`}>
      <ul className='nav-items'>
      <button className='x' onClick={toggleNav}>X</button>
        <li className='nav-item'>Shop</li>
        <li className='nav-item'>About Me</li>
        <li className='nav-item'>Portfolio</li>
        <li className='nav-item'>QnA</li>
        <li className='nav-item'>Social Links</li>
        <li className='nav-item'>Contact</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
