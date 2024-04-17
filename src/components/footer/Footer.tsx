import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='h-44 bg-myfirstyellow font-mytitlefont px-1'>
      <div className='flex flex-col justify-center items-center gap-2 h-3/5'>
        <p className='text-mygreen text-2xl sm:text-3xl font-bold tracking-wider text-center'>Follow Me</p>
        <div className='flex justify-center gap-8'>
          <FontAwesomeIcon icon={faLinkedin} style={{color: "#0e76a8",}} className='text-2xl sm:text-3xl'/>
          <FontAwesomeIcon icon={faGithub} style={{color: "#171515",}} className='text-2xl sm:text-3xl'/>
          <FontAwesomeIcon icon={faFacebook} style={{color: "#3b5998",}} className='text-2xl sm:text-3xl'/>
        </div>
      </div>
      <div className='flex flex-col justify-center h-2/5'>
        <p className='text-mygreen text-md font-bold tracking-wider text-center'>© 2024 Green Earth. All rights reserved.</p>
        <p className='text-mygreen text-lg font-bold tracking-wider text-center'>Created by Davide Panetta.</p>
      </div>
    </div>
  )
}

export default Footer
