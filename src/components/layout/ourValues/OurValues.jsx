// import Img
import card1 from "../../../../public/mock-images/ourValvuesImg/card1.png"
import card2 from "../../../../public/mock-images/ourValvuesImg/card2.png"
import card3 from "../../../../public/mock-images/ourValvuesImg/card3.png"
// data
const OurValuesCardes = [
  {
    id: "01",
    title: "Our tech",
    info: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    photo: card1,
  },
  {
    id: "02",
    title: "Our integrity",
    info: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    photo: card2,
  },
  {
    id: "03",
    title: "Our community",
    info: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    photo: card3,
  },
];
export const OurValues = ({componentName}) => {
  return (
    <div className="container flex flex-col items-center justify-center gap-[103px] mb-[120px] max-md:gap-[87px] max-mobile:mb-[145px] max-mobile:gap-14">
      <h2 className="text-darkNavy text-5xl font-bold font-spaceMono leading-[48px] max-mobile:text-[32px]">{componentName}</h2>
      <div className="flex items-center gap-[30px] max-md:gap-[55px] max-md:flex-col">
        {
          OurValuesCardes.map((card) => {
            return (
              <div className="flex flex-col items-center w-[33%] max-md:w-[75%]" key={card.id}>
                <div className="w-60 h-60 rounded-[50%] overflow-hidden mb-[87px] max-mobile:mb-[64px]">
                  <img src={card.photo} className="" />
                </div>
                <div className="flex flex-col gap-[27px] items-center relative">
                  <h4 className="text-darkNavy text-2xl font-bold font-spaceMono leading-7">{card.title}</h4>
                  <p className="text-dimGrey text-[15px] font-lexendDeca leading-[25px] text-center">{card.info}</p>
                  <span className="w-24 h-24 rounded-[50%] p-[34px] -top-[101%] max-md:-top-[122%] max-mobile:-top-[65%]   absolute bg-yellow flex items-center justify-center text-darkNavy text-2xl font-bold font-spaceMono leading-7">{card.id}</span> 
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
