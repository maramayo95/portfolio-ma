import React from 'react'
import './Header.css'
import portfPh from '../../Img/portfolio-img-final.jpg'
import {FaReact} from 'react-icons/fa'
const Header = () => {
  return (
    <section className="Header" id="home">
        <div className="infoHeader">
            <h1>Hi,</h1>
            <h2>I'm Matias Aramayo</h2>
            <h3>Frontend developer</h3>
        </div>

        <div className="imgPortfolio">
          <img className="portfolioPh" src={portfPh} alt="portfolio profile"/> 
        </div>

        <div className="gradient">

        </div>
    </section>
  )
}

export default Header