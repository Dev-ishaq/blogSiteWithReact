import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';

const App = () => {
  const title = "App component";
  const likes = 50;
  const site = "alphatech247solutions.com";

  return (
    <div className='app'>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App

