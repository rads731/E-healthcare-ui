import React, { Component, useState } from 'react';
import {Table,Alert} from 'react-bootstrap';
import axios from 'axios';

function OrderStatus(props) {
        const [Order,setOrder] = useState([]);
        const [PlacedOn,setPlacedOn] = useState([])
        const [UserId,setUserId] = useState([])
        const [TotalAmount, setTotalAmount] = useState([])

    
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
         
        var renderDetail = () =>{ 
            axios.get(`https://localhost:5001/api/Cart/GetByUserID/1?userID=${props.props.ID}`,
            axiosConfig)
            .then(response=>{
                console.log(response);
                if(response!==null && response.data!==null && response.data.length>0){
                     setOrder(response.data);
                     
                }
            })
            .catch(error=>{
               console.log(error)
            })
        }
    
    
    
       return(
        <div className='container-fluid'>
            <div onLoad={renderDetail}>
              <br/><br/>
              {
              ['success'].map((variant) => (
                   <Alert key={variant} variant={variant}>
                        View your orders' information below!    
                   </Alert>
                 ))
              }
            <Table striped="columns">
          <thead>
            <tr>
                <th>Order Placement Date</th>
                <th>Product Name</th>
                <th>Total Amount</th>
                <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {
                Order.map((obj, index)=>{
                    <tr data-index={index}>
                        <td id="order-date">{obj[index].PlacedOn}</td>
                        <td id="total-amount">{obj[index].TotalAmount}</td>
                    </tr>
                })
            } */}
           <tr>
               <td>1st Dec, 2022</td>
               <td>Crocin</td>
               <td>$12,322.00</td>
               <td>Shipped</td>
           </tr>

           <tr>
               <td>22nd Nov, 2022</td>
               <td>Roxid</td>
               <td>$45,432.00</td>
               <td>Delivered</td>
           </tr>
          </tbody>
        </Table>
        </div>
        <div>
    
        </div>
        <div>
       
        </div>
        </div>
       )
}
export default OrderStatus;