import React, { Component } from 'react';
import Login from '../../src/components/Login.js';
import Register from '../../src/components/Register.js';

function Home () {


    return (
        <div className="md-6">
           
        

              <Login/>
       
           
         
            {/* <div style={{ display: (this.state.showRegister ? 'block' : 'hide') }} className="" id="show-register"> */}
           <Register/>
        </div>
    );
  }
export default Home;
