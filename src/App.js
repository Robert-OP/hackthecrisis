import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.js";
import DashboardLogin from "./pages/DashboardLogin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ButtonAppBar from "./components/AppBar";
function App() {
  return (
    <div className='App'>
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/dashboard'>
            <DashboardLogin />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
