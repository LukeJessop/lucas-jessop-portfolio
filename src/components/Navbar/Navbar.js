import React from 'react'
import './Navbar.css'

function Navbar() {
  const buttons = [
    {
      title: 'About',
      id: 'about-wrapper'
    },
    {
      title: 'Projects',
      id: 'projects-wrapper'
    },
    {
      title: 'Socials',
      id: 'footer-container'
    },
  ]

  const clickHandler = (id) => {
    let element = document.getElementsByClassName(id)
    let domElement = element.item(id)
    domElement.scrollIntoView()
  }
  return (
    <div className='nav-wrapper'>
      <div className='nav-container'>
        <div className='nav-button-wrapper'>
          <h1 style={{color: 'black'}}>Welcome To Lucas Jessop's Resume!</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar