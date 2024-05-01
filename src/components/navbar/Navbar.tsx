
import { useState } from "react";
import "./navbar.css"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import logo from "../../assets/images/logo.png"


const Navbar:React.FC = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="container-nav">
			<div className="container-toggle">
				<a className="container-logo" href="#top" onClick={() => setIsOpen(false)}>
					<img src={logo} alt="LOGO" className={`logo ${isOpen ? "hidden" : null}`}/>
				</a>
				<div className="container-links invisible sm:visible">
					<a className="link" href="#introduction" onClick={() => setIsOpen(false)}>Introduction</a>
					<a className="link" href="#chart" onClick={() => setIsOpen(false)}>Chart</a>
					<a className="link" href="#eugreendeal" onClick={() => setIsOpen(false)}>EU Green Deal</a>
					<a className="link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
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
						<a className="link" href="#introduction" onClick={() => setIsOpen(false)}>Introduction</a>
						<a className="link" href="#chart" onClick={() => setIsOpen(false)}>Chart</a>
						<a className="link" href="#eugreendeal" onClick={() => setIsOpen(false)}>EU Green Deal</a>
						<a className="link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
					</div>
				) : null
			}
    </div>
  )
}

export default Navbar
