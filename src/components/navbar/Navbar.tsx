
import { useState } from "react";
import "./navbar.css"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import logo from "../../assets/images/logo.png"


const Navbar:React.FC = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

  // const onMenu = () => {
  //   const containerLink = document.querySelector(
  //     ".container-link"
  //   ) as HTMLDivElement;
  //   if (menu) {
  //     containerLink.classList.add("absolute");
  //     setMenu(false);
  //   } else {
  //     containerLink.classList.remove("absolute");
  //     setMenu(true);
  //   }
  // };

  //const [ backgroundColor, setBackgroundcolor] = useState(false)

	// const changeColor = () => {
	// 	if (window.scrollY >= 90){
	// 		setBackgroundcolor(true)
	// 	} else {
	// 		setBackgroundcolor(false)
	// 	}
	// }


  return (
    <div className="container">
			<div className="container-toggle">
				<div className="container-logo">
					<img src={logo} alt="LOGO" className={`logo ${isOpen ? "hidden" : null}`}/>
				</div>
				<div className="container-links invisible sm:visible">
					<div className="link">Chart</div>
					<div className="link">Introduction</div>
					<div className="link">EU Green Deal</div>
					<div className="link">Contact</div>
				</div>
				<div className="container-burger">
					<motion.button
						whileTap={{ scale: 0.97 }}
					>
					{ isOpen 
						? <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(!isOpen)} className="close-burger" /> 
						: <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} className="open-burger" />
					}
					</motion.button>
				</div>
			</div>
			{
				isOpen ? (
					<div className="container-links">
						<div className="link">Chart</div>
						<div className="link">Introduction</div>
						<div className="link">EU Green Deal</div>
						<div className="link">Contact</div>
					</div>
				) : null
			}
    </div>
  )
}

export default Navbar
