import './About.scss'

var timeDiff = new Date().getTime() - new Date("2018-07-20").getTime();
const yearsWorked = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

const About = () => {
    return (
        <div id='about' className='about section'>
            <h2 className='section-heading'>About</h2>
            <p>I’m a full stack software developer with {yearsWorked} years of professional experience,
                based in Santa Monica, CA. I’ve built scalable single page applications and optimized performance
                across web platforms. Professionally, I’ve worked with Angular, TypeScript, .NET (C#), and various
                databases, and I also have project experience with Python, Django, React, and Next.js.
                I’m passionate about mentoring, pair programming, and continuously improving system efficiency</p>
        </div>
    )
}

export default About