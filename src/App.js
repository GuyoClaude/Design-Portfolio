import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Navbar from './components/Navbar'
import Service from './components/Service'
import MyWork from './components/MyWork'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div>
          <Router>
            <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/projects" component={MyWork} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                
              </Switch>
          </Router>
        </div>
  );
}

export default App;
