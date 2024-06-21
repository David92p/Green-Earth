
import { useState } from "react";
import "./navbar.css"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom";


const Navbar:React.FC = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="container-nav">
			<div className="container-toggle">
				<NavLink className="container-logo" to="/" onClick={() => setIsOpen(false)}>
					<img src={logo} alt="LOGO" className={`logo ${isOpen ? "hidden" : null}`}/>
				</NavLink>
				<div className="container-links invisible sm:visible">
					<NavLink to="/" className="link" onClick={() => setIsOpen(false)}>Introduction</NavLink>
					<NavLink to="/data-search" className="link" onClick={() => setIsOpen(false)}>Chart</NavLink>
					<NavLink to="/european-green-deal" className="link" onClick={() => setIsOpen(false)}>EU Green Deal</NavLink>
					<NavLink to="/contact" className="link" onClick={() => setIsOpen(false)}>Contact</NavLink>
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
						<NavLink to="/" className="link" onClick={() => setIsOpen(false)}>Introduction</NavLink>
						<NavLink to="/data-search" className="link" onClick={() => setIsOpen(false)}>Chart</NavLink>
						<NavLink to="/european-green-deal" className="link" onClick={() => setIsOpen(false)}>EU Green Deal</NavLink>
						<NavLink to="/contact" className="link" onClick={() => setIsOpen(false)}>Contact</NavLink>
					</div>
				) : null
			}
    </div>
  )
}

export default Navbar
