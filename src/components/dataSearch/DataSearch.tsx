import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Research from './Research'
import Chart from './Chart'
import { Button, Pending } from '..'

export type pollutingValuesType = null | {
	co: number,
	nh3: number,
	no: number,
	no2: number,
	o3: number,
	pm2_5: number,
	pm10: number,
	so2: number,
}[]

export type temporalAnalysisType = {
  substance: "co" | "nh3" | "no" | "no2" | "o3" | "pm2_5" | "pm10" | "so2"
  analysisPeriod: "week" | "month" | "quarter" | "semester" | "year"
}

export type cityDataType = {
  id: number
  name: string
  country: string
  state: string
  lat: number 
  lon: number
  time: string[]
	quality: string
	pollutingValues: pollutingValuesType
}

const DataSearch:React.FC = () => {

  const [city, setCity] = useState<cityDataType>({ 
    id: 51.5073219,
    name: "London",
    country: "GB",
    state: "England",
    lat: 51.5073219 ,
    lon: -0.1276474,
    time: [],
    quality: "",
    pollutingValues: null
  })
  // const [pollutingSubstance, setPollutingSubstance] = useState<"co" | "nh3" | "no" | "no2" | "o3" | "pm2_5" | "pm10" | "so2">("co")
  const [temporalAnalysis, setTemporalAnalysis] = useState<temporalAnalysisType>({substance: "co", analysisPeriod: "week"})
  const [listCity, setListCity] = useState<cityDataType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)


  const getListCity = async (par:string) => {
    // Api ricerca lista type cityType con relativa latitudine e longitudine
    try {
      const requestCoordinates = await axios(`https://api.openweathermap.org/geo/1.0/direct?q=${par}&limit=5&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
      setListCity(
        requestCoordinates.data.map((result:cityDataType) => {
          const { name, country, state="", lat, lon } = result
          return {
            id: lat,
            name,
            country,
            state,
            lat,
            lon,
            time: [],
            quality: [],
            pollutingValues: null,
          }
        })
      )
    } catch (error) {
      console.log("errore richiesta coordinate ")
    }
  }

  const getCurrentPollutionData = async (lat:number, lon:number):Promise<cityDataType | void> => {
    try {
      setLoading(true)
      setError(false)
      //dati attuali
      const requestPollution = await axios(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
      const { dt, components:pollutingValues } = requestPollution.data.list[0]
      // Quality air 
      const { aqi:quality } = requestPollution.data.list[0].main 
      // Values of polluting substances
      setCity({
        ...city, 
        time: [getDate(dt, "current")], 
        quality, 
        pollutingValues: [pollutingValues]
      })
    } catch {
      setError(true)
    }
    setTemporalAnalysis({substance: "co", analysisPeriod: "week"})
    setLoading(false)
  }

  const getHistoricalPollutionData = async (type: "Weekly" | "Monthly" | "Quarterly" | "1/2 Year" | "1 Year" ) => {
    try {
      setLoading(true)
      setError(false)
      const today = Math.floor((new Date().getTime() / 1000))
      let data:[string[], pollutingValuesType] | null = null
      switch (type) {
        case "Weekly": {
          const last7Days = Math.floor((new Date().setDate(new Date().getDate() - 7) /  1000)) 
          const requestPollution = await axios(`https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${city.lat}&lon=${city.lon}&start=${last7Days}&end=${today}&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
          const response =  requestPollution.data.list
          const days:string[] = [response[27].dt,response[51].dt,response[75].dt,response[99].dt,response[123].dt,response[147].dt,response[response.length - 1].dt].map((date:number) => getDate(date, "historical"))
          const pollutingValues:pollutingValuesType = [response[27].components,response[51].components,response[75].components,response[99].components,response[123].components,response[147].components,response[response.length - 1].components]
          data =  [days, pollutingValues]
          break
        }
        case "Monthly": {
          const last30Days = Math.floor((new Date().setDate(new Date().getDate() - 30) /  1000)) 
          const requestPollution = await axios(`https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${city.lat}&lon=${city.lon}&start=${last30Days}&end=${today}&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
          const response = requestPollution.data.list
          const days:string[] = [response[2].dt, response[response.length - (20*24)].dt,  response[response.length - (16*24)].dt, response[response.length - (12*24)].dt, response[response.length - (8*24)].dt, response[response.length - (4*24)].dt, response[response.length - 1].dt].map((date:number) => getDate(date, "historical"))
          const pollutingValues:pollutingValuesType = [response[2].components, response[response.length - (20*24)].components, response[response.length - (16*24)].components, response[response.length - (12*24)].components, response[response.length - (8*24)].components, response[response.length - (4*24)].components, response[response.length - 1].components]
          data =  [days, pollutingValues]
          break
        }
        case "Quarterly": {
          const last90Days = Math.floor((new Date().setDate(new Date().getDate() - 90) /  1000)) 
          const requestPollution = await axios(`https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${city.lat}&lon=${city.lon}&start=${last90Days}&end=${today}&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
          const response =  requestPollution.data.list
          const days:string[] = [response[2].dt, response[response.length - (75*24)].dt, response[response.length - (60*24)].dt, response[response.length - (45*24)].dt, response[response.length - (30*24)].dt, response[response.length - (15*24)].dt, response[response.length - 1].dt].map((date:number) => getDate(date, "historical"))
          const pollutingValues:pollutingValuesType = [response[2].components, response[response.length - (75*24)].components, response[response.length - (60*24)].components, response[response.length - (45*24)].components, response[response.length - (30*24)].components, response[response.length - (15*24)].components, response[response.length - 1].components]
          data =  [days, pollutingValues]
          break
        }
        case "1/2 Year": {
          const last180Days = Math.floor((new Date().setDate(new Date().getDate() - 180) /  1000)) 
          const requestPollution = await axios(`https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${city.lat}&lon=${city.lon}&start=${last180Days}&end=${today}&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
          const response =  requestPollution.data.list
          const days:string[] = [response[2].dt, response[response.length - (150*24)].dt,  response[response.length - (120*24)].dt, response[response.length - (90*24)].dt, response[response.length - (60*24)].dt, response[response.length - (30*24)].dt, response[response.length - 1].dt].map((date:number) => getDate(date, "historical"))
          const pollutingValues:pollutingValuesType = [response[2].components, response[response.length - (150*24)].components, response[response.length - (120*24)].components, response[response.length - (90*24)].components, response[response.length - (60*24)].components, response[response.length - (30*24)].components, response[response.length - 1].components]
          data =  [days, pollutingValues]
          break
        }
        case "1 Year": {
          const last365Days = Math.floor((new Date().setDate(new Date().getDate() - 365) /  1000)) 
          const requestPollution = await axios(`https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${city.lat}&lon=${city.lon}&start=${last365Days}&end=${today}&appid=${import.meta.env.VITE_APP_OPENWEATHER_KEY}`)
          const response =  requestPollution.data.list
          const days:string[] = [response[2].dt, response[response.length - (305*24)].dt,  response[response.length - (245*24)].dt, response[response.length - (185*24)].dt, response[response.length - (125*24)].dt, response[response.length - (65*24)].dt, response[response.length - 1].dt].map((date:number) => getDate(date, "historical"))
          const pollutingValues:pollutingValuesType = [response[2].components, response[response.length - (305*24)].components, response[response.length - (245*24)].components, response[response.length - (185*24)].components, response[response.length - (125*24)].components, response[response.length - (65*24)].components, response[response.length - 1].components]
          data =  [days, pollutingValues]
          break
        }
        default: 
          data = null
          setError(true)
          break
      }
      data && setCity((prev):cityDataType => {
        return {
          ...prev,
          time: data[0],
          pollutingValues: data[1]
        }
      })
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  // Fnc unix transformation date into date string
  const getDate = (unixDate:number, type: "current" | "historical"):string => {
    const date = new Date(unixDate * 1000)
    const day = date.getDate()
    let month:string | string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"]
    month = month[date.getMonth()]
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes().toString().length == 1 ? "0" + date.getMinutes().toString() : date.getMinutes().toString()
    // Date of measurement of the values
    const time = type == "current" ? `Air quality index recorded on ${month} ${day}, ${year} at ${hour}:${minutes}` : day + " " + month.substring(0, 3) + " " + year.toString().slice(-2)
    return time
  }
    
  useEffect(() => {
    getCurrentPollutionData(city?.lat, city?.lon)
  }, [])

  return (
    <div className='container-data-search'>
      <div className='bg-myfirstyellow w-full h-[500px] sm:h-[800px] 2xl:h-[1000px]'>
        {
          error ? (
            <Pending type='error'/>
          ) : (
            loading ? <Pending type='loading'/> : (
              city.pollutingValues && city.pollutingValues.length == 1 ? (
                <Chart 
                  type={"current"}
                  name={city.name == city.state ? `${city.name + " " + city.country}` : `${city.name + " " + city.state + " " + city.country}`} 
                  time={city.time}
                  quality={city.quality}
                  pollutingValues={city.pollutingValues}
                />
              ) : (
                <Chart 
                  type={"historical"}
                  name={city.name == city.state ? `${city.name + " " + city.country}` : `${city.name + " " + city.state + " " + city.country}`} 
                  time={city.time}
                  quality={city.quality}
                  pollutingValues={city.pollutingValues}
                  temporalAnalysis={temporalAnalysis}
                />
              )
            )
          )
        }
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-mygreen text-2xl sm:text-3xl font-extrabold text-center pb-2 tracking-wider'>Analyze past data</span>
          {
            city.pollutingValues && city.pollutingValues.length > 1 && (
              <div className='flex w-3/4 flex-wrap justify-around items-center gap-4 my-4'>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "co"}
                  })} 
                  className={`bg-[#FF6384] rounded-full transition-all ${temporalAnalysis.substance == "co" ? "opacity-100 w-16 h-16 font-extrabold text-2xl tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>co
                </button>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "no"}
                  })}
                  className={`bg-[#FF9F40] w-14 h-14 rounded-full transition-all ${temporalAnalysis.substance == "no" ? "opacity-100 w-16 h-16 font-extrabold text-2xl tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>no
                </button>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "no2"}
                  })}
                  className={`bg-[#FFCD56] w-14 h-14 rounded-full transition-all ${temporalAnalysis.substance == "no2" ? "opacity-100 w-16 h-16 font-extrabold text-2xl tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>no2
                </button>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "o3"}
                  })}
                  className={`bg-[#4BC0C0] w-14 h-14 rounded-full transition-all ${temporalAnalysis.substance == "o3" ? "opacity-100 w-16 h-16 font-extrabold text-2xl tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>o3
                </button>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "so2"}
                  })}
                  className={`bg-[#36A2EB] w-14 h-14 rounded-full transition-all ${temporalAnalysis.substance == "so2" ? "opacity-100 w-16 h-16 font-extrabold text-2xl tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>so2
                </button>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "pm2_5"}
                  })}
                  className={`bg-[#9966FF] rounded-full transition-all ${temporalAnalysis.substance == "pm2_5" ? "opacity-100 w-16 h-16 font-extrabold text-lg tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>pm{temporalAnalysis.substance == "pm2_5" ? <br/> : null}2.5
                </button>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "pm10"}
                  })}
                  className={`bg-[#FF6384] w-14 h-14 rounded-full transition-all ${temporalAnalysis.substance == "pm10" ? "opacity-100 w-16 h-16 font-extrabold text-lg tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>pm{temporalAnalysis.substance == "pm10" ? <br/> : null}10
                </button>
                <button 
                  onClick={() => setTemporalAnalysis((prev) => {
                    return {...prev, substance: "nh3"}
                  })}                 
                  className={`bg-[#4BC0C0] w-14 h-14 rounded-full transition-all ${temporalAnalysis.substance == "nh3" ? "opacity-100 w-16 h-16 font-extrabold text-2xl tracking-wider" : "opacity-75 w-14 h-14 text-lg"}`}>nh3
                </button>
              </div>
            )
          }
          <div className='flex flex-col sm:flex-row sm:items-center w-full gap-2 py-2 sm:py-4'>
            <div className='flex justify-around sm:w-1/2'>
              <button 
                onClick={
                  () => {(
                    getHistoricalPollutionData("Weekly"), 
                    setTemporalAnalysis((prev) => {
                      return { ...prev, analysisPeriod: "week" }
                    })
                  )}
                } 
                className='bg-mysecondyellow text-mygreen tracking-wider rounded-lg font-bold px-1 py-2 w-24 col-start-1'>Weekly
              </button>
              <button 
                onClick={
                  () => {(
                    getHistoricalPollutionData("Monthly"), 
                    setTemporalAnalysis((prev) => {
                      return { ...prev, analysisPeriod: "month" }
                    })
                  )}
                } 
                className='bg-mysecondyellow text-mygreen tracking-wider rounded-lg font-bold px-1 py-2 w-24 col-start-3'>Monthly
              </button>
            </div>
            <div className='flex justify-center'>
              <button 
                onClick={
                  () => {(
                    getHistoricalPollutionData("Quarterly"), 
                    setTemporalAnalysis((prev) => {
                      return { ...prev, analysisPeriod: "quarter" }
                    })
                  )}
                }
                className='bg-mysecondyellow text-mygreen tracking-wider rounded-lg font-bold px-1 py-2 w-24 col-start-2'>Quarterly
              </button>
            </div>
            <div className='flex justify-around sm:w-1/2'>
              <button 
                onClick={
                  () => {(
                    getHistoricalPollutionData("1/2 Year"), 
                    setTemporalAnalysis((prev) => {
                      return { ...prev, analysisPeriod: "semester" }
                    })
                  )}
                } 
                className='bg-mysecondyellow text-mygreen tracking-wider rounded-lg font-bold px-1 py-2 w-24 col-start-1'>1/2 Year
              </button>
              <button 
                onClick={
                  () => {(
                    getHistoricalPollutionData("1 Year"), 
                    setTemporalAnalysis((prev) => {
                      return { ...prev, analysisPeriod: "year" }
                    })
                  )}
                } 
                className='bg-mysecondyellow text-mygreen tracking-wider rounded-lg font-bold px-1 py-2 w-24 col-start-3'>1 Year
              </button>
            </div>
          </div>
        </div>
        <span className='text-mygreen text-lg font-bold tracking-wider text-center my-4'>Quality Index:<br/>1 = Good, 2 = Fair, 3 = Moderate,<br/>4 = Poor, 5 = Very poor</span>
      </div>
      <Research listCity={ listCity } setListCity={ setListCity } setCity={ setCity } getListCity={ getListCity }/>
      <Button name='Search' getCurrentPollutionData={ getCurrentPollutionData } lat={city?.lat} lon={city?.lon}/>
    </div>
  )
}


export default DataSearch;
