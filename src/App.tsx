import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import ProfessionalExperience from './Components/ProfessionalExperience/ProfessionalExperience'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='page-container'>
        <Hero />
        <About />
        <ProfessionalExperience />
        <Projects />
        <Contact />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App