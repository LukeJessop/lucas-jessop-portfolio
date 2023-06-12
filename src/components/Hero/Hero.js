import React from 'react'
import './Hero.css'
import stamp from '../../assets/stamp.png'
function Hero() {
  return (
    <div className='hero-wrapper'>
      <div className='hero-title-text-wrapper'>
        
        <img alt='stamp' className='nav-stamp' src={stamp}/>
        <h2 className='hero-subheading'>The Amazing</h2>
        <h1 className='hero-title'>WEB-DEVELOPER</h1>
      </div>
    </div>
  )
}

export default Hero