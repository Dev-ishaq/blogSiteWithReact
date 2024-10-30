import React from 'react'
// import { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';

const App = () => {
  const title = "App component";
  const likes = 50;
  const site = "alphatech247solutions.com";

  return (
    <Router>
      <div className='app'>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App