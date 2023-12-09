import React from 'react';
import Home from'./home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from './test';
// require('dotenv').config()


function App() {
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" component={Test}></Route>
    </Router>
    
  );
}

export default App;

