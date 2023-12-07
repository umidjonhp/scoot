import bgImg from "../../../../../public/mock-images/home/hero/Bitmap.png"
import line from "../../../../../public/mock-images/home/hero/line.svg"
import right from "../../../../../public/mock-images/home/hero/right.svg"

import { Button } from "../../../common/button/Button"

export const Hero = () => {
  return (
    <div className="h-[650px]  relative overflow-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <span className="absolute w-[100%] h-[100%] bg-[#2E3A58] opacity-75  top-0 right-0"></span>
      <div className="container relative">
        <div className="absolute top-[153px]">
          <h1 className="text-white text-[56px] font-bold font-spaceMono leading-[56px]">Scooter sharing <br /> made simple</h1>
          <div className="flex flex-col items-start gap-[40px] w-[515px] mt-[40px] pl-[110px] ">
            <p className="text-white text-[15px] font-lexendDeca font-normal leading-[25px]">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
            <Button>Get Scootin</Button>

            <img src={line} alt="line" className="absolute -left-[40%] top-[195px]" />
            <img src={right} alt="line" className="absolute left-[110%] top-[195px]" />
            <div className="flex items-center gap-6 absolute left-[217%] top-[265px]">
              <div className="w-[62px] h-[62px] left-0 top-0 rounded-full border-2 border-white" />
              <div className="w-[62px] h-[62px] left-[86px] top-0 rounded-full border-2 border-white" />
              <div className="w-[62px] h-[62px] left-[172px] top-0 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
