import React from 'react'
import './Hero.scss'
import me from '../../assets/me.svg'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={me} alt="" />
            <h1>Hello, I'm <span className='gradient-text'>Daniel Seflinger</span> a Software Developer</h1>
            {/* todo should i delete these?
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div> */}
        </div>
    )
}

export default Hero