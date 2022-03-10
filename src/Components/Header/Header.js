import React from 'react'
import './Header.css'
import portfPh from '../../Img/portfolio-profile-nbg.png'
import {FaReact} from 'react-icons/fa'
const Header = () => {
  return (
    <div className="Header">
        <div className="infoHeader">
            <h1>Hi,</h1>
            <h2>I'm Matias Aramayo</h2>
            <h3>A Frontend <FaReact className="react"/> developer</h3>
        </div>

        <div className="imgPortfolio">
          <img className="portfolioPh" src={portfPh}/>
        </div>

        <div className="gradient">

        </div>
    </div>
  )
}

export default Header