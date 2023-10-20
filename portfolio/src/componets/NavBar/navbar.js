import React from 'react';
import './navbar.css';
import logo from '../../assets/nomad_white.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Experience</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuIMG" />Contact Me/</button>
    </nav>
  )
}

export default Navbar;
    
        