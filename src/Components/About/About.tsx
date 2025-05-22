import React from 'react'
import './About.scss'

var timeDiff = new Date().getTime() - new Date("2018-07-20").getTime();
const yearsWorked = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

const About = () => {
    // todo update about me
    return (
        <div id='about' className='about section'>
            <h2 className='section-heading'>About Me</h2>
            <p>I am a full-stack software developer with {yearsWorked} years of professional experience.
                Based in Santa Monica, CA, I have a strong passion for web development, game development,
                and mobile applications.</p>
        </div>
    )
}

export default About