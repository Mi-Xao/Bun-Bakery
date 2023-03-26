import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <nav id='menu-navbar'>menu
      <ul id='menu-options'>
        <li className='menu-li'>
          <Link className ='menu-body' to='/menu' id='menu-all'>all</Link>
        </li>
        <li className='menu-li'>
          <Link className ='menu-body' to='/menu/bread' id='menu-bread'>bread</Link>
        </li>
        <li className='menu-li'>
          <Link to='/menu/cakes' id='menu-cakes'>cakes</Link>
        </li>
        <li className='menu-li'>
          <Link to='/menu/drinks' id='menu-drinks'>drinks</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu