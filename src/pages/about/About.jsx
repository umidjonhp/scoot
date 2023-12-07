import { Card, Faqs, } from "../../components/pages/about-components";
import { OurValues, PagesTop } from "../../components/layout";
// import Img
import bgImg from "../../../public/mock-images/aboutImg/bg.png"

export const About = () => {
  return (
    <>
      <PagesTop img={bgImg} name={"About"} />
      <Card />
      <OurValues />
      <Faqs />
    </>
  )
}
