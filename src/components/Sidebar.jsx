import React from 'react'
import './Sidebar.css'
import userImage from '../assets/DSLR.jpg'
import linkedinIcon from "../assets/social/linkedin.png"
import githubIcon from "../assets/social/github.png"
import mailIcon from "../assets/social/mail.svg"
import xIcon from "../assets/social/x.png"

export default function Sidebar(){
    return(
        <div className="Sidebar">
            <div className='sidebar-relative'>
                <div className='userImage'>
                    <img src={userImage} alt="User Image" />
                </div>
                <div className='basicInfo'>
                    <h2 className='sidebar-name'>Hemant Bagaria</h2>
                    <h3 className='sidebar-role'>FrontEnd Developer</h3>
                </div>
                <section className='Experience'>
                    <p>High level experience in web design and development knowledge.</p>
                </section>
                <nav className='SocialIcons'>
                    <li><a href="https://www.linkedin.com/in/hemant-bagaria-748707249/" target="_blank" className='LinkedIn'><img id='linkedin' className='social--icons' src={linkedinIcon} alt="" /></a></li>
                    <li><a href="https://github.com/Hemant-29" target="_blank" className='GitHub'><img id='github' className='social--icons' src={githubIcon}  alt="GitHub" /></a></li>
                    <li><a href="mailto:hemantsmail29@gmail.com" target="_blank" className='Email'><img id='email' className='social--icons' src={mailIcon} alt="Email" /></a></li>
                    <li><a href="https://x.com/its_Hemant_" target="_blank" className='Twitter'><img id='twitter' className='social--icons' src={xIcon}  alt="Twitter" /></a></li>
                </nav>
                <a href="tel:+91-7042879949" id='contactMe'><button >Contact Me</button></a>
            </div>
        </div>
    )
}