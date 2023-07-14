import React from "react";
import CustomLink from "../Button/CustomLink";
// import './App.css';
import WhyChooseImg from '../../images/homepage/why-choose/whyUs.jpg'

import styled from "styled-components";



const CustomCall = styled.a`
  text-decoration: none;
  background-color: #ec0808;
  color: #fff;
  padding: 0.4rem 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px 7px;
  box-shadow: 5px 7px 8px rgba(0, 0, 0, 0.7);

  &:hover {
    border-radius: 7px 3px;
    opacity: 0.8;
  }
`;

const H4 = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  /* word-spacing: 2px; */
  /* text-align: center; */
`;

function About() {
  return (
    <>
      <section className="about-container padding">
        <div className="container  ">
        <h3 className="main-heading margin py-2">About US</h3>
          <div className="row " style={{alignContent: "center", justifyContent: "center",boxShadow: "3px 4px 4px 4px rgba(0,0,0,0.4)", borderRadius: "3px 4px"}}>
       
            <div className="col-md-10 py-5" style={{alignItems: "start", justifyContent:"start"}}>
            
              <H4>
              Welcome to the <span className="fw-bolder">Nirmanam Realtors</span>. We are here with a unique USP: <span className="fw-bolder">Property Trading and Property Exchange</span>. We offer services wherein you can trade or exchange your less useful property with beautiful property customized as per your needs in the lapse of nature or at peaceful, spiritual places in North India like Himachal Pradesh, Uttarakhand and Rajasthan.
              </H4>

              <H4>
              At <span className="fw-bolder">Nirmanam Realtors </span>, Our goal is to simplify the process to provide you with beautiful properties to invest in. We believe every property is valuable and our property options will generate a passive income for you.
              </H4>


              <H4>
              <span className="fw-bolder">The definition of "Trade-in"</span> in real estate refers to granting <span className="fw-bolder">permission to a realtor to list the properties on behalf of the Seller and finding the most profitable and best deals for sale.</span> 
              </H4>


              <H4>
              When it comes to <span className="fw-bolder"> Real Estate Property Trading</span>, We provide the best of beautiful ready-to-move-in options to trade your property to.
              </H4>


              <H4>
              For those interested in <span className="fw-bolder">Real Estate Property Exchange,</span>  we provide beautiful property options for you to explore to exchange your less useful properties with us, increase your investments and can be assisted by experts on strategic property acquisitions. We specialize in finding the best real estate options to buy in exchange for listing/selling any of your property instead of money.
              </H4>


              <H4>
              Explore our website to discover our range of services and resources designed to empower you wisely in real estate capital budgeting. Whether you are a first-time buyer, an urgent seller, a seasoned investor, or a real estate professional, we are here to be your source to provide you best properties to invest in. You just have to contact us and our team will dedicate itself to find you the best property options to trade or exchange your property with.
              </H4>

              
              <H4>
              Contact us today to embark on your real estate journey with <span className="fw-bolder">Nirmanam Realtors:  TRUST & COMMITMENT.</span> 


              </H4>


            </div>

          

          </div>
        </div>
      </section>

      
    </>
  );
}

export default About;
