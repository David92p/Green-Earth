import React, { useState } from 'react';
// style 
import "./dataSearch.css"
// type
import type { cityDataType } from './DataSearch';

type ResearchType = {	
	listCity: cityDataType[]
	setListCity: React.Dispatch<React.SetStateAction<cityDataType[]>>
	setCity: React.Dispatch<React.SetStateAction<cityDataType>>
	getListCity: (par: string) => Promise<void>
} 

const Research:React.FC<ResearchType> = ({ listCity, setListCity, setCity, getListCity }) => {

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

	const toggleCity = (city:cityDataType) => {
		setInput(city?.name == city?.state ? `${city?.name + " " + city?.country}` : `${city?.name + " " + city?.state + " " + city?.country}`)
		setListCity([])
		setCity({...city})
	}

	return (
		<div className='container-input'>
			<input 
				type="text" 
				placeholder="Enter a City to analyze"
				value={input} 
				className='input-city' 
				onChange={(e) => toggleInput(e)} 
			/>
			<div className='container-list-toggle'>
				{ listCity.map((city:cityDataType) => {
					return <div key={city.id} onClick={() => toggleCity(city)} className='input'>{`${city.name + " " + city.state + " " + city.country}`}</div>
				})}
			</div>
		</div>
	)
}

export default Research
