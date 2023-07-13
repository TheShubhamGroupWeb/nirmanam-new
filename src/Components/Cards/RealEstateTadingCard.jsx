import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomButton from '../Button/CustomButton';
import TradingCardImg from '../../images/homepage/cards/landing-page--02.jpg'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import './cardStyle.css'

function RealEstateTradingCard({url,heading}) {

  const handleButtonValue = () =>{
    alert("Clicked...!")
   
  }


  const CustomLink = styled.div`
    width: fit-content;
     text-decoration: none;
     background-color: green;
  color: #fff;
  padding: 0.4rem 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px 7px;
  cursor: pointer;
  box-shadow: 5px 7px 8px rgba(0, 0, 0, 0.7);

  &:hover {
    border-radius: 7px 3px;
    background-color: #ec0808;

  }

  `

  return (
    <>  
        {/* <div className="container">
          <div className="row ">
        <div className="col-md-4 d-flex"> */}
        <div className="col-md-5 " >
        <Card >
      <Card.Img variant="top" src={TradingCardImg} />
      <Card.Body>
        <Card.Title>Real Estate Property Trading</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        {/* <CustomButton customStyle={"success"} handleButtonValue={handleButtonValue}>Read More</CustomButton> */}
        <Link className='card-style' to={'/real-estate-property-exchange'}>Read More</Link>

      </Card.Body>
    </Card>
    </div>

    {/* </div>
    </div>      
    </div> */}
    </>
  )
}

export default RealEstateTradingCard
