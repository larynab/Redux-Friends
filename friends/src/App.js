import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <h1>Friend List</h1>
      <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
      </ul>
      <Route path="/login" component={Login} />
      </div>
      </Router>
    );
  }
}

export default App;
