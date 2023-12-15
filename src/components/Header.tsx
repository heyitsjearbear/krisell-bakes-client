import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
interface HeaderProps {
  logoPath: string;
}

const Header: React.FC<HeaderProps> = ({ logoPath }) => {
  return (
    <header>
      <img src = {logoPath} alt = "logo" className='logo'/>
      <FontAwesomeIcon id= "hamburger-icon" icon={faBars} />
    </header>
  );
};

export default Header;
