import React from 'react'
import './Hero.scss'
import me from '../../assets/me.svg'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={me} alt="" />
            <h1>Hello, I'm <span className='name'>Daniel Seflinger</span> a Software Developer</h1>
            <p>I am a full-stack software developer with {yearsWorked} years of professional experience.
                Based in Santa Monica, CA, I have a strong passion for web development, game development,
                and mobile applications.</p>
            {/* todo should i delete these?
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div> */}
        </div>
    )
}

var timeDiff = new Date().getTime() - new Date("2018-07-20").getTime();
const yearsWorked = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

export default Hero