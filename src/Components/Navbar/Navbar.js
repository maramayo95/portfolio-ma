import React from 'react'
import { useEffect, useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])

      



    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <Link className="items" to="home" smooth={true} duration={1000}>Home</Link>
      <Link className="items" to="about-me" smooth={true} duration={1000}>About</Link>
      <Link className="items" to="skills" smooth={true} duration={1000}>Skills</Link>
      <Link className="items" to="projects" smooth={true} duration={1000}>Projects</Link>
      <Link className="items" to="contact" smooth={true} duration={1000}>Contact</Link>
      </ul>
      )}
      <div className="line-nav">
      </div>

    <button onClick={toggleNav} className="btn"><FaBars/></button>
    </nav>
  )
}

export default Navbar