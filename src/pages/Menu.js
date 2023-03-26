import React from 'react'
import {Outlet} from 'react-router-dom'
import AnimatedPage from './AnimatedPage'
import './Menu.css'

import MenuNavbar from './menu/MenuNavbar.js'

function Menu() {
  return (
    <AnimatedPage>
      <div id='menu'>
        <MenuNavbar />
        <div id='menu-items'>
          <Outlet />
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Menu