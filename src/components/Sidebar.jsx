import React from 'react'
import './Sidebar.css'
import userImage from 'src/assets/DSLR.jpg'

export default function Sidebar(){
    return(
        <div className="Sidebar">
            
            <div className='userImage'>
                <img src={userImage} alt="User Image" />
            </div>
            <div className='basicInfo'>
                <h2>Hemant Bagaria</h2>
                <h3>FrontEnd Developer</h3>
            </div>
            <section className='Experience'>
                <p>High level experience in web design and development knowledge.</p>
            </section>
            <nav className='SocialIcons'>
                <li><a href="https://www.linkedin.com/in/hemant-bagaria-748707249/" target="_blank" className='LinkedIn'><img id='linkedin' className='social--icons' src="src\assets\social\linkedin.png" alt="" /></a></li>
                <li><a href="https://github.com/Hemant-29" target="_blank" className='GitHub'><img id='github' className='social--icons' src="src\assets\social\github.png" alt="GitHub" /></a></li>
                <li><a href="mailto:hemantsmail29@gmail.com" target="_blank" className='Email'><img id='email' className='social--icons' src="src\assets\social\mail.svg" alt="Email" /></a></li>
                <li><a href="https://x.com/its_Hemant_" target="_blank" className='Twitter'><img id='twitter' className='social--icons' src="src\assets\social\x.png" alt="Twitter" /></a></li>
            </nav>
            <a href="tel:+91-7042879949"><button id='contactMe'>Contact Me</button></a>
        </div>
    )
}