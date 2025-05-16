import React from 'react';
import Header from './components/Header';
import Achievements from './components/Achievements';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Achievements />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
