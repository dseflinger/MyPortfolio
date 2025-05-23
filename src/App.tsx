import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import ProfessionalExperience from './Components/ProfessionalExperience/ProfessionalExperience'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ProfessionalExperience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App