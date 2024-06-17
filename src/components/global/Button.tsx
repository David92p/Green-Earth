import React from 'react'
// style 
import "./button.css"
// type 
import { cityDataType } from '..'
import { useNavigate } from 'react-router-dom'

type ButtonType = {
    name: string
    getCurrentPollutionData?: (lat: number, lon: number) => Promise<cityDataType | null | void>
    loadPage?: string
    lat?: number
    lon?: number
}

const Button:React.FC<ButtonType> = ({ name, getCurrentPollutionData, loadPage, lat=0, lon=0 }) => {
  const navigate = useNavigate()
  
  return (
    <button onClick={() => getCurrentPollutionData ? getCurrentPollutionData(lat, lon) : loadPage && navigate(loadPage)} className='container-btn text-md sm:text-2xl' >
      { name }
    </button>
  )
}

export default Button
