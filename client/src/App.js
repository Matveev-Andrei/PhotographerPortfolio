import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home'
import './App.css';
import Collections from './components/Collections';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Home path = "/" />
        <Collections path="/collection/:id" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
