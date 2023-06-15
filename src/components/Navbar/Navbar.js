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
        {buttons.map((item, index) => {
          return (
            <button key={index} onClick={() => clickHandler(item.id)} className='nav-button'>
              {item.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar