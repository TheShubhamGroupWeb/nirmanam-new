import React from 'react'
import Banner1 from "../../images/homepage/hero-section/landing-page--05.jpg"
import Slidder from '../Slidder/Slidder'
import About from '../About/About'
import Cards from '../Cards/Cards'
import styled from 'styled-components';
import CardContainer from '../CardContainer/CardContainer'
import MidBanner from '../Mid-banner/MidBanner'
import Footer from '../Footer/Footer'
import RealEstateTradingCard from '../Cards/RealEstateTadingCard'
import PropertyExchangeCard from '../Cards/PropertyExchangeCard'
import Img1 from '../../images/homepage/after-before/img1.jpg'
import Img2 from '../../images/homepage/after-before/img2.jpg'
import Logo from '../../images/logo/mr.png'

const ServiceWrapper = styled.div`
  background-color: #f5f6f7;

`

const H4 = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  /* word-spacing: 2px; */
  /* text-align: center; */
  margin-bottom: 1rem;
`;


function Home() {
  return (
    <>
    <Slidder/>

    <div className="container margin ">
    <div className="row padding" style={{alignContent: "center", justifyContent: "center",boxShadow: "3px 4px 4px 4px rgba(0,0,0,0.4)", borderRadius: "3px 4px",}}>

      <div className="col-md-10">
        <div className="logo-wrapper mb-3" style={{width: "200px"}}>
      <img className='img-fluid' src={ Logo} alt=""  />
      </div>

      <H4>
      <span className="fw-bolder">  Welcome to the Nirmanam Realtors.</span>
     We are here with a unique USP: <span className="fw-bolder"> Property Trading and Property Exchange.</span>  We have a platform that works with commitment and transparency to ensure best customer satisfaction.
      </H4>

      <H4>
      <span className="fw-bolder">Nirmanam Realtors</span> have numerous properties listed with it across India and many beautiful properties all over Northern India in hill stations, spiritual places and tourist destinations of Uttarakhand, Himachal Pradesh and Rajasthan which are available for buying or Property Exchange.
          </H4>

          <H4>
          For <span className="fw-bolder"> Real Estate Trading, </span>we provide the best of beautiful ready-to-move-in options to trade your property to along with offering free property listings..
          </H4>

          <H4>
          For <span className="fw-bolder"> Real Estate Exchange,</span> we provide beautiful property options for you exchange your less useful properties with us, increase your investments. Our Real Estate Exchange service further includes House-Swapping, Property-Swapping, Land Swapping etc. We are experts in providing you the best real estate options to buy in exchange for selling any of your property instead of money.
          </H4>

          <H4>
          We understand how tax regime in India is burdening pockets of an individual therefore we have brought to you a legal channel to save tax on capital gains made on property you sell, by investing the capital income made from selling the property to a new property offering good value. 
          </H4>

          <H4>
          For making it easier, we provide you the beautiful property options to invest in Indian Real Estate. This not only gets you the <span className="fw-bolder"> high Returns-on-Investment (ROI)</span> but also provides you huge savings on Capital Gains Tax levied on your sale of property.
          </H4>

          <H4>
          Explore our website to discover our Property Exchange and Property Trading Services designed to empower you to make best of real estate investments and contact us to know more about the best property you can buy.
          </H4>

          <H4>
          We also have immensely experienced <span className="fw-bolder"> Property Experts who provide you insights on best property options </span> to invest your money to.
          </H4>

        </div>
      </div>
    </div>




    <ServiceWrapper className='padding'>
    <div className="container">
      <div className="col-12">
      <h3 class="main-heading mb-4">OUR SERVICES</h3>
      </div>
      <div className="row justify-content-center align-items-center" style={{gap: "1.5rem"}}>
      <RealEstateTradingCard/>
      <PropertyExchangeCard/>
      </div>
    </div>
    </ServiceWrapper>


    <MidBanner/>    
{/* 
    <div className="container">
      <div className="row">

        <div className="col-md-4">
            <img className='img-fluid' src={Img1} alt="" />
        </div>

        <div className="col-md-4">
            <img className='img-fluid' src={Img2} alt="" />
        </div>

        <div className="col-md-3 bg-dark">
          <h4></h4>
        </div>

      </div>
    </div> */}


    </>
  )
}

export default Home
