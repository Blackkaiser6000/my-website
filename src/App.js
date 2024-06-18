import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import the styles


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
