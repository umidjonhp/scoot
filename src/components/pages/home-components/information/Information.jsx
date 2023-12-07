// import Img
import card1Img from "../../../../../public/mock-images/home/information/app.svg"
import card2Img from "../../../../../public/mock-images/home/information/scuter.svg"
import card3Img from "../../../../../public/mock-images/home/information/scuter1.svg"

const cardes = [
  {
    id: "1",
    title: "Locate with app",
    info: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
    photo: card1Img,
  },
  {
    id: "2",
    title: "Pick your scooter",
    info: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
    photo: card2Img,
  },
  {
    id: "3",
    title: "Enjoy the ride",
    info: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
    photo: card3Img,
  },
]
export const Information = () => {
  return (
    <>
      <div className="container mt-[160px] mb-[200px]">
        <div className="flex items-center gap-[30px] relative">
          <span className="absolute bg-lightGrey h-[10px] w-[974px] top-[15%] -left-[18%]"></span>
          {
            cardes.map((card) => {
              return (
                <div className="flex flex-col items-start" key={card.id}>
                  <img src={card.photo} className="w-24 h-24 z-10" />
                  <h4 className="text-darkNavy text-2xl font-bold font-spaceMono leading-7 mt-[40px]">{card.title}</h4>
                  <p className="text-dimGrey text-[15px] font-normal font-lexendDeca leading-[25px] mt-[27px] ">{card.info}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
