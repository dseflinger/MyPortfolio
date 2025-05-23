import './Hero.scss'
import me from '../../assets/me.svg'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={me} alt="" />
            <h1>Hello, I'm <span className='gradient-text'>Daniel Seflinger</span> a Software Developer</h1>
        </div>
    )
}

export default Hero