import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Research from './Research'
import Chart from './Chart'
import { Button } from '..'

export type pollutingValuesType = {
	co: number,
	nh3: number,
	no: number,
	no2: number,
	o3: number,
	pm2_5: number,
	pm10: number,
	so2: number,
}

export type cityDataType = {
  id: number
  name: string
  country: string
  state: string
  lat: number 
  lon: number
  time?: string
	quality?: number
	pollutingValues: pollutingValuesType
}

const DataSearch:React.FC = () => {

  const [city, setCity] = useState<cityDataType | null>(null)
  const [listCity, setListCity] = useState<cityDataType[]>([])
  //const [pollutingValues, setPollutingValues] = useState<pollutingValuesType | null>(null)

  const getListCity = async (par:string) => {
    // Api ricerca lista type cityType con relativa latitudine e longitudine
    try {
      const requestCoordinates = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${par}&limit=5&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
      setListCity(
        requestCoordinates.data.map((result:cityDataType) => {
          const { name, country, state="", lat, lon } = result
          return { id: lat, name, country, state, lat, lon } 
        })
      )
    } catch (error) {
      console.log("errore richiesta coordinate ")
    }
    // })
  }

  const getPollutionData = async (lat:number, lon:number) => {
    if (city) {
      try {
        //dati attuali
        const requestPollution = await axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
        //console.log(requestPollution.data.list[0])
        const { dt, components } = requestPollution.data.list[0]
        const { aqi } = requestPollution.data.list[0].main
        setCity({...city, time: dt, quality: aqi, pollutingValues: components})
      } catch (error) {
        console.log("errore pollution data")
      }
    } else console.log("non hai impostato city")
  }

  useEffect(() => {
    console.log(city)
  }, [city])
  

  return (
    <div className='container-data-search' id='chart'>
      <div className='bg-myfirstyellow w-full h-[800px]'>
        {city ? <Chart 
          name={city?.name == city?.state ? `${city?.name + " " + city?.country}` : `${city?.name + " " + city?.state + " " + city?.country}`} 
          pollutingValues={city.pollutingValues}
        /> : <Chart/>}
      </div>
      <Research listCity={ listCity } setListCity={ setListCity } setCity={ setCity } getListCity={ getListCity }/>
      <Button name='Search' getPollutionData={ getPollutionData } lat={city?.lat || 0} lon={city?.lon || 0}/>
    </div>
  )
}


export default DataSearch;
