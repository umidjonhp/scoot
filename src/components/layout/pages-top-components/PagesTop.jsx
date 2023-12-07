import React from 'react'

export const PagesTop = ({img, name}) => {
  return (
    <div className="h-[200px] relative overflow-hidden" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <span className="absolute w-[100%] h-[100%] bg-[#2E3A58] opacity-75  top-0 right-0"></span>
      <div className="container ">
        <h2 className="text-white text-[56px] font-bold font-spaceMono leading-[56px] absolute top-[62px]">{name}</h2>
      </div>
    </div>
  )
}
