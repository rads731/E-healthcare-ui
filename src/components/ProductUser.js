import React, { Component } from 'react';
import  AddProduct  from './AddProduct';
import  DeleteProduct  from './DeleteProduct';
import  UpdateReport  from './UpdateReport';
import  GenerateReport  from './GenerateReport';
import Button from 'react-bootstrap/esm/Button';
import Alert from "react-bootstrap/Alert";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";

function ProductUser(props) {
    //const [loginResponse,setLoginResponse] = useState(Object);
    console.log(props)
        return (
            <div className="container-fluid">
                
                <Alert variant="success">
                    <Alert.Heading>
                        Hello {props} ! Welcome 
                    </Alert.Heading>
                </Alert>

               
               
              
       
                
            </div>
        )
    
}

export default ProductUser;