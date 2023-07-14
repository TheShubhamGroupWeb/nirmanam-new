import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomButton from '../Button/CustomButton';
import ExchangeCardImg from '../../images/homepage/cards/landing-page--02.jpg'
import { Link } from 'react-router-dom';

import './cardStyle.css'


function PropertyExchangeCard({url,heading}) {

  const handleButtonValue = () =>{
    alert("Clicked...!")
   
  }
  return (
    <>  
        {/* <div className="container">
          <div className="row ">
        <div className="col-md-4 d-flex"> */}
        <div className="col-md-5" style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
        <Card >
      <Card.Img variant="top" src={ExchangeCardImg} />
      <Card.Body>
        <Card.Title>Real Estate Property Exchange</Card.Title>
        <Card.Text>
        designed to revolutionize the way you buy, sell, or exchange properties in India. Barter or Swap of properties or house swapping is allowed under Indian Property Law and we provide you with best of the options to choose your Barter from utmost utilization and Return on Investment (ROI) to their Real Estate Property. 
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        {/* <CustomButton customStyle={"success"} handleButtonValue={handleButtonValue}>Read More</CustomButton> */}
        <Link className='card-style' to={'/real-estate-property-trading'}>Read More</Link>
      </Card.Body>
    </Card>
    </div>

    {/* </div>
    </div>      
    </div> */}
    </>
  )
}


export default PropertyExchangeCard
