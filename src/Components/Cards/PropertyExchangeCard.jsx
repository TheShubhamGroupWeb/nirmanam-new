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
        <div className="col-md-5 " >
        <Card >
      <Card.Img variant="top" src={ExchangeCardImg} />
      <Card.Body>
        <Card.Title>Real Estate Property Exhange</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
