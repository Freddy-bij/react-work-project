import { useState } from "react"


const WeatherCard = ({temperature,city,condition}) => {


  return (

    <div className={`${ condition === 'rain' ? 'bg-black text-white' : 'bg-yellow-900'}`}>
        <p>{city}</p>
        <p>{temperature}</p>
        <p>{condition}</p>
      
    </div>
  )
}

export default WeatherCard