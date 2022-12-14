import React, {  useState } from 'react';
import axios from 'axios';

function UpdateProduct(){
    const [product, setProduct] = useState([]);
    const [Name, setName] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [Price, setPrice] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [ImageUrl, setImageUrl] = useState('')
    const [Uses, setUses] = useState('');
    const [ExpireDate, setExpiryDate] = useState('');
    
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleCompany = (e) => {
        setCompanyName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }
    const handleImageUrl = (e) => {
        setImageUrl(e.target.value)
    }
    const handleExpireDate = (e) => {
        setExpiryDate(e.target.value)
    }

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    var addProduct = () => {
        axios.put(`https://localhost:5001/api/admin/updateMedicine`,
            {
                "name":Name,
                "companyName":CompanyName,
                "price":Price,
                "quantity":Quantity,
                "imageUrl":ImageUrl,
                "uses":Uses,
                "expireDate":ExpireDate
            },
            axiosConfig)
            .then(response=>{
                console.log(response);
                if(response!==null && response.data!==null){
                     setProduct(response.data);
                }
            })
            .catch(error=>{
               console.log(error)
            })
    } 
        
    return (
            <div className="md-4">
                <form>
                    <p>
                        <label>Name : </label>
                        <input type="text" id="name" onChange={handleName} value={Name} />
                    </p>


                    <p>
                        <label>Medicine Company :</label> <input type="text" 
                        id="medicineName" onChange={handleCompany} value={CompanyName}/>
                    </p>

                    <p>
                        <label>Price:</label> 
                        <input type="number" id="price" onChange={handlePrice} value={Price} min="0" step="0.01" />
                    </p>

                    <p>
                        <label>Quantity</label> 
                        <input type="number" id="quantity" onChange={handleQuantity} value={Quantity} min="0"  />
                    </p>

                    <p>
                        <label>ImageUrl:</label> 
                        <input type="file" id="myFile" name="filename"/>
                        
                    </p>

                    <p>
                    <label> Expire Date</label>
                            <input type="date" id="expiredate" onChange={handleExpireDate} value={ExpireDate}  />
                    </p>

                    <p>
                        <button type="button" onClick={addProduct} className="btn btn-primary mb-4">Update Medicine</button>
                    </p>
                </form>
            </div>
        );
    }

export default UpdateProduct;