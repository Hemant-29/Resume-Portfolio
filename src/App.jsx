import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainBody from './components/MainBody'
import './index.css'

function App() {
  const [darkMode,setDarkMode] = React.useState(false);
  function toggleDarkMode(){
    setDarkMode(oldDarkMode => !oldDarkMode);
}
  const [scrollTo, setScrollTo]= React.useState(".main-body");

  function changeScrollTo(classname) {
    setScrollTo(prevScrollTo => {return classname});
  }

  useEffect(() => {
    let background = document.querySelector(".fixedBackground");
    function handleScroll() {
      const scrollValueFromTop = window.scrollY;
      background.style.top = `${-scrollValueFromTop * 0.15}px`; // Adjust multiplier for desired parallax effect
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let background = document.querySelector(".fixedBackground");
    if(darkMode){
      background.style.backgroundImage = `url(src/assets/backgroundDark.jpg)`;
      document.documentElement.style.setProperty('--font-color', '#ffffff');
      document.documentElement.style.setProperty('--secondary-color', '#bf85d6');
    }
    else{
      background.style.backgroundImage = `url(src/assets/backgroundBright.jpg)`;
      document.documentElement.style.setProperty('--font-color', '#000000');
      document.documentElement.style.setProperty('--secondary-color', '#567da6');
    }

    
  },[darkMode]);

  return (
    <div className='app'>
      <div className='fixedBackground'></div>
      <Header darkMode={darkMode} toggleMode={toggleDarkMode} goToFunction={changeScrollTo}></Header>
      <Sidebar></Sidebar>
      <MainBody scrollTo={scrollTo}></MainBody>
      <div className='gap' style={{marginBottom:"200px"}}></div>
    </div>
      
  )
}

export default App
