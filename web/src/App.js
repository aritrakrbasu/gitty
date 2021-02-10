import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from'./profile'; 
import Home from'./home'; 
import Repos from'./repos'; 
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/repo" component={Repos}></Route>
    </Router>
    
  );
}

export default App;

