import React from 'react'
import "./Hero.css"

const  Hero = ({imagesrc}) => {
  return (
    <div className='hero'>
        <img src={imagesrc} alt="travel" className='hero_image' />
            <h1 className='hero_title'>Travel Made Simple</h1>
    </div>
  )
}

export default Hero;
