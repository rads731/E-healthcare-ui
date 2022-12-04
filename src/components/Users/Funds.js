import React, { Component, useState } from 'react';
import axios from 'axios';
import {Button, Form,Alert,Modal,Table} from 'react-bootstrap';

function Funds() {
   const [AccountNumber, setAccountNumber] = useState('');
   const [Amount, setAmount] = useState('');
   const [Email, setEmail] = useState('');
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const handleAccountNumber = (e) => {
      setAccountNumber(e.target.value)
  }
  const handleAmount = (e) => {
      setAmount(e.target.value)
  }
  const handleEmail = (e) => {
      setEmail(e.target.value)
  }

   let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

   var putFunds = () =>{ 
      axios.put(`https://localhost:5001/api/Account/addFunds`,
        {
            "id":0,//props.id,
            "accNumber":AccountNumber,
            "amount":Amount,
            "email":Email
        },
        axiosConfig)
        .then(response=>{
            console.log(response);
            if(response!==null && response.data!==null){
                
            }
        })
        .catch(error=>{
           console.log(error)
        })
   }


   return (
      <div className="container-fluid">
        <div>
       

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Funds Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form class="md-5">
          <Form.Group  controlId="formBasicEmail">
          <Form.Label>AccountNumber : </Form.Label>
              <Form.Control type="text"  onChange={handleAccountNumber} value={AccountNumber}
               placeholder="Enter Account Number" id="accountNumber"  />
               <br/>
              <Form.Text className="text-muted">
              We'll never share your account number with anyone else. 
              </Form.Text>
          </Form.Group>
                 
          <Form.Group  controlId="formBasicEmail">
          <Form.Label>Medicine Company : </Form.Label>
              <Form.Control type="text"  onChange={handleAmount} value={Amount}
               placeholder="Enter Amount" id="amount"  />
               <br/>
              <Form.Text className="text-muted">
              We'll never share your Amount with anyone else. 
              </Form.Text>
          </Form.Group>

          <Form.Group  controlId="formBasicEmail">
          <Form.Label>Price : </Form.Label>
              <Form.Control type="email"  onChange={handleEmail} value={Email}
               placeholder="Enter Email ID" id="emailId"  />
               <br/>
              <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>
                 
             
                 
             
                  <Button variant="info" onClick={putFunds} >Add Funds</Button>
              
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

      <br/><br/>
      {[
        'info',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Welcome to the funds page! Below is the status of the current funds in the account. You can click on 'Add Funds' button.
        </Alert>
      ))}
    
      <Table striped="columns">
      <thead>
        <tr>
          <th>Account #</th>
          <th>Amount</th>
          <th>Email Id</th>
        </tr>
      </thead>
    
      <tbody>
        <tr>
          <td>12546546774425</td>
          <td>$123,413,231.00</td>
          <td>abc@gmail.com</td>
          
        </tr>
        <tr>
        <td>25345346323444</td>
          <td>$232,423,545.00</td>
          <td>efg@yahoo.in</td>

          
        </tr>
        <tr>
        <td>34213545452343</td>
          <td>$123,121,312.13</td>
          <td>xyz@gmail.com</td>
        
          
        </tr>
      </tbody>
       
    </Table>
    <Button variant="primary" onClick={handleShow}>
        Add New Funds Info
      </Button>
          </div>
      </div>
  );
}
export default Funds;