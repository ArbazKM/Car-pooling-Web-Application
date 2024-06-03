// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import RideDetails from './pages/RideDetails';
import RideSearch from './pages/RideSearch';
import SignUp from './pages/SignUp';
import CustomNavbar from './Navbar'; // Corrected path
import { Register } from './pages/Register';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/ride/:id" component={RideDetails} />
        <Route path="/rides" component={RideSearch} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
