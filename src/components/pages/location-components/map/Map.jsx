import mapImg from "../../../../../public/mock-images/map/map.png"
import { Button } from "../../../common/button/Button"
export const Map = () => {
  return (
    <div className="container mb-[120px] max-mobile:gap-[72px]">
      <div className="my-[120px] w-[100%]">
          <img src={mapImg} alt="map" className="" />
      </div>
      <div className="flex items-center justify-between gap-[30px] max-md:gap-10 max-md:flex-col max-md:justify-center max-mobile:gap-[32px]">
        <h2 className="text-darkNavy text-5xl font-bold font-spaceMono leading-[48px] w-[30%] max-md:w-[80%] max-md:text-center max-mobile:text-[32px] max-mobile:w-[100%]">Your city not listed?</h2>
        <p className="text-dimGrey w-[40%] text-[15px] font-lexendDeca leading-[25px] max-md:w-[85%] max-md:text-center">If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
        <Button>Message Us</Button>
      </div>
    </div>
  )
}
