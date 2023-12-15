import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Logo from './assets/logo.png'
import heroPic from './assets/hero.png'
import Hero from './components/Hero'
const App = () => {
  return (
    <>
      <Header logoPath = {Logo} />
      <Hero className="hero" title = 'Krisell Bakes' heroPic = {heroPic} />
    </>
  )
}

export default App;
