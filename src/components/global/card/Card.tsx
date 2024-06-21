import React, { useEffect, useState } from 'react'
// style 
import "./card.css"

export type CardType = {
  key: number
  title: string
  description: string
  img: string
}

const Card:React.FC<CardType> = ({ title, description, img}) => {

  const [href, setHref] = useState<string>("")

  useEffect(() => {
    switch(title) {
      case "Carbon Monoxide":
        setHref("https://en.wikipedia.org/wiki/Carbon_monoxide")
        break
      case "Nitrogen Monoxide":
        setHref("https://en.wikipedia.org/wiki/Nitric_oxide")
        break
      case "Nitrogen Dioxide":
        setHref("https://en.wikipedia.org/wiki/Nitrogen_dioxide")
        break
      case "Ozone":
        setHref("https://en.wikipedia.org/wiki/Ozone")
        break
      case "Sulfur Dioxide":
        setHref("https://en.wikipedia.org/wiki/Sulfur_dioxide")
        break
      case "Particles <PM2.5":
        setHref("https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health")
        break
      case "Particles <PM10":
        setHref("https://ww2.arb.ca.gov/resources/inhalable-particulate-matter-and-health")
        break
      case "Ammonia":
        setHref("https://en.wikipedia.org/wiki/Ammonia")
        break
      default: 
        break
    }
  }, [title])

  return (
    <div>
      <div className="card-top">
        <img src={img} alt={title} />
      </div>
      <div className='card-main'>
        <p>{title}</p>
        <div className='text text-sm sm:text-md 2xl:text-xl'>{description}</div>
        <div className='footer'>
          <a
            href={href}
            target="_blank"
          >Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Card