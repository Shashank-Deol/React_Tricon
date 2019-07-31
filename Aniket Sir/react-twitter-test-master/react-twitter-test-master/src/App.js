import React from 'react';
import logo from './logo.svg';
//import {HomePage} from './homepage/homepage';
import {About} from './About/About';
import {Users} from './Users/Users';
import {Router} from './Router/Router';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/About">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/about/About" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
          );
  }
}

export default App;
