import React, { useState} from 'react';
import axios from 'axios';

function DeleteProduct()  {
    const [product, setProduct] = useState([]);
    const [Id, setId] = useState('');
   
    const handleId = (e) => {
        setId(e.target.value)
    }
    

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    var deleteProduct = () => {
        axios.post(`https://localhost:5001/api/admin/deleteMedicinebyId`,
            {
                "id":Id
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
                    <label>Name : &nbsp;</label>
                    <input type="text" id="id" onChange={handleId} value={Id} />
                </p>

                <p>
                        <button type="button" onClick={deleteProduct} className="btn btn-primary mb-4">Delete Medicine</button>
                    </p>
               
            </form>
        </div>
        );
}

export default DeleteProduct;