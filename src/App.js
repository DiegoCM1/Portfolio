import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
