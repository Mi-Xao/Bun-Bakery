import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import logo from '../images/logo-icon.png'

function Navbar() {
  return (
    <nav id='navbar'>
      <Link to='/' id='navbar-logo'>
        <img id='logo' src={logo} alt='logo' />
      </Link>
      <ul id='page-options'>
        <li className='navbar-li'>
          <Link to='/' id='navbar-home'>home</Link>
        </li>
        <li className='navbar-li'>
          <Link to='/menu' id='navbar-menu'>menu</Link>
        </li>
        <li className='navbar-li'>
          <Link to='/about' id='navbar-about'>about</Link>
        </li>
        <li className='navbar-li'>
          <Link to='/contact' id='navbar-contact'>contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar