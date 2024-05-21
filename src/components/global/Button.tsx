import React from 'react'
// style 
import "./button.css"

type ButtonType = {
    name: string
    getPollutionData?: (lat: number, lon: number) => Promise<void>
    lat?: number
    lon?: number
}

const Button:React.FC<ButtonType> = ({ name, getPollutionData, lat=0, lon=0 }) => {
  return (
    <button onClick={() => getPollutionData ? getPollutionData(lat, lon) : null} className='container-btn text-md sm:text-2xl' >
      { name }
    </button>
  )
}

export default Button
