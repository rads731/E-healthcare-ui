import React, { Component, useState} from 'react';
import {Form,Button,Modal,Alert} from 'react-bootstrap';

function Checkout() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="container-fluid">
          <br/><br/>
       {[
        'info',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Enter your information to make online payment!
        </Alert>
      ))}

    
<Form class="md-5">
          <Form.Group  controlId="formBasicEmail">
          <Form.Label>AccountNumber : </Form.Label>
              <Form.Control type="text"  
               placeholder="Enter Account Number" id="accountNumber"  />
               <br/>
              <Form.Text className="text-muted">
              We'll never share your account number with anyone else. 
              </Form.Text>
          </Form.Group>
                 


          <Form.Group  controlId="formBasicEmail">
          <Form.Label>Email id : </Form.Label>
              <Form.Control type="email"  
               placeholder="Enter Email ID" id="emailId"  />
               <br/>
              <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

  
          <input type="radio" id="html" name="fav_language" value="Hdfc"/>
            <label for="html">HDFC</label><br/>
<input type="radio" id="css" name="fav_language" value="ICICI"/>
<label for="css">ICICI</label><br/>
<input type="radio" id="javascript" name="fav_language" value="SBI"/>
<label for="javascript">SBI</label>
      
                 
          {['warning'].map((variant) => (
        <Alert key={variant} variant={variant}>
          You have to make a payment of $1,234.00
        </Alert>
      ))} 
                 
                 <Button variant="primary" >
             Click here to redirect to bank's payment page
             </Button>
          
              
          </Form>
    
      {/* <Button variant="primary" onClick={handleShow}>
             
      </Button> */}

      
        </div>
    )
}
export default Checkout;