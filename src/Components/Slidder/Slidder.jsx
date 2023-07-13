import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SlidderStyles.css';

import Slidder1 from '../../images/homepage/slidder/slidder1.jpg'
import Slidder2 from '../../images/homepage/slidder/slidder2.jpg'
import Slidder3 from '../../images/homepage/slidder/slidder3.jpg'
import Slidder4 from '../../images/homepage/slidder/slidder4.jpg'
import Slidder5 from '../../images/homepage/slidder/slidder5.jpg'
import Slidder6 from '../../images/homepage/slidder/slidder6.jpg'
import Slidder7 from '../../images/homepage/slidder/slidder7.jpg'
import Slidder8 from '../../images/homepage/slidder/Untitled-10.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slidder() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
            <img className='img-fluid' src={Slidder5} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img className='img-fluid' src={Slidder8} alt="" />
        </SwiperSlide>
       
  
        <SwiperSlide>
        <img className='img-fluid' src={Slidder2} alt="" />
        </SwiperSlide>
    

      </Swiper>
    </>
  );
}
