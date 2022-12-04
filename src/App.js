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
import ProductUser from './components/ProductUser';
import Funds from './components/Users/Funds';
import Checkout from './components/Users/Cart/Checkout';
import ViewMedicine from './components/Users/Cart/ViewMedicine';
import OrderStatus from './components/Users/OrderStatus';
import ProductAdmin from './components/ProductAdmin';

function App() {
  return (
    <div className="App">
          {/* <h1>ABC Healthcare</h1>
            <p>
              <strong>
              To have a secure tour, please sign in or sign up
              </strong>
        
          <Home/> 
          </p> */}
          {/* <ProductUser/> */}
          {/* <Funds/> */}
           {/* <Checkout/> */}
           {/* <OrderStatus/> */}
           <ProductAdmin/>
    </div>
  );
}

export default App;
