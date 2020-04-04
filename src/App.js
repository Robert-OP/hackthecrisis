import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js';
import DashboardLogin from './pages/DashboardLogin';
import Signup from './pages/Signup';

import ButtonAppBar from './components/AppBar';
function App() {
  return (
    <div className="App">
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={(props) => <Home />} />
          <Route path="/dashboard" component={(props) => <DashboardLogin />} />
          <Route path="/signup" component={(props) => <Signup />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
