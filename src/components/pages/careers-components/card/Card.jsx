import img from "../../../../../public/mock-images/careersImg/img.png"
export const Card = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-[213px] my-[116px]">
        <div className="flex flex-col gap-6 items-start w-[47%]">
          <h2 className="text-darkNavy text-5xl font-bold font-spaceMono leading-[48px]">Care to join our mission?</h2>
          <p className="text-dimGrey text-[15px] font-lexendDeca leading-[25px] mb-[16px] pr-[24px]">We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
        </div>
        <div className="w-[445px] h-[445px] bg-zinc-300 rounded-full overflow-hidden">
          <img src={img} alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  )
}
