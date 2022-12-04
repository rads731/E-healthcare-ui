import React, { useEffect,useState,useMemo } from 'react';
import { Table, Button, Modal, Form}  from 'react-bootstrap';
import Checkout from './Checkout';
import axios from 'axios';
import OrderStatus from '../OrderStatus';
import Alert from "react-bootstrap/Alert";
import Search from '../Search';

function ViewMedicine() {
    const [Medicine,setMedicine] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(false);
    }
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
            "userId":78//props.ID
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
        <Search/>

      </div>
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
          <th>(De)Select Medicines</th>
        </tr>
      </thead>
    
      <tbody>
        <tr>
          <td>1</td>
          <td>Med 1</td>
          <td>Comp 1</td>
          <td>100</td>
          <td>1</td>
          <td>-</td>
          <td>Used in Fever</td>
          <td>01-11-2023</td>
          <td>
                     <button type="button" onClick={addMedicine} className="btn btn-primary btn-block mb-4">Select</button> &nbsp;
                     <button type="button" onClick={deleteMedicine} className="btn btn-danger btn-block mb-4" disabled>DeSelect</button>
                  </td>
          
        </tr>
        <tr>
        <td>2</td>
          <td>Med 2</td>
          <td>Comp 1</td>
          <td>140</td>
          <td>4</td>
          <td>-</td>
          <td>Used in Viral</td>
          <td>01-01-2024</td>
          <td>
                     <button type="button" onClick={addMedicine} className="btn btn-primary btn-block mb-4">Select</button> &nbsp;
                     <button type="button" onClick={deleteMedicine} className="btn btn-danger btn-block mb-4" disabled>DeSelect</button>
                  </td>
        </tr>
        <tr>
        <td>3</td>
          <td>Med 3</td>
          <td>Comp 3</td>
          <td>324</td>
          <td>6</td>
          <td>-</td>
          <td>Used in Malaria</td>
          <td>09-06-2023</td>
          <td>
                     <button type="button" onClick={addMedicine} className="btn btn-primary btn-block mb-4" disabled>Select</button> &nbsp;
                     <button type="button" onClick={deleteMedicine} className="btn btn-danger btn-block mb-4">DeSelect</button>
                  </td>
        </tr>
      </tbody>
        {/* {
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
        } */}
       
      
    </Table>
    
    
   
    </div>
    <div>

    </div>
    <div>
    <Button variant="primary" onClick={handleShow}>
      Checkout to place an order
      
    </Button>
    <Button variant="primary" onClick={handleShow}>
      View your Order's Status
      
    </Button>
     
           
    {/* <Checkout/>  <Checkout Medicine={Medicine}/> */}
    </div>

    <div>
    {/* <OrderStatus/> */}
    {/* <OrderStatus props={props}/> */}
    </div>
    </div>
   )
}
export default ViewMedicine;