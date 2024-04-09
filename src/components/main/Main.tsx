import React from 'react'
import {Introduction, Body} from "../index"

const Main:React.FC = () => {
  return (
    <div className='flex flex-col p-4 bg-myfirstyellow'>
        <Introduction/>
        <Body />
    </div>
  )
}

export default Main
