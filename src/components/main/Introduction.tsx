import React from 'react'

import introduction1 from "../../assets/images/introduction-1.png"
import introduction2 from "../../assets/images/introduction-2.png"
import introduction3 from "../../assets/images/introduction-3.png"

const Introduction:React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-4 sm:gap-8 p-6 sm:p-8 2xl:p-10'>
        <div className='flex flex-col 2xl:flex-row justify-center items-center sm:gap-4 2xl:px-6'>
          <div>
            <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center mb-2 2xl:mb-4'>Air Pollutants</p>
            <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider sm:px-6'>
              Atmospheric pollutants are substances that alter the normal chemical composition of the air with consequences on human health and the environment.<br/>
              For each pollutant, the main chemical-physical characteristics, the areas of probable accumulation, the sources of emission, the effects on health and the most critical periods of the year are reported.
            </p>
          </div>
          <img src={introduction1} alt="introduction1" className='h-52 sm:h-72 sm:w-3/5 2xl:w-2/5 my-4 rounded-3xl'/>
        </div>
        <div className='flex flex-col 2xl:flex-row-reverse justify-center items-center sm:gap-4 2xl:px-6'>
          <div>
            <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center mb-2 2xl:mb-4'>Pollutant Classification</p>
            <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider sm:px-6'>
              Can be classified as primary or secondary, depending on how they are formed.
              <br/>Primary pollutants are those emitted directly
              from human-managed processes, for example carbon monoxide
              carbon emitted from the tailpipe of a vehicle a
              engine or sulfur dioxide emitted by factories. 
              <br/>The secondary pollutants are those that are formed when
              primary pollutants react or interact
              in the atmosphere. A very secondary pollutant
              important is tropospheric ozone , which is the result
              of chemical reactions between primary pollutants and sunlight.
              <br/>Some pollutants, for example
              some particulates of various sizes, can be both
              primary and secondary.
            </p>
          </div>
          <img src={introduction2} alt="introduction2" className='h-52 sm:h-72 sm:w-3/5 2xl:w-2/5 my-4 rounded-3xl'/>
        </div>
        <div className='flex flex-col 2xl:flex-row justify-center 2xl:justify-between items-center sm:gap-4 2xl:w-full'>
          <div>
            <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center mb-2 2xl:mb-4'>Research & Sustainability</p>
            <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider sm:px-6'>
              Collecting and analyzing data is the first step towards change. 
              Let's examine the levels of pollutants in the air together and fight for a sustainable future.
              <br/>We believe in change by becoming aware of current environmental results. The graphs show the levels of pollutants that are present on our planet.
            </p>
          </div>
          <div className='flex justify-center w-full sm:w-2/5 sm:px-6'>
            <img src={introduction3} alt="introduction3" className='h-64 sm:h-96 2xl:h-80 w-full sm:w-4/5 object-fit my-4'/>
          </div>
        </div>
    </div>
  )
}

export default Introduction
