﻿import React, { Component } from 'react';

function UpdateReport(){
    
        return (
            <div className="update-report">
                <form>
                    <p>
                        <label>Name : <input type="text" id="name" /></label>
                    </p>


                    <p>
                        <label>Medicine Name : <input type="text" id="medicineName" /></label>
                    </p>

                    <p>
                        <label>Price: <input type="number" id="price" min="0" value="0" step="0.01" />Price</label>
                    </p>

                    <p>
                        <label>Price: <input type="number" id="quantity" min="0" value="0" />Quantity</label>
                    </p>

                    <p>
                        <label>Price: <input type="text" id="imageurl" />Image Url</label>
                    </p>

                    <p>
                        <label>Price: <input type="text" id="expiredate" />Expire Date</label>
                    </p>

                    <p>
                        <button type="button" className="btn btn-primary btn-block mb-4">Add Medicine</button>
                    </p>
                </form>
            </div>
        );
    }

export default UpdateReport;