import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Reasearch from './Reasearch'
import { Button } from '../index'

export type cityType = {
  id: number
  name: string
  country: string
  state: string
  lat: number 
  lon: number
}

const DataSearch:React.FC = () => {

  const [city, setCity] = useState<cityType | null>(null)
  const [listCity, setListCity] = useState<cityType[]>([])

  // useEffect(() => {
    //axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=39.3099931&lon=16.2501929&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
  //   axios(`http://api.openweathermap.org/geo/1.0/direct?q=w&limit=5&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
  //   .then(res => {
  //     console.log(res.data)
  //   })
  // }, [])

  const getListCity = (par:string) => {
    // Api ricerca lista type cities con relativa latitudine e longitudine
    axios(`http://api.openweathermap.org/geo/1.0/direct?q=${par}&limit=5&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
    .then((res) => {
      console.log(res.data)
      setListCity(
        res.data.map((result:cityType) => {
          const { name, country, state="", lat, lon } = result
          return { id: lat, name, country, state, lat, lon } 
        })
      )
    })
  }

  useEffect(() => {
    console.log(city)
  }, [city])


  return (
    <div className='container-data-search' id='chart'>
      <div className='bg-red-50 w-full h-16'>
        Graphic inserted here
      </div>
      <Reasearch getListCity={getListCity} listCity={listCity} setListCity={setListCity} setCity={setCity}/>
      <Button name='Search'/>
    </div>
  )
}

export default DataSearch
