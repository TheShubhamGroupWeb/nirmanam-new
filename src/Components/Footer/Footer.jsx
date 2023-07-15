import React from 'react'
import styled from 'styled-components';
import FooterLogo from '../../images/logo/nirmanam-_logo.png'

import './FooterStyles.css'


const CustomSection = styled.section`
    /* background-color: #2c2f44; */
    /* background-color: black; */
    background-color: #002147;
    height: 100%;
    width: 100%;
    color: #fff;
`

function Footer() {
  return (
    <>
      <CustomSection className="footer-container">
        <div className="container  padding mt-5">
            <div className="row">
              
                <div className="col-md-3 text-center">

                 

                <h3 className='footer-company-name'>Nirmanam Relators</h3>
                <div className="footer-logo-wrapper p-0" style={{width: "", padding: "0 1rem"}}>
                  <img className='img-fluid p-0' src={FooterLogo} alt="" />
                  </div>
                {/* <p class="footer-first-p mb-4 p-0" style={{lineHeight: 0}}>PRIME PLOTS & LAND EXPERTS</p>
                <p>We assist you in making your dream a reality</p> */}

                
               {/* <div class="social-icons-footer">
                <ul class="d-flex justify-content-around" data-aos="fade-up" data-aos-delay="150">
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
                
               </div> */}


                </div>


                <div className="col-md-3 main-links">
                    <h4>Main Links</h4>

                    <ul>
                    <li data-aos="fade-up" data-aos-delay="100"><a href="#" class="text-white-50">HOME</a></li>
                    <li data-aos="fade-up" data-aos-delay="150"><a href="#" class="text-white-50">About Us</a></li>
                    <li data-aos="fade-up" data-aos-delay="200"><a href="#" class="text-white-50">Land Trading</a></li>
                    <li data-aos="fade-up" data-aos-delay="250"><a href="#" class="text-white-50">Gallery</a></li>
                    </ul>
                </div>


               <div className="col-md-3">
               <h4>Useful Links</h4>
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100"><a href="#" class="text-white-50">Blogs</a></li>
                    <li data-aos="fade-up" data-aos-delay="150"><a href="#" class="text-white-50">Contact</a></li>
                    <li data-aos="fade-up" data-aos-delay="200"><a href="#" class="text-white-50">Privacy & Policy</a></li>
                    <li data-aos="fade-up" data-aos-delay="250"><a href="#" class="text-white-50">Legal</a></li>
            

                </ul>
               </div>


               <div class="col-md-3">
                <h4>Have a Questions?</h4>

                <ul class="company-details p-0">
                  <li data-aos="fade-up" data-aos-delay="100">
                    {/* <span><i class="fa-solid fa-location-dot"></i></span> */}
                    {/* &nbsp; */}
                    <a href="https://goo.gl/maps/S8Tha2LwhNY321Ko6"  class="text-white-50">A-34, behind Crown Plaza Hotel,
                      Pocket A, Okhla I, Okhla Industrial Estate,
                      New Delhi, Delhi 110020</a>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="150">
                    {/* <span><i class="fa-solid fa-phone"></i></span> */}
                    {/* &nbsp; */}
                    <a href="tel:+918510850101" class="text-white-50">8510850101</a>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="200">
                    {/* <span><i class="fa-regular fa-envelope"></i></span> */}
                    {/* &nbsp; */}
                    <a href="mailto:info@tsgcdelhi.com" class="text-white-50"> info@tsgcdelhi.com</a>
                  </li>

                </ul>
                
            </div>


            </div>
        </div>
      </CustomSection>
    </>
  )
}

export default Footer
