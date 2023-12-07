import React from 'react'

export const Button = ({children}) => {
  return (
    <button className="bg-yellow text-white text-[15px] font-bold font-spaceMono leading-[25px] py-[14px] px-[47.5px] transition-all ease-linear duration-300 hover:text-amber-400 hover:bg-white border-2 hover:border-yellow">{children}</button>
  )
}
