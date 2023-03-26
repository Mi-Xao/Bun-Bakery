import React from 'react'
import './Contact.css'
import './Page.css'
import AnimatedPage from './AnimatedPage'

function Contact() {
  return (
    <AnimatedPage>
      <div className='body' id='contact'>
        <h>Contact</h>
        <p>Phone: (888) 888-8888
        </p>
      </div>
    </AnimatedPage>
  )
}

export default Contact