import React from 'react'

type ButtonType = {
    name: string
}

const Button:React.FC<ButtonType> = ({ name }) => {
  return (
    <button className="bg-mysecondyellow text-mygreen font-bold text-md sm:text-2xl tracking-wider w-3/4 sm:w-2/4 mx-auto my-6 px-1 py-2 sm:py-4 rounded-3xl">
        { name }
    </button>
  )
}

export default Button
