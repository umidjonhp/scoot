import bgImg from "../../../../../public/mock-images/home/hero/Bitmap.png"
import { Button } from "../../../common/button/Button"

export const Hero = () => {
  return (
    <div className="h-[600px] max-mobile:h-[650px] relative overflow-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <span className="absolute w-[100%] h-[100%] bg-[#2E3A58] opacity-75  top-0 right-0"></span>
      <div className="container py-[152px] relative max-md:flex  max-md:justify-center max-mobile:pt-[115px]">
        <div className="flex flex-col gap-[40px] max-md:gap-6 max-mobile:gap-6 max-md:items-center ">
          <h1 className="text-white text-[56px] font-bold w-[50%] font-spaceMono leading-[56px] max-md:w-[80%] max-md:text-center max-mobile:text-[40px] max-mobile:w-[100%]">Scooter sharing made simple</h1>
          <div className="flex flex-col items-start gap-[40px] w-[515px] max-md:items-center max-md:gap-8 max-mobile:w-[100%]">
            <p className="text-white md:tablet:text-center text-[15px] font-lexendDeca font-normal leading-[25px] max-mobile:text-center">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
            <Button>Get Scootin</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
