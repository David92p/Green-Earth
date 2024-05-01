import React, { useState } from 'react';
// style 
import "./dataSearch.css"
// type
import type { cityType } from './DataSearch';

type ReasearchType = {
  getListCity: (par: string) => void
	listCity: cityType[]
	setListCity: React.Dispatch<React.SetStateAction<cityType[]>>
	setCity: React.Dispatch<React.SetStateAction<cityType | null>>
} 

const Reasearch:React.FC<ReasearchType> = ({ getListCity, listCity, setListCity, setCity }) => {

  const [input, setInput] = useState<string>("")

	const toggleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > input.length){
			setInput(e.target.value)
			getListCity(e.target.value)
		} else {
			setListCity([])
			setInput(e.target.value)
		}
	}

	const toggleCity = (city:cityType) => {
		setInput(`${city.name + " " + city.state + " " + city.country}`)
		setCity(city)
		setListCity([])
	}
  
	return (
    <div className='container-input'>
      <input type="text" value={input} className='input-city' onChange={(e) => toggleInput(e)} />
			<div className='container-list-toggle'>
				{ listCity.map((city:cityType) => {
					return <div onClick={() => toggleCity(city)} key={city.id} className='input'>{`${city.name + " " + city.state + " " + city.country}`}</div>
				}) }
			</div>
    </div>
  )
}

export default Reasearch
