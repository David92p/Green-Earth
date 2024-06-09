import React from 'react'
import loading from "../../assets/images/loading.gif"

const Loading:React.FC = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
			<img src={loading} alt="Loading ..." className=''/>
    </div>
  )
}

export default Loading