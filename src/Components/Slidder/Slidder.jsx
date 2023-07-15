import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SlidderStyles.css';

import Slidder1 from '../../images/homepage/swipper/1.jpg'
import Slidder2 from '../../images/homepage/swipper/2.jpg'
import Slidder3 from '../../images/homepage/swipper/3.jpg'
import Slidder4 from '../../images/homepage/swipper/4.jpg'
import Slidder5 from '../../images/homepage/swipper/5.jpg'
// import Slidder6 from '../../images/homepage/slidder/slidder6.jpg'
// import Slidder7 from '../../images/homepage/slidder/slidder7.jpg'
// import Slidder8 from '../../images/homepage/slidder/Untitled-10.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slidder() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='img-fluid' src={Slidder1} alt="" />
            <div className="slidder-text">
              <h4>Landlords grow rich in their sleep. <br /> Their Property works for them.</h4>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='img-fluid' src={Slidder2} alt="" />
            <div className="slidder-text-right">
              <h4>Vacations Homes can earn huge for you. <br /> Invest with us now!</h4>
            </div>
        </SwiperSlide>
       
  
        <SwiperSlide>
        <img className='img-fluid' src={Slidder3} alt="" />
        <div className="slidder-text">
              <h4>Price is what you pay. <br />Value is what you get.</h4>
            </div>
        </SwiperSlide>
    
        <SwiperSlide>
        <img className='img-fluid' src={Slidder4} alt="" />
        <div className="slidder-text-right">
        <h4>Don't WAIT to invest <br /> in Real Estate. <br />Invest in Real Estate, <br /> And WAIT... </h4>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <img className='img-fluid' src={Slidder5} alt="" />
        <div className="slidder-text">
              <h4>More beautiful the Property. <br />More higher the Returns. </h4>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
