import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainBody from './components/MainBody'
import './index.css'
import backgroundImageDark from './assets/backgroundDark.jpg'
import backgroundImageLight from './assets/backgroundBright.jpg'

function App() {

  // Declare and set darkMode Variable
  const [darkMode,setDarkMode] = React.useState(false);
  function toggleDarkMode(){
    setDarkMode(oldDarkMode => !oldDarkMode);
  }

  // Define scrollTo function to be passed in props
  const [scrollTo, setScrollTo]= React.useState(".Sidebar");
  function changeScrollTo(classname) {
    setScrollTo(prevScrollTo => {return classname});
  }

  // function for parallax scrolling of background image 
  useEffect(() => {
    let background = document.querySelector(".fixedBackground");
    function handleScroll() {
      const scrollValueFromTop = window.scrollY;
      background.style.top = `${-scrollValueFromTop * 0.10}px`; // Adjust multiplier for desired parallax effect
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function for setting colors of background color based on DarkMode
  useEffect(() => {
    let background = document.querySelector(".fixedBackground");
    if(darkMode){
      background.style.backgroundImage = `url(${backgroundImageDark})`;
      document.documentElement.style.setProperty('--font-color', '#ffffff');
      document.documentElement.style.setProperty('--secondary-color', '#bf85d6');
    }
    else{
      background.style.backgroundImage = `url(${backgroundImageLight})`;
      document.documentElement.style.setProperty('--font-color', '#000000');
      document.documentElement.style.setProperty('--secondary-color', '#567da6');
    }
  },[darkMode]);

  return (
    <div className='app'>
      <div className='fixedBackground'></div>
      <Header darkMode={darkMode} toggleMode={toggleDarkMode} goToFunction={changeScrollTo}></Header>
      <div className='wrapper'>
        <Sidebar></Sidebar>
        <MainBody scrollTo={scrollTo}></MainBody>
      </div>
    </div>
      
  )
}

export default App
