import React from 'react'

import main1 from "../../assets/images/main-1.png"

const Introduction:React.FC = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center'>
        <div className='sm:w-2/3 sm:pr-4 2xl:h-80 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:gap-10'>
            <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center'>Air Pollutants</p>
            {/* <p className='text-mygreen font-mytitlefont text-2xl font-bold tracking-wider text-center'>Our Adventure Thus Far</p> */}
            <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider pt-4'>
                Atmospheric pollutants are substances that alter the normal chemical composition of the air with consequences on human health and the environment.<br/>
                For each pollutant, the main chemical-physical characteristics, the areas of probable accumulation, the sources of emission, the effects on health and the most critical periods of the year are reported.
            </p>
        </div>
        <div className='sm:w-1/3'>
          <img src={main1} alt="img1" className='w-3/4 my-4 m-auto'/>
        </div>
    </div>
  )
}

export default Introduction
