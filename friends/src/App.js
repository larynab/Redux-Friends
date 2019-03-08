import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <h1>Friends</h1>
      <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Friend List</Link>
          </li>
      </ul>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={Protected} />
      </div>
      </Router>
    );
  }
}

export default App;
