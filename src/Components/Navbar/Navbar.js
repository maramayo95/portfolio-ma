import { useEffect, useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";

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
      <li className="items">Home</li>
      <li className="items">About Me</li>
      <li className="items">Skills</li>
      <li className="items">Projects</li>
      <li className="items">Contact</li>
    </ul>
      )}
      <div className="line-nav">
      </div>

    <button onClick={toggleNav} className="btn"><FaBars/></button>
    </nav>
  )
}

export default Navbar