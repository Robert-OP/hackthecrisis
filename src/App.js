import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from 'pages/Home.js';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Navigation from 'components/Navigation';
import Signup from 'pages/Signup';
import SignOut from 'pages/SignOut';

const App = () => {
  const [auth, setAuth] = React.useState(0);

  const onAuth = (element) => {
    return setAuth(element);
  };

  return (
    <div className="App">
      <Router>
        <Navigation isAuth={auth} />
        <Switch>
          <Route exact path="/" component={(props) => <Home />} />
          <Route
            path="/dashboard"
            component={(props) => <Dashboard handleAuth={onAuth} />}
          />
          <Route
            path="/login"
            component={(props) => <Login handleAuth={onAuth} />}
          />
          <Route
            path="/signup"
            component={(props) => <Signup handleAuth={onAuth} />}
          />
          <Route
            path="/signout"
            component={(props) => <SignOut handleAuth={onAuth} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
