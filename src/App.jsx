import React from 'react'
// import { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetail />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App

