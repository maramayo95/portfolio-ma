import React from 'react'
import './Footer.css'
import {FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa' 

const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <ul className="social-media">
          <li><a href="https://github.com/maramayo95/" target="_blank"><FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/matiasaramayo-frontendjr/" target="_blank"><FaLinkedinIn/></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=+5401153271241&text=Hi,I'm interesting with work with you!" target="_blank"><FaWhatsapp/> </a></li>
        </ul>
    </div>
    
    <div className="copyright-footer">
      <p>Copyright © 2021 Matias Aramayo All Rights Reserved</p>
    </div>

    </>
  )
}

export default Footer