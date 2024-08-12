import React from 'react'; // Ensure this is at the top
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Containers/Navbar/Navbar';
import Banner from '../Containers/Banner/Banner';
import Skills from '../Containers/Skills/Skills';
import { Projects } from '../Containers/Projects/Projects';
import Contact from '../Containers/Contact/ContactForm';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;