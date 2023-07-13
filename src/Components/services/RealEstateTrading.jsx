import React from 'react'
import NavBarComponent from '../Navbar/NavBarComponent'
import CommonFormat from './CommonFormat'
import { servicesData } from '../../constants/services-data'
// import RealEstateTradingImg from '../../images/real-estate-trading/maria-krasnova-qD7tpy_VozY-unsplash.jpg'

function RealEstateTrading() {
    return (
        <>
            <CommonFormat url={servicesData[0].url} p={servicesData[0].p} spanTag={servicesData[0].spanTag} />
        </>
    )
}

export default RealEstateTrading
