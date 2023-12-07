import { PagesTop } from "../../components/layout"
import { Map } from "../../components/pages/location-components/map/Map"
// import Img
import bgImg from "../../../public/mock-images/careersImg/bg.png"

export const Location = () => {
  return (
    <>
      <PagesTop img={bgImg} name={"Locations"} />
      <Map />
    </>
  )
}
