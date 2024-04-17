import { useState } from 'react';
import { Button } from "../index"
import Slider from "react-slick";
import "./header.css"

import img1 from "../../assets/images/header-1.png"
import img2 from "../../assets/images/header-2.png"
import img3 from "../../assets/images/header-3.png"
import img4 from "../../assets/images/header-4.png"


const Header:React.FC = () => {

  const [largeScreen] = useState(window.innerWidth)

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: "continue"
  };
  
  return (
    <div className="flex flex-col 2xl:flex-row 2xl:justify-around bg-myfirstyellow p-4">
      <div className="flex flex-col 2xl:w-1/2 sm:justify-center sm:gap-4">
        <p className="text-mygreen font-mytitlefont text-xl sm:text-2xl font-bold tracking-wider text-center my-4">ENVIRONMENTAL MONITORING</p>
        <p className="text-mygreen font-mytitlefont text-6xl sm:text-7xl font-bold tracking-wider text-center">Our 2050 Journey</p>
        <Button name={"EXPLORE OUR REPORT"} />
      </div>
      {/* container immages */}
      { largeScreen < 641 
        ? (
          <Slider {...settings}>
            <img src={img1} alt="img1" className="h-44 object-fit"/>
            <img src={img2} alt="img2" className="h-44 object-fit"/>
            <img src={img4} alt="img4" className="h-44 object-fit"/>
            <img src={img3} alt="img3" className="h-44 object-fit"/>
          </Slider>
        ) 
        : (
          <div className="flex 2xl:w-2/5 2xl:flex-wrap">
            <img src={img1} alt="img1" className="object-fit w-1/4 h-52 2xl:w-1/2 2xl:pr-2 2xl:pb-2"/>
            <img src={img2} alt="img2" className="object-fit w-1/4 h-52 2xl:w-1/2 2xl:pb-2"/>
            <img src={img4} alt="img4" className="object-fit w-1/4 h-52 2xl:w-1/2 2xl:pr-2"/>
            <img src={img3} alt="img3" className="object-fit w-1/4 h-52 2xl:w-1/2"/>
          </div>
        )
      }
    </div>
  )
}

export default Header
