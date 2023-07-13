import React from "react";
import BgBanner1 from "../../images/homepage/land-trading/land-trading-psd.jpg";
import BgBannerLeft from "../../images/homepage/land-trading/land_expert.jpg";

import BgBanner2 from "../../images/homepage/land-trading/land_trading_home_banner.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomLink from "../Button/CustomLink";

const BoldColor = styled.span`
  color: #ec0808;
`;

const H4 = styled.h4`
  font-weight: 800;
  font-size: 2.4rem;
`;

const ReadMoreA = styled.a`
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

const CustomSection = styled.section`
    background: url(${BgBanner1}); 
    height: 100%;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    height: 70vh;
    width: 100%;
    object-fit: cover;
    background-position: center center;
    background-repeat: no-repeat;
  
    /* this is for internet exploreer and other browser */
    /* beacause before this IE not takin full width */
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;

`

function MidBanner() {
  return (
    <>
    <CustomSection className="section-mid-banner-container">
      <div className="container-fluid">
        <div className="row">
        
              <div
                className="col-md-3 position-absolute midBanner1"
                style={{ top: "20%", left: "5%" }}
              >
                <img src={BgBannerLeft} alt="land expert" />
              </div>

              <div
                className="col-md-9 position-absolute midBanner1"
                style={{ top: "20%", left: "35%", width: "55%" }}
              >
                <H4>
                  Land <BoldColor className="land-expert">Expert</BoldColor>
                </H4>
                <p className="text-white">
                  We have real estate experts who can help you with all of the
                  steps you need to take to buy, sell and do other things with
                  real estate. You can talk to our expert and get their help
                  with your financial planning, budgets, and unique deals.
                  People who have bought land from us in the past have been very
                  happy and we have more than 40k satisfied customers who are
                  happy to be with us. We provide 100% clear title documents,
                  which include a registered sale-deed, a 7/12 extract, plot
                  demarcation, a layout, and your possession of the land. So,
                  meet our land expert today and make sure your money is safe
                  and sound.
                </p>

                <div className="read-more">
                  {/* <ReadMoreA href="">Know More</ReadMoreA> */}
                  <CustomLink
                    path={"tel:+8860024152"}
                    customStyle={{
                      textDecoration: "none",
                      backgroundColor: "#ec0808",
                      color: "#fff",
                      padding: "0.4rem 0.6rem",
                      outline: "none",
                      border: "none",
                      borderRadius: "3px 7px",
                      boxShadow: "5px 7px 8px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    Know More
                  </CustomLink>
                </div>
              </div>

              {/* repeat for resaponsivenesss in mobile */}
              <div
                className="col-md-9 position-absolute midBannerResponsive"
                style={{ top: "10%", left: "7%", width: "80%" }}
              >
                <H4>
                  Land <BoldColor className="land-expert">Expert</BoldColor>
                </H4>
                <p className="text-white">
                  We have real estate experts who can help you with all of the
                  steps you need to take to buy, sell and do other things with
                  real estate. You can talk to our expert and get their help
                  with your financial planning, budgets, and unique deals.
                  People who have bought land from us in the past have been very
                  happy and we have more than 40k satisfied customers who are
                  happy to be with us. We provide 100% clear title documents,
                  which include a registered sale-deed, a 7/12 extract, plot
                  demarcation, a layout, and your possession of the land. So,
                  meet our land expert today and make sure your money is safe
                  and sound.
                </p>

                <div className="read-more">
                  {/* <ReadMoreA href="">Know More</ReadMoreA> */}
                  <CustomLink
                    path={"tel:+8860024152"}
                    customStyle={{
                      textDecoration: "none",
                      backgroundColor: "#ec0808",
                      color: "#fff",
                      padding: "0.4rem 0.6rem",
                      outline: "none",
                      border: "none",
                      borderRadius: "3px 7px",
                      boxShadow: "5px 7px 8px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    Know More
                  </CustomLink>
                </div>
              </div>


            {/* repeat for resaponsivenesss for mobile */}

        
        </div>
      </div>
      </CustomSection>
      {/* Mid banner container div */}
    </>
  );
}

export default MidBanner;
