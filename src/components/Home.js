import React, { Component } from 'react';
import Login from '../../src/components/Login.js';
import Register from '../../src/components/Register.js';
import '../App.css';
import Carousel from "react-bootstrap/Carousel";


function Home () {


    return (
        <div className="lg-12">
          <div className='float-child'>
            <Login/>
             <br/>
            <Register/>
            <br/>
            </div>
            <div class="row">
        <div class="col"></div>
        <div class="col-8">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://images.squarespace-cdn.com/content/v1/521b6d61e4b0152816df6944/1487770880197-17ZPIPEVII5D9FKFWV8H/download+%281%29.jpg?format=1500w"
                                alt="First slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://abchealthcare.com/wp-content/uploads/2020/04/LogoV1-01.png"
                                alt="Second slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media-exp1.licdn.com/dms/image/C561BAQGo70-Dexs1_w/company-background_10000/0/1519796496231?e=2159024400&v=beta&t=I9x6xmQkFia0ZZ2n4pQ2ylg5i4iYB_9vgSkb8FkBhsc"
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            

                        </Carousel>
        </div>
        <div class="col"></div>

        <div class="row">
          <div class="col"></div>
          <div class="col-8">

            <p class="lead">
                  <h5>Welcome To ABC HealthCare!</h5>
            </p>
            
            
            <p class="lead">
A one-stop solution for all your clinical problems!

            </p>
            <p class="lead">
            ABC Healthcare is a Mumbai-based pharma company which sales medicines throughout 
India as per the demand they receives from multiple hospitals and clinics. They have 
been operating in India since last 15 years. ABC Healthcare offers home care services to people.
            </p>
          </div>
          <div class="col"></div>
        </div>
      </div>
      
        </div>
    );
  }
export default Home;
