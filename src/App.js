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
         <h1>ABC Healthcare</h1>
            <p>
              <strong>
              To have a secure tour, please sign in or sign up
              </strong>
       
          <Home/>
          </p>
    </div>
  );
}

export default App;
