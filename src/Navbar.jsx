import React from 'react';
import { Link  } from 'react-router-dom';
import Create from './Create';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>The Dogo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create" element={<Create />} >New Blog</Link>
      </div>
    </div>
  )
}

export default Navbar
