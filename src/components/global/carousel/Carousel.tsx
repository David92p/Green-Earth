import React from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

import type  { CardType } from "../../../components/index";
import { Card } from "../../index";


export type CardsCarousel = {
  cards: CardType[];
}

const  Arrow = (props: { className: string; onClick: React.MouseEventHandler<HTMLDivElement> | undefined }) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", padding: "6px 5px",  background: "#FFCC31", height: "30px", width:"30px", borderRadius: 100, }}
      onClick={onClick}
    />
  );
}

const Carousel: React.FC<CardsCarousel> = ({ cards }) => {
  const settings = {
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow className={""} onClick={undefined} />,
    prevArrow: <Arrow className={""} onClick={undefined} />,
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
    <div className="w-[90%] m-auto">
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