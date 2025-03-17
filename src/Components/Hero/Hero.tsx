import React from 'react'
import './Hero.css'
import me from '../../assets/me.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={me} alt="" />
            <h1>Hello, I'm <span className='name'>Daniel</span> a Software Developer</h1>
            <p>I am a full-stack software developer with {yearsWorked} years of professional experience.
                Based in Santa Monica, CA, I have a strong passion for web development, game development,
                and mobile applications.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

var timeDiff = new Date().getTime() - new Date("2018-07-20").getTime();
const yearsWorked = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

export default Hero