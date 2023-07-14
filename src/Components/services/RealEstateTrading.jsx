import React from 'react'
import NavBarComponent from '../Navbar/NavBarComponent'
import CommonFormat from './CommonFormat'
import { servicesData } from '../../constants/services-data'
// import RealEstateTradingImg from '../../images/real-estate-trading/maria-krasnova-qD7tpy_VozY-unsplash.jpg'

function RealEstateTrading() {
    return (
        <>
            <CommonFormat url={servicesData[0].url} p={servicesData[0].p} spanTag={servicesData[0].spanTag} spanTag2={servicesData[0].spanTag2} spanTag3={servicesData[0].spanTag3} 
            spanTag4={servicesData[0].spanTag4} spanTag6={servicesData[0].spanTag6} 

            p2={servicesData[0].p2} p3={servicesData[0].p3} p4={servicesData[0].p4} p5={servicesData[0].p5} p6={servicesData[0].p6} />

            
        </>
    )
}

export default RealEstateTrading
