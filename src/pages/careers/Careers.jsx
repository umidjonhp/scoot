import { Card, Job, } from "../../components/pages/careers-components";
import { OurValues, PagesTop } from "../../components/layout";
// import Img
import bgImg from "../../../public/mock-images/careersImg/bg.png"
export const Careers = () => {
  return (
    <>
      <PagesTop img={bgImg} name={"Careers"} />
      <Card/>
      <OurValues componentName={"Why join us?"}/>
      <Job/>
    </>
  )
}
