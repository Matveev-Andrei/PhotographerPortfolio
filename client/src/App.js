import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home'
import './App.css';
import Collections from './components/Collections';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Profile from './components/Profile';

function App() {
  return (
    <div style={{backgroundColor : "bisque"}}>
      <Router>
        <Home path = "/" />
        <Collections path="/collection/:id" />
        <About path="/about" />
        <Services path ="/services" />
        <Contact path="/contact" />
        <Login path="/login" />
        <SignUp path="/signup" />
        <Profile path="/profile" />
      </Router>
    </div>
  );
}

export default App;
