import React, { Component, useState } from 'react';
import Table from 'react-bootstrap/Table';
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
            <Table striped="columns">
          <thead>
            <tr>
                <th>Order Placement Date</th>
                <th>Total Amount</th>
             
            </tr>
          </thead>
          <tbody>
            {
                Order.map((obj, index)=>{
                    <tr data-index={index}>
                        <td id="order-date">{obj[index].PlacedOn}</td>
                        <td id="total-amount">{obj[index].TotalAmount}</td>
                    </tr>
                })
            }
           
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