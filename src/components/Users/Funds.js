import React, { Component, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Funds(props) {
   const [AccountNumber, setAccountNumber] = useState('');
   const [Amount, setAmount] = useState('');
   const [Email, setEmail] = useState('');

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
            "id":props.id,
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
          <form>
              <p>
                  <label>AccountNumber : </label>
                  <input type="text" id="accountNumber" 
                  onChange={handleAccountNumber} value={AccountNumber} />
              </p>


              <p>
                  <label>Medicine Company :</label> <input type="text" 
                  id="medicineName" onChange={handleAmount} value={Amount}/>
              </p>

              <p>
                  <label>Price:</label> 
                  <input type="text" id="email" onChange={handleEmail} value={Email} />
              </p>

              
              <p>
                  <button type="button" onClick={putFunds} className="btn btn-primary btn-block mb-4">Add Medicine</button>
              </p>
          </form>
      </div>
  );
}
export default Funds;