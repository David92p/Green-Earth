import React from 'react'
// style 
import "./card.css"

export type CardType = {
    title: string
    description: string
    img: string
}

const Card:React.FC<CardType> = ({title, description, img}) => {
  return (
    <div>
      <div className="card-top">
        <img src={img} alt={title} />
      </div>
      <div className="card-main">
        <p>{title}</p>
        <div className='text-md'>{description}</div>
        <a>Read More</a>
      </div>
    </div>
  )
}

export default Card
