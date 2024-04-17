import React from 'react'

export type CardType = {
		key: number
    title: string
    description: string
    img: string
}

const Card:React.FC<CardType> = ({title, description, img}) => {
  return (
    <div className='flex flex-col h-[500px] 2xl:w-[400px] sm:mx-4 rounded-2xl bg-mysecondyellow bg-opacity-40'>
      <div className='h-1/3 2xl:h-2/5 rounded-2xl shadow-xl shadow-mysecondyellow border-4 border-mysecondyellow 2xl:mx-2 2xl:mt-2'>
				<img src={img} alt={title} className='object-fit h-full w-full rounded-t-2xl rounded-b-2xl bg-red-50'/>
			</div>
      <div className='h-2/3 2xl:h-3/5 flex flex-col justify-around sm:justify-start  sm:gap-3 items-center'>
				<p className='text-mygreen font-mytitlefont text-3xl sm:text-2xl 2xl:text-3xl font-bold tracking-wider text-center sm:px-4 sm:my-4'>{title}</p>
				<p className='text-justify mx-4 pb-4 text-md sm:text-lg 2xl:text-xl text-slate-900 tracking-wider'>{description}</p>
			</div>
    </div>
  )
}

export default Card
