import React from 'react'
import { cardData } from '../../constants/card-data'
import Cards from '../Cards/Cards'

function CardContainer() {
  return (
    <>

    
      {
        cardData.map((data,idx)=> (
            // <Card key={idx} url={data.url} heading={data.heading} button={data.button}/>
            <Cards key={idx} url={data.url} heading={data.heading} button={data.button} p={data.p}/>
        ))
      }
    </>
  )
}

export default CardContainer
