import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import { Carousel, Card } from '../'
import type { CardType } from '../../components'
// data
import body1 from "../../assets/images/body-1.png"
import body2 from "../../assets/images/body-2.mp4"
import { cards } from "../../data" 

const Main:React.FC = () => {
  const [largeScreen] = useState(window.innerWidth)
  return (
    <div className='flex flex-col bg-red-50' id='eugreendeal'>
      <div className='flex justify-center items-center'> 
        <div className='absolute flex justify-center sm:w-1/2 2xl:w-2/3'>
          <span className='text-slate-100 font-mytitlefont text-4xl sm:text-5xl 2xl:text-7xl font-bold tracking-wider text-center'>Always aiming<br/>for tomorrow's possibilities</span>
        </div>
        <video src={body2} autoPlay loop muted className='object-cover h-72 2xl:h-[500px] sm:w-full'/>
      </div>
      <div className='sm:py-6 px-4 sm:px-8'>
        <p className="text-mygreen font-mytitlefont text-4xl sm:text-5xl font-bold tracking-wider text-center pt-6">European<br/>Green Deal</p>
        <p className='text-center py-4 2xl:px-10 text-lg sm:text-2xl text-slate-900 tracking-wider'>
          The European Green Deal is a package of strategic initiatives that aims to put the EU on the path to a green transition, with the ultimate goal of achieving climate neutrality by 2050.
        </p>
        <div className="flex flex-col sm:flex-row">
          <div className='flex sm:flex-col h-auto sm:w-1/4 border-none'>
            <div className='flex flex-col sm:flex-row items-center sm:justify-center w-1/3 sm:w-full sm:h-56'>
              <div className='flex justify-center items-center h-1/3 sm:h-full w-full sm:w-2/3 mt-8 mb-8 sm:m-0'>
                <FontAwesomeIcon icon={faCircle} style={{color: "#FFCC31", height: largeScreen < 641 ? "50px" : (largeScreen < 1030 ? "60px" : "70px")}} />
              </div>
              <hr className={`bg-mygreen w-2 h-2/3 border-none sm:w-1/3 sm:h-2`}/>
            </div>
            <div className='flex flex-col justify-center sm:justify-start sm:gap-14 py-4 2xl:px-8 w-2/3 sm:w-full sm:h-full'>
              <p className='text-mygreen font-mytitlefont text-2xl sm:text-3xl font-bold tracking-wider text-center 2xl:mx-12'>Initiative of December 2019</p>
              <p className='text-center font-mytitlefont text-lg sm:text-2xl text-slate-900 tracking-wider px-2 2xl:mt-10'>
                European Green Deal signed by the EU in 2019. Highlights the need for a holistic and cross-sectoral approach in which all relevant policy sectors contribute to the ultimate climate objective.
              </p>
            </div>
          </div>

          <div className='flex sm:flex-col h-auto sm:w-1/4 border-none'>
            <div className='flex flex-col sm:flex-row items-center sm:justify-center w-1/3 sm:w-full sm:h-56'>
              <hr className={`bg-mygreen w-2 h-1/4 border-none sm:w-1/4 sm:h-2`}/>
              <div className='flex justify-center items-center h-2/4 sm:h-full w-full sm:w-2/3 sm:mt-0'>
                <FontAwesomeIcon icon={faCircle} style={{color: "#FFCC31", height: largeScreen < 641 ? "65px" : (largeScreen < 1030 ? "75px" : "85px")}} />
              </div>
              <hr className={`bg-mygreen w-2 h-1/4 border-none sm:w-1/4 sm:h-2`}/>
            </div>
            <div className='flex flex-col justify-center sm:justify-start sm:gap-14 py-4 2xl:px-8 w-2/3 sm:w-full sm:h-full'>
              <p className='text-mygreen font-mytitlefont text-2xl sm:text-3xl font-bold tracking-wider text-center'>Definition<br/>of March 2024</p>
              <p className='text-center font-mytitlefont text-lg sm:text-2xl text-slate-900 tracking-wider px-2'>
                In 2024 the EU presented an intermediate climate target. Reducing net greenhouse gas emissions by 90% by 2040 compared to 1990 levels would ensure the EU meets its commitment to be climate neutral by 2050. The European Parliament and member states are now discussing this target.
              </p>
            </div>
          </div>

          <div className='flex sm:flex-col h-auto sm:w-1/4 border-none'>
            <div className='flex flex-col sm:flex-row items-center sm:justify-center w-1/3 sm:w-full sm:h-56'>
              <hr className={`bg-mygreen w-2 h-1/4 border-none sm:w-1/4 sm:h-2`}/>
              <div className='flex justify-center items-center h-2/4 sm:h-full w-full sm:w-2/3 sm:mt-0'>
                <FontAwesomeIcon icon={faCircle} style={{color: "#FFCC31", height: largeScreen < 641 ? "75px" : (largeScreen < 1030 ? "90px" : "95px")}} />
              </div>
              <hr className={`bg-mygreen w-2 h-1/4 border-none sm:w-1/4 sm:h-2`}/>
            </div>
            <div className='flex flex-col justify-center sm:justify-start sm:gap-14 gap-4 py-4 2xl:px-8 w-2/3 sm:w-full sm:h-full border-none'>
              <p className='text-mygreen font-mytitlefont text-2xl sm:text-3xl font-bold tracking-wider text-center'>First milestone<br/>of 2030</p>
              <p className='text-center font-mytitlefont text-lg sm:text-2xl text-slate-900 tracking-wider px-2'>
                The European Commission has adopted a series of proposals to achieve the EU's climate, energy, transport and taxation targets to reduce net greenhouse gas emissions by at least 55% by 2030 and in 2040 to the pollution levels imposed in the initial agreement set in March 2024.
              </p>
            </div>
          </div>
          
          <div className='flex sm:flex-col h-auto sm:w-1/4 border-none'>
            <div className='flex flex-col-reverse sm:flex-row-reverse items-center sm:justify-center w-1/3 sm:w-full sm:h-56'>
              <div className='flex justify-center items-center h-1/3 sm:h-full w-full sm:w-2/3 mt-12 mb-28 sm:m-0'>
                <FontAwesomeIcon icon={faCircle} style={{color: "#FFCC31", height: largeScreen < 641 ? "90px" : (largeScreen < 1030 ? "105px" : "110px")}} />
              </div>
              <hr className={`bg-mygreen w-2 h-2/3 border-none sm:w-1/3 sm:h-2`}/>
            </div>
            <div className='flex flex-col justify-center sm:justify-start sm:gap-14 sm:pt-12 2xl:pt-0 py-4 sm:px-4 2xl:px-8 w-2/3 sm:w-full sm:h-full border-none'>
              <p className='text-mygreen font-mytitlefont text-2xl sm:text-3xl font-bold tracking-wider text-center'>The goal<br/>of 2050</p>
              <p className='text-center font-mytitlefont text-lg sm:text-2xl text-slate-900 tracking-wider px-2'>
                A series of political initiatives aimed at making the EU climate neutral in 2050 and achieving the objective set by the "European Green Deal". The agreement will save our planet from 310 million tons of harmful CO2 emissions.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-center font-mytitlefont text-lg sm:text-2xl text-slate-900 tracking-wider p-4 h-auto'>
            The regulation aims to spur innovation for a new era of green technology, while inspiring countries outside the EU to take similar measures to safeguard the planet for future generations.
            <br/>You can find more information about it through the <a className='font-mytitlefont text-mygreen' href="https://commission.europa.eu/index_it" target="_blank">official page of the European Union</a> or directly at the link on the topic <a className='font-mytitlefont text-mygreen' target="_blank" href="https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal_it">European Green Deal</a>.
          </p>
          <img src={body1} alt="body-1" className='object-cover w-full 2xl:w-[800px] h-32 sm:h-72'/>
        </div>
      </div>
      <div className='flex flex-col p-6 sm:px-14 2xl:gap-8'>
        <p className='text-mygreen font-mytitlefont text-4xl sm:text-5xl font-bold tracking-wider text-center sm:pt-6'>Air Pollution Levels</p>
        <p className='text-center font-mytitlefont py-4 sm:py-8 2xl:py-4 2xl:px-10 text-lg sm:text-2xl text-slate-900 tracking-wider'>
          The main greenhouse gases present in the Earth's atmosphere are Methane (CH₄), Carbon Monoxide (CO), Ozone (O₃) and Nitrogen Dioxide (NO₂).
          <br/> Unfortunately there are many other substances that we unconsciously introduce into our body during the act of breathing. The percentages of all these gases are much lower than those we have just mentioned, despite this, many are polluting gases that can have repercussions on our health and the ecosystem.
        </p>
        { largeScreen < 1030 ? <Carousel cards={cards}/> 
        : (
          <div className='flex justify-center gap-4'>
            {
              cards.map((card:CardType) => {
                return <Card {...card}/>
              })
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Main

