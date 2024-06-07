import React from 'react'
// style 
import "./button.css"
// type 
import { cityDataType } from '..'

type ButtonType = {
    name: string
    getCurrentPollutionData?: (lat: number, lon: number) => Promise<cityDataType | null | void>
    lat?: number
    lon?: number
}

const Button:React.FC<ButtonType> = ({ name, getCurrentPollutionData, lat=0, lon=0 }) => {
  return (
    <button onClick={() => getCurrentPollutionData ? getCurrentPollutionData(lat, lon) : null} className='container-btn text-md sm:text-2xl' >
      { name }
    </button>
  )
}

export default Button
