import React from 'react'
import loading from "../../assets/images/loading.gif"
import error from "../../assets/images/error.png"


//style 
import "./pending.css"

type PendingType = {
  type: "loading" | "loading-form" | "error"
}

const Pending:React.FC<PendingType> = ({ type }) => {
  return (
    <div className='container-pending'>
			<img src={type == "loading" || type == "loading-form" ? loading : error} alt={type == "loading" ? "Loading ..." : type == "loading-form" ? "Sending...." : "ERROR 404"}/>
    </div>
  )
}

export default Pending