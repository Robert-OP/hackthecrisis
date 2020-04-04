import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from 'pages/Home.js';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Navigation from 'components/Navigation';
import Signup from 'pages/Signup';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={(props) => <Home />} />
          <Route path="/dashboard" component={(props) => <Dashboard />} />
          <Route path="/login" component={(props) => <Login />} />
          <Route path="/signup" component={(props) => <Signup />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
