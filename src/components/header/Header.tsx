
import { Button } from "../index"
import "./header.css"

import img1 from "../../assets/images/header-1.png"
import img2 from "../../assets/images/header-2.png"
import img3 from "../../assets/images/header-3.png"
import img4 from "../../assets/images/header-4.png"

const Header:React.FC = () => {
  return (
    <div className="flex flex-col 2xl:flex-row bg-myfirstyellow p-4">
      <div className="flex flex-col 2xl:w-1/2 sm:justify-center sm:gap-4">
        <p className="text-mygreen font-mytitlefont text-xl sm:text-2xl font-bold tracking-wider text-center my-4">ENVIRONMENTAL MONITORING</p>
        <p className="text-mygreen font-mytitlefont text-6xl sm:text-7xl font-bold tracking-wider text-center">Our 2030 Journey</p>
        <Button name={"EXPLORE OUR REPORT"} />
      </div>
      {/* container immages */}
      <div className="flex flex-col sm:flex-row sm:justify-center 2xl:w-1/2 2xl:flex-wrap">
        <img src={img1} alt="img1" className="sm:w-1/4 2xl:w-1/2"/>
        <img src={img2} alt="img2" className="sm:w-1/4 2xl:w-1/2"/>
        <img src={img4} alt="img2" className="sm:w-1/4 2xl:w-1/2"/>
        <img src={img3} alt="img3" className="sm:w-1/4 2xl:w-1/2"/>
      </div>
    </div>
  )
}

export default Header
