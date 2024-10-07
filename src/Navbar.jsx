import React from 'react'
import { Link  } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>The Dogo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">New Blog</Link>
      </div>
    </div>
  )
}

export default Navbar
