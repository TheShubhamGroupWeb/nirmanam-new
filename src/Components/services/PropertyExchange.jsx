import React from 'react'
import NavBarComponent from '../Navbar/NavBarComponent'
import CommonFormat from './CommonFormat'
import { servicesData } from '../../constants/services-data'
// import RealEstateTradingImg from '../../images/real-estate-trading/maria-krasnova-qD7tpy_VozY-unsplash.jpg'

function PropertyExachange({ url, spanTag, spanTag2, spanTag3, spanTag4, p, p2, p3, p4 }) {
    return (
        <> 
            <CommonFormat url={servicesData[1].url}  spanTag={servicesData[1].spanTag} spanTag2={servicesData[1].spanTag2} spanTag3={servicesData[1].spanTag3} spanTag4={servicesData[1].spanTag4}
            p={servicesData[1].p} p2={servicesData[1].p2} p3={servicesData[1].p3} p4={servicesData[1].p4} 
            />

        </>
    )
}

export default PropertyExachange
