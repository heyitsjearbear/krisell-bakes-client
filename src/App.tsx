import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Logo from './assets/logo.png'
import heroPic from './assets/hero.png'
import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'
const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    console.log(isNavVisible);
  }
  const navItems = [
    {name: 'Home'},
    {name: 'About'},
    {name: 'Contact'},
    {name: 'Portfolio'},
    {name: 'QnA'},
    {name: 'Socials'},
    {name: 'Contact'}
  ]
  return (
    <>
      <Header logoPath = {Logo} toggleNav={toggleNav} />
      <Hero title = 'Krisell Bakes' heroPic = {heroPic} />
      <NavigationBar items = {navItems} toggleNav={toggleNav} isNavVisible={isNavVisible}/>
    </>
  )
}

export default App;
