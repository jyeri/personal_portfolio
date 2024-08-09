import './App.css'
import { NavBar } from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './Components/Banner'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { ContactMe } from './Components/contactme'

function App() {

  return (
    <>
      <div className='App'>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </>
  )
}

export default App
