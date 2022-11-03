import React, { Component } from 'react';
import Login from '../../src/components/Login.js';
import Register from '../../src/components/Register.js';
import '../App.css';

function Home () {


    return (
        <div className="lg-12">
          <div className='float-child'>
            <Login/>
            </div>
            <div className='float-child'>
            <Register/>
            </div>
          
      
        </div>
    );
  }
export default Home;
