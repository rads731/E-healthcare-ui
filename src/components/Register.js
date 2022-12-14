import React, { Component, useState } from 'react';
import axios from 'axios';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import ProductUser from './ProductUser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function Register () {
    const [FirstName, setFiirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] =useState('');
    const [Password, setPassword] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address,setAddress] = useState('');
    const [redirectUserPage, setRedirectUserPage] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    const handleFirstName = (e) => {
        setFiirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleDateOfBirth = (e) => {
        setDateOfBirth(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const registerCall = () => {

        const registerBody =JSON.stringify({
            "FirstName" : FirstName,
            "LastName": LastName,
            "Email":Email,
            "Password":Password,
            "IsAdmin":false,
            "DateOfBirth":DateOfBirth,
            "Phone":Phone,
            "Address":Address
        })
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
          console.log(registerBody)
        axios.post('https://localhost:5001/api/user/signup',registerBody, axiosConfig)
            .then(response=>{
                console.log(response);
               if(response!==null && response.data!==null && response.data.isAdmin===false){
                   setRedirectUserPage(true);
                }
            })
            .catch(error=>{
               console.log(error)
            })
    }

    return (
        <div  className="container-fluid" id="show-register">
                      <Button variant="success" onClick={handleShow}>
        Click to sign up! 
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your info to sign up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* {
                ['warning'].map((variant) => (
                    <Alert key={variant} variant={variant}>
                     Fill in the values of  all the fields
                    </Alert>
                  )) */
                ['danger'].map((variant) => (
                    <Alert key={variant} variant={variant}>
                     Enter correct information to register
                    </Alert>
                  ))
              } 
        <form>
        <div className="form-outline mb-4">

                                      <label className="form-label" htmlFor="registerFirstName">First Name</label>
                                      <input onChange={handleFirstName} type="text" id="registerFirstName" value={FirstName} className="form-control" />
                                     
                                  </div>

                                  <div className="form-outline mb-4">
                                      <label className="form-label" htmlFor="registerLastName">Last name</label>
                                      <input onChange={handleLastName} type="text" id="registerLastName" value={LastName} className="form-control" />
                                  </div>


                                  <div className="form-outline mb-4">
                                      <label className="form-label" htmlFor="registerEmail">Email</label>
                                      <input onChange={handleEmail} type="email" id="registerEmail" value={Email} className="form-control" />
                                     
                                  </div>

                                  <div className="form-outline mb-4">
                                      <label className="form-label" htmlFor="registerPassword" required >Password</label>
                                      <input onChange={handlePassword} type="password" id="registerPassword" value={Password} className="form-control" />
                                      
                                  </div>

                                  <div className="form-outline mb-4">
                                      <label className="form-label" htmlFor="birthdate" value={DateOfBirth}>Birthday</label>
                                      <input onChange={handleDateOfBirth} type="date" id="birthday" name="birthday" className="form-control"/>
                                  </div>

                                  <div className="form-outline mb-4">
                                      <label className="form-label" htmlFor="registerPhone" required value={Phone}>Phone</label>
                                      <input onChange={handlePhone} type="number" id="registerPhone" className="form-control" maxLength="10" />
                                  </div>

                                  <div className="form-outline mb-4">
                                      <label className="form-label" htmlFor="registerAddress">Address</label>
                                      <textarea onChange={handleAddress} id="address" name="address" rows="4" cols="50" value={Address}>
                                      </textarea>
                                  </div>

                                  <div className="form-check d-flex justify-content-center mb-4">
                                      <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
                                          aria-describedby="registerCheckHelpText" />
                                      <label className="form-check-label" htmlFor="registerCheck">
                                          I have read and agree to the terms
                                      </label>
                                  </div>

                                  {/* <button type="button" onClick={registerCall} className="btn btn-primary btn-block mb-3">Sign Up</button>
                                  {
                  redirectUserPage &&
                  <ProductUser redirectUserPage={redirectUserPage} />
              } */}
                              
        </form>                     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={registerCall}>
            Save Changes and Register
            {
                  redirectUserPage &&
                  <ProductUser redirectUserPage={redirectUserPage} />
              }
          </Button>
        </Modal.Footer>
      </Modal>

                       
                             
        </div> 
          
    )
}

export default Register;