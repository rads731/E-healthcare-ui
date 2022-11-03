import React, { useEffect,useState,useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import Checkout from './Checkout';
import axios from 'axios';
import OrderStatus from '../OrderStatus';

function ViewMedicine(props) {
    const [Medicine,setMedicine] = useState([]);
   
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      const person = useMemo(
        () => ({  }),
        [] 
      );
    var renderDetail = () =>{ 
        axios.get('https://localhost:5001/getAllMedicine',axiosConfig)
        .then(response=>{
            console.log(response);
            if(response!==null && response.data!==null && response.data.length>0){
                 setMedicine(response.data);
            }
        })
        .catch(error=>{
           console.log(error)
        })
    }

    var addMedicine = () => {
           var id = document.getElementById('id')
        axios.post(`https://localhost:5001/api/Cart/Add/`,
        {
            "productId":id,
            "userId":props.ID
        },
        axiosConfig)
        .then(response=>{
            console.log(response);
            if(response!==null && response.data!==null && response.data.length>0){
                 setMedicine(response.data);
            }
        })
        .catch(error=>{
           console.log(error)
        })
    }

    var deleteMedicine = () => {
        var id = document.getElementById('id')
        axios.post(`https://localhost:5001/api/Cart/Delete/`,
        {
            "productId":id,
        },
        axiosConfig)
        .then(response=>{
            console.log(response);
            if(response!==null && response.data!==null && response.data.length>0){
                 setMedicine(response.data);
            }
        })
        .catch(error=>{
           console.log(error)
        })
    }
   useEffect=(()=>renderDetail,[person])


   return(
    <div className='container-md'>
        <div>
        <Table striped="columns">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Company</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Image URL</th>
          <th>Uses</th>
          <th>Expiry Date</th>
          <th>Select Medicines</th>
        </tr>
      </thead>
      <tbody>
        {
            Medicine.map((obj, index)=>{
                <tr data-index={index}>
                <td> <span id="id">{index}</span>
                    <input type="checkbox" value="id" />    &nbsp;   </td>
                  <td id="name">{obj[index].Name}</td>
                  <td id="company">{obj[index].Company}</td>
                  <td id="price">{obj[index].Price}</td>
                  <td id="quantity">{obj[index].Quantity}</td>
                  <td id="image">{obj[index].Image}</td>
                  <td id="uses">{obj[index].Uses}</td>
                  <td id="ExpiryDate">{obj[index].ExpiryDate}</td>
                  <td>
                     <button type="button" onClick={addMedicine} className="btn btn-primary btn-block mb-4">Select</button>
                     <button type="button" onClick={deleteMedicine} className="btn btn-primary btn-block mb-4">Select</button>
                  </td>
                </tr>
            })
        }
       
      </tbody>
    </Table>
    </div>
    <div>

    </div>
    <div>
    <Checkout Medicine={Medicine}/>
    </div>

    <div>
    <OrderStatus props={props}/>
    </div>
    </div>
   )
}
export default ViewMedicine;