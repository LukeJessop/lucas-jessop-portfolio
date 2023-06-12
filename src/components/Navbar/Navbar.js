import React from 'react'
import './Navbar.css'

function Navbar() {
  const buttons = [
    {
      title: 'About'
    },
    {
      title: 'Resume'
    },
    {
      title: 'Projects'
    },
    {
      title: 'Socials'
    },
  ]
  return (
    <div className='nav-wrapper'>
      <div className='nav-container'>
        {buttons.map((item, index) => {
          return (
            <button key={index} className='nav-button'>
              {item.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar