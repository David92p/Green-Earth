import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Body:React.FC = () => {
  const [largeScreen] = useState(window.innerWidth)
  return (
    <div className='flex flex-col sm:flex-row bg-slate-100'>
      <div className='flex sm:flex-col h-auto sm:w-1/4 border-none'>
        <div className='flex flex-col sm:flex-row items-center sm:justify-center w-1/3 sm:w-full sm:h-56'>
          <div className='flex justify-center items-center h-2/3 sm:h-full w-full sm:w-2/3 mt-8 sm:mt-0'>
            <FontAwesomeIcon icon={faCircle} style={{color: "#FFCC31", height: largeScreen < 641 ? "50px" : (largeScreen < 1030 ? "60px" : "70px")}} />
          </div>
          <hr className={`bg-mygreen w-2 h-1/3 border-none sm:w-1/3 sm:h-2`}/>
        </div>
        <div className='flex flex-col justify-center gap-4 py-4 w-2/3 sm:w-full border-none'>
          <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center'>European Green Deal</p>
          <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider px-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellat, reiciendis odit dolorem !
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
        <div className='flex flex-col justify-center gap-4 py-4 w-2/3 sm:w-full border-none'>
          <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center'>European Green Deal</p>
          <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider px-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellat, reiciendis odit dolorem !
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
        <div className='flex flex-col justify-center gap-4 py-4 w-2/3 sm:w-full border-none'>
          <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center'>European Green Deal</p>
          <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider px-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellat, reiciendis odit dolorem !
          </p>
        </div>
      </div>
      
      <div className='flex sm:flex-col h-auto sm:w-1/4 border-none'>
        <div className='flex flex-col-reverse sm:flex-row-reverse items-center sm:justify-center w-1/3 sm:w-full sm:h-56'>
          <div className='flex justify-center items-center h-2/3 sm:h-full w-full sm:w-2/3 mb-8 sm:mb-0'>
            <FontAwesomeIcon icon={faCircle} style={{color: "#FFCC31", height: largeScreen < 641 ? "90px" : (largeScreen < 1030 ? "105px" : "110px")}} />
          </div>
          <hr className={`bg-mygreen w-2 h-1/3 border-none sm:w-1/3 sm:h-2`}/>
        </div>
        <div className='flex flex-col justify-center gap-4 py-4 w-2/3 sm:w-full border-none'>
          <p className='text-mygreen font-mytitlefont text-2xl sm:text-4xl font-bold tracking-wider text-center'>European Green Deal</p>
          <p className='text-center text-lg sm:text-2xl text-slate-900 tracking-wider px-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellat, reiciendis odit dolorem !
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body
