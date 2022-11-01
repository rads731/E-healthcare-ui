import React, { Component } from 'react';

function AddProduct (props) {
  
        return (
            <div className="add-product">
                <form>
                    <p>
                        <label>Name : <input type="text" id="name" /></label>
                    </p>


                    <p>
                        <label>Medicine Name :</label> <input type="text" id="medicineName" />
                    </p>

                    <p>
                        <label>Price:</label> <input type="number" id="price" min="0" value="0" step="0.01" />
                    </p>

                    <p>
                        <label>Quantity</label> <input type="number" id="quantity" min="0" value="0" />
                    </p>

                    <p>
                        <label>ImageUrl:</label> <input type="text" id="imageurl" />
                    </p>

                    <p>
                    <label> Expire Date</label>
                            <input type="text" id="expiredate" />
                    </p>

                    <p>
                        <button type="button" className="btn btn-primary btn-block mb-4">Add Medicine</button>
                    </p>
                </form>
            </div>
        );
    
}

export default AddProduct;