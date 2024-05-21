import React from 'react'
// style 
import "./card.css"

export type CardType = {
		key: number
    title: string
    description: string
    img: string
}

const Card:React.FC<CardType> = ({title, description, img}) => {
  return (
    <div className='container-card'>
      <div className='card-top'>
				<img src={img} alt={title} className='card-img'/>
			</div>
      <div className='card-main'>
				<p className='card-title-main'>{title}</p>
				<p className='card-main-text text-md'>{description}</p>
			</div>
    </div>
  )
}

export default Card
