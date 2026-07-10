import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;