import React from 'react'
// img
import loading from "../../../assets/images/loading.gif"
import error from "../../../assets/images/error.png"
//style 
import "./pending.css"

type PendingType = {
  type: "loading" | "loading-form" | "error" | "error-form"
}

const Pending:React.FC<PendingType> = ({ type }) => {
  return (
    <div className={`container-pending`}>
			<img className={`object-contain ${type == "error" ? "sm:w-2/3 2xl:w-1/3" : type == "loading" ? "sm:w-1/2 2xl:w-1/4" : "sm:w-3/4"}`} src={type == "loading" || type == "loading-form" ? loading : error} alt={type == "loading" ? "Loading ..." : type == "loading-form" ? "Sending...." : "ERROR 404"}/>
    </div>
  )
}

export default Pending