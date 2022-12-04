import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Alert from "react-bootstrap/Alert";
import ViewMedicine from './Users/Cart/ViewMedicine';
import Funds from './Users/Funds';

function ProductUser(props) {
    //const [loginResponse,setLoginResponse] = useState(Object);
   // console.log(props)
        return (
            <div className="container-fluid">
                <div>
                    <br/><br/>
                {
               
               ['success'].map((variant) => (
                   <Alert key={variant} variant={variant}>
                   Welcome to your account!
                   </Alert>
                 ))
              }
                
              </div>
              <br/>
                <div>
                 <ViewMedicine /> 
                 {/* <Funds/>   */}
                </div>
            </div>
        )
    
}

export default ProductUser;