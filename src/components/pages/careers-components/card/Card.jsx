import img from "../../../../../public/mock-images/careersImg/img.png"
import { Button } from "../../../common/button/Button"
export const Card = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-[213px] my-[116px] max-md:flex-col-reverse max-md:gap-16 max-md:mb-[120px] max-md:mt-36 max-mobile:mt-[72px] max-mobile:mb-[120px] max-mobile:gap-14">
        <div className="flex flex-col gap-6 items-start w-[47%] max-md:w-[85%] max-md:gap-10 max-md:items-center max-mobile:w-[100%] max-mobile:gap-9">
          <h2 className="text-darkNavy text-5xl font-bold font-spaceMono leading-[48px] max-md:text-center max-mobile:text-[32px]">Care to join our mission?</h2>
          <p className="text-dimGrey text-[15px] font-lexendDeca leading-[25px] mb-[16px] pr-[24px] max-md:text-center">We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
          <Button>Say Hello</Button>
        </div>
        <div className="w-[445px] h-[445px] max-mobile:w-[311px] max-mobile:h-[311px] bg-zinc-300 rounded-full overflow-hidden">
          <img src={img} alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  )
}
