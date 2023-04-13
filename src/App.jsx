import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Skills from './components/Skills';
import Work from './components/Work';
import DarkModeFilter from './components/DarkModeFilter';
import BackToTop from './components/BackToTop';


function App() {
  return (
    <div>
      <Sidenav />
      <DarkModeFilter />
      <BackToTop />
      <Main />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
