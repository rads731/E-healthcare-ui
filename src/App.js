import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
         <h1>E-healthcare Portal</h1>
            <p>Welcome to E-healthcare Portal</p>
            <p>Please login by clicking on any one</p>
          <Home/>
      
    </div>
  );
}

export default App;
