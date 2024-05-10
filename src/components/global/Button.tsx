import React from 'react'

type ButtonType = {
    name: string
    getPollutionData?: (lat: number, lon: number) => Promise<void>
    lat?: number
    lon?: number
}

const Button:React.FC<ButtonType> = ({ name, getPollutionData, lat=0, lon=0 }) => {
  return (
    <button onClick={() => getPollutionData ? getPollutionData(lat, lon) : null} className="bg-mysecondyellow text-mygreen font-bold text-md sm:text-2xl tracking-wider w-3/4 sm:w-2/4 mx-auto my-6 px-1 py-2 sm:py-4 rounded-3xl">
      { name }
    </button>
  )
}

export default Button
