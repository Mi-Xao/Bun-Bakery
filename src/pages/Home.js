import React from 'react'
import './Home.css'
import logo_full from '../images/logo.png'
import AnimatedPage from './AnimatedPage'

function Home() {
  return (
    <AnimatedPage>
      <img id ='full_logo' src={logo_full} alt='logo' />
    </AnimatedPage>
  )
}

export default Home