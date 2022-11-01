import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Alert from "react-bootstrap/Alert";
import ViewMedicine from './Users/Cart/ViewMedicine';

function ProductUser(props) {
    //const [loginResponse,setLoginResponse] = useState(Object);
    console.log(props)
        return (
            <div className="container-fluid">
                
                <Alert variant="success">
                    <Alert.Heading>
                        Hello  ! Welcome 
                    </Alert.Heading>
                </Alert>

               
               
              
       
                <ViewMedicine props={props.loginResponse}/>
            </div>
        )
    
}

export default ProductUser;