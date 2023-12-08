import React from 'react'

export const PagesTop = ({img, name}) => {
  return (
    <div className="h-[200px] relative overflow-hidden max-mobile:mt-[64px] max-mobile:h-40" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <span className="absolute w-[100%] h-[100%] bg-[#2E3A58] opacity-75  top-0 right-0"></span>
      <div className="container ">
        <h2 className="text-white text-[56px] max-mobile:text-10 font-bold font-spaceMono leading-[56px] absolute top-[62px] max-mobile:top-[45px]">{name}</h2>
      </div>
    </div>
  )
}
