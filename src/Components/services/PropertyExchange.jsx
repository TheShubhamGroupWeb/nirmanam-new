import React from 'react'
import NavBarComponent from '../Navbar/NavBarComponent'
import CommonFormat from './CommonFormat'
import { servicesData } from '../../constants/services-data'
// import RealEstateTradingImg from '../../images/real-estate-trading/maria-krasnova-qD7tpy_VozY-unsplash.jpg'

function PropertyExachange({ url, spanTag, p }) {
    return (
        <>
            <CommonFormat url={servicesData[1].url} p={servicesData[1].p} spanTag={servicesData[1].spanTag} />

        </>
    )
}

export default PropertyExachange
