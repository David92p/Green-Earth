import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import type  { CardType } from "./Card";
import Card from "./Card";


export type CardsCarousel = {
  cards: CardType[];
}

const Carousel: React.FC<CardsCarousel> = ({ cards }) => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (  
    <div>
      <Slider {...settings}>
        {
          cards.map((card) => {
            return <Card {...card}/>
          })
        }
      </Slider>
    </div>
  )
};

export default Carousel;