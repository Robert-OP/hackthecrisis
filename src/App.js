import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from 'pages/Home.js';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Navigation from 'components/Navigation';
import Signup from 'pages/Signup';
import SignOut from 'pages/SignOut';
import ScreeningForm from 'pages/ScreeningForm';

export const AppContext = React.createContext();

const App = () => {
  const [auth, setAuth] = React.useState(0);
  const [screening, setScreening] = React.useState(true);
  const [showLogin, setShowLogin] = React.useState(true);

  const onAuth = (element) => {
    return setAuth(element);
  };

  const onScreening = (isReady) => {
    setScreening(isReady);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          state: {
            auth,
            showLogin,
          },
          actions: {
            onAuth,
            setShowLogin,
          },
        }}
      >
        <Router>
          <Navigation isAuth={auth} />
          <Switch>
            <Route exact path="/" component={(props) => <Home />} />
            <Route
              path="/dashboard"
              component={(props) => (
                <Dashboard handleScreening={screening} handleAuth={onAuth} />
              )}
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
            <Route
              path="/screening"
              component={(props) => (
                <ScreeningForm
                  handleScreening={onScreening}
                  handleAuth={onAuth}
                />
              )}
            />
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
