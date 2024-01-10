import React, { useState } from 'react'
import "./navbar.css"
import {Link} from 'react-scroll'
import { FiMessageSquare } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  const handleClick = ()=>{
    window.scrollTo({
      behavior:"smooth",
      top:"2000"
    })
  }

  return (
    <nav className='navbar'>
        <h2>V</h2>
        <div className="desktop_menu">
            <Link activeClass="active" to='intro' smooth={true} spy={true} offset={-100} duration={500} className='desktop_menu_list'>Home</Link>
            <Link activeClass="active" to='skills' smooth={true} spy={true} offset={-50} duration={500} className='desktop_menu_list'>My Skills</Link>
            <Link activeClass="active" to='projects' smooth={true} spy={true} offset={-50} duration={500} className='desktop_menu_list'>Portfolio</Link>
            <Link activeClass="active" to='contact' smooth={true} spy={true} offset={-100} duration={500} className='desktop_menu_list'>Contact</Link>
        </div>
        <button onClick={handleClick} className='desktop_menu_btn'> <FiMessageSquare/> Contact Me</button>
        <RxHamburgerMenu onClick={()=>setShowMenu(!showMenu)}/>
        <div className="nav_menu" style={{display:showMenu? "flex":"none"}}>
            <Link activeClass="active" to='intro' smooth={true} spy={true} offset={-100} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='skills' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>My Skills</Link>
            <Link activeClass="active" to='projects' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass="active" to='contact' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar