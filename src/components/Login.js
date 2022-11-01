import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import ProductAdmin from './ProductAdmin';
import ProductUser from './ProductUser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login () {
    const [Email, setEmail] =useState('');
    const [Password, setPassword] = useState('');
    const [Type, setType] = useState('user');
    const [redirectAdminPage, setRedirectAdminPage] = useState(false);
    const [redirectUserPage, setRedirectUserPage] = useState(false);
    const [loginResponse,setLoginResponse] = useState({});
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleType = (e) => {
        setType(e.target.value);
    }

    const loginCall = () => {

        const loginBody =JSON.stringify({
            "Email":Email,
            "Password":Password,
            "Type":Type
        })
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        axios.post('https://localhost:5001/api/user/login',loginBody, axiosConfig)
            .then(response=>{
                console.log(response);
                if(response!==null && response.data!==null && response.data.isAdmin===true){
                    setRedirectAdminPage(true);
                }
                else if(response!==null && response.data!==null && response.data.isAdmin===false){
                   setRedirectUserPage(true);
                }
                setLoginResponse(response.data);
            })
            .catch(error=>{
               console.log(error)
            })
    }

    
    return (
        <div  className="container-fluid" id="show-login">
        <Form>
          
            <Form.Group  controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={handleEmail} value={Email} 
                 placeholder="Enter email" />
                 <br/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
         

            
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
                <Form.Control onChange={handlePassword} type="password" value={Password}  />
            </Form.Group> 
           

            <div>
            <input onChange={handleType} type="radio" id="admin" name="type" value={Type} />
            <label htmlFor="admin">Admin</label>
            <input onChange={handleType} type ="radio" id="user" name="type" value={Type}/>
            <label htmlFor="user">User</label>
            </div>

            <button type="button" onClick={loginCall} className="btn btn-primary btn-block mb-4">Sign in</button>
        
                {
                    redirectAdminPage && 
                    <ProductAdmin loginResponse={loginResponse}/>
                }
                {
                    redirectUserPage &&
                    <ProductUser loginResponse={loginResponse} />
                }
         
        </Form>
    </div> 
    )
}

export default Login;