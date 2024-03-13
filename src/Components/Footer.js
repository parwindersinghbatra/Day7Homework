import React from 'react'
import './Footer.css'
import Image from './../images/footerlogo.jpg'
import facebook from './../images/fa-facebook.png'
import Twitter from './../images/twitter.png'
import Instagram from './../images/instagram.png'




const Footer = () => {
  return (
    <>
        <div className='Footer_main'>
                <img src={Image} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt consequuntur amet culpa cum itaque neque.</p>
                <nav className="Footer_menu">
                <div className='Footer-links'>
                        <div><span>About</span></div>
                       <div><span>Careers</span></div>
                       <div><span>History</span></div>
                       <div><span>Services</span></div>
                       <div><span>Projects</span></div>
                       <div><span>Blog</span></div>
                    </div>
                <div className='Footer-links'>
                       <img src={facebook}/>
                       <img src={Instagram}/>
                       <img src={Twitter}/>
                    </div>
        </nav>
        </div>
    </>
  )
}

export default Footer
