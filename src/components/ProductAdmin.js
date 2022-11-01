import React, { Component } from 'react';
import  AddProduct  from './Admin/AddProduct';
import  DeleteProduct  from './Admin/DeleteProduct';
import  UpdateProduct  from './Admin/UpdateProduct';
import  GenerateReport  from './Admin/GenerateReport';
import Button from 'react-bootstrap/esm/Button';
import Alert from "react-bootstrap/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ProductAdmin(props) {
        console.log(props)
        return (
            <div className="container-fluid">
                
                <Alert variant="success">
                    <Alert.Heading>
                        Hello ! Welcome 
                    </Alert.Heading>
                </Alert>
               <div className='md-6'>
                <Card >
             
                <Card.Body>
                    <Card.Title>Add  Product</Card.Title>
                    <Card.Text>
                        <AddProduct props={props}/>
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
                <div className='md-6'>
        <Card >
          
            <Card.Body>
                <Card.Title>Delete Product</Card.Title>
                <Card.Text>
                    <DeleteProduct props={props}/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
        <div className='md-6'>
        <Card >
    
      <Card.Body>
        <Card.Title>Update Product</Card.Title>
        <Card.Text>
        <UpdateProduct props={props}/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='md-6'>
        <Card >

      <Card.Body>
        <Card.Title>Generate Report</Card.Title>
        <Card.Text>
        <GenerateReport props={props} />
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
            </div>
        );
    }

export default ProductAdmin;

