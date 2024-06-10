import React, { useState } from 'react'

import introduction1 from "../../assets/images/introduction-1.png"
import introduction2 from "../../assets/images/introduction-2.png"
import introduction3 from "../../assets/images/introduction-3.png"

import "./introduction.css"

const Introduction:React.FC = () => {

  const [largeScreen] = useState(window.innerWidth)
  
  return (
    <div className='container-introduction' id='introduction'>
      <div className='section-introduction'>
        <div className='section-introduction-text'>
          <p className='introduction-title'>Air{largeScreen > 1030 ? <br/> : " "}Pollutants</p>
          <p className='introduction-text'>
            Atmospheric pollutants are substances that alter the normal chemical composition of the air with consequences on human health and the environment.<br/>
            For each pollutant, the main chemical-physical characteristics, the areas of probable accumulation, the sources of emission, the effects on health and the most critical periods of the year are reported.
          </p>
        </div>
        <img src={introduction1} alt="introduction1" className='introduction-img'/>
      </div>
      <div className='section-introduction 2xl:flex-row-reverse'>
        <div className='section-introduction-text'>
          <p className='introduction-title'>Pollutant{largeScreen > 1030 ? <br/> : " "}Classification</p>
          <p className='introduction-text'>
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
        <img src={introduction2} alt="introduction2" className='introduction-img'/>
      </div>
      <div className='section-introduction'>
        <div className='section-introduction-text'>
          <p className='introduction-title'>Research {largeScreen > 1030 ? <br/> : " "}&{largeScreen > 1030 ? <br/> : " "} Sustainability</p>
          <p className='introduction-text'>
            Collecting and analyzing data is the first step towards change. 
            Let's examine the levels of pollutants in the air together and fight for a sustainable future.
            <br/>We believe in change by becoming aware of current environmental results. The graphs show the levels of pollutants that are present on our planet.
          </p>
        </div>
        <div className='flex justify-center w-full sm:w-7/12 px-10 sm:px-4 py-5'>
          <img src={introduction3} alt="introduction3" className='introduction-img w-full object-fit'/>
        </div>
      </div>
    </div>
  )
}

export default Introduction
