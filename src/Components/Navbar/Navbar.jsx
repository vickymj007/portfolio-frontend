import React, { useState } from 'react'
import "./navbar.css"
import {Link} from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../Assets/vignesh2.png"

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  // const handleClick = ()=>{
  //   window.scrollTo({
  //     behavior:"smooth",
  //     top:"2000"
  //   })
  // }

  return (
    <nav className='navbar'>
        <img src={logo} alt="Vignesh" />
        <div className="desktop_menu">
            <Link activeClass="active" to='intro' smooth={true} spy={true} offset={-100} duration={500} className='desktop_menu_list'>Home</Link>
            <Link activeClass="active" to='skills' smooth={true} spy={true} offset={-50} duration={500} className='desktop_menu_list'>Skills</Link>
            <Link activeClass="active" to='projects' smooth={true} spy={true} offset={-50} duration={500} className='desktop_menu_list'>Projects</Link>
            <Link activeClass="active" to='education' smooth={true} spy={true} offset={-50} duration={500} className='desktop_menu_list'>Education</Link>
            <Link activeClass="active" to='experience' smooth={true} spy={true} offset={-50} duration={500} className='desktop_menu_list'>Experience</Link>
            <Link activeClass="active" to='contact' smooth={true} spy={true} offset={-100} duration={500} className='desktop_menu_list'>Contact</Link>
        </div>
        {/* <button onClick={handleClick} className='desktop_menu_btn'> <FiMessageSquare/> Contact Me</button> */}
        <RxHamburgerMenu onClick={()=>setShowMenu(!showMenu)}/>
        <div className="nav_menu" style={{display:showMenu? "flex":"none"}}>
            <Link activeClass="active" to='intro' smooth={true} spy={true} offset={-100} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass="active" to='skills' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass="active" to='projects' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass="active" to='education' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Education</Link>
            <Link activeClass="active" to='experience' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass="active" to='contact' smooth={true} spy={true} offset={-50} duration={500} className='nav_menu_list' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar