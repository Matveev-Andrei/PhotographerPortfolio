import React from 'react';
import { Link, Router } from '@reach/router';
import Home from './components/Home'
import './App.css';
import Collections from './components/Collections'

function App() {
  return (
    <div>
      <Router>
        <Home path = "/" />
        <Collections path="/collection/:id" />
      </Router>
    </div>
  );
}

export default App;
