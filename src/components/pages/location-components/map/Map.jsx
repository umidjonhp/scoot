import mapImg from "../../../../../public/mock-images/map/map.png"
import { Button } from "../../../common/button/Button"
export const Map = () => {
  return (
    <div className="container mb-[120px]">
      <div className="my-[120px] w-[100%]">
          <img src={mapImg} alt="map" className="" />
      </div>
      <div className="flex items-center justify-between gap-[30px]">
        <h2 className="text-darkNavy text-5xl font-bold font-spaceMono leading-[48px]">Your city <br /> not listed?</h2>
        <p className="text-dimGrey w-[40%] text-[15px] font-lexendDeca leading-[25px]">If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
        <Button>Message Us</Button>
      </div>
    </div>
  )
}
