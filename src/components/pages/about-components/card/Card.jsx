// import Img
import phone from "../../../../../public/mock-images/aboutImg/cardImg/phone.png"
import train from "../../../../../public/mock-images/aboutImg/cardImg/train.png"
// data
const aboutCards = [
  {
    id: "1",
    title: "Mobility for the digital era",
    info: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
    photo: phone,
    state: true,
  },
  {
    id: "2",
    title: "Better urban living",
    info: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
    photo: train,
    state: false,
  },
];

export const Card = () => {
  return (
    <>
      <div className="container flex flex-col gap-[120px] mb-[200px]">
        {
          aboutCards.map((card) => {
            return (
              <div className={`flex items-center gap-[220px] ${card.state ? 'flex-row' : 'flex-row-reverse'}`} key={card.id}>
                <div className="flex flex-col gap-6 items-start w-[47%]">
                  <h2 className="text-darkNavy text-5xl font-bold font-spaceMono leading-[48px]">{card.title}</h2>
                  <p className="text-dimGrey text-[15px] font-lexendDeca leading-[25px] mb-[16px] pr-[24px]">{card.info}</p>
                </div>
                <div className="w-[445px] h-[445px] bg-zinc-300 rounded-full overflow-hidden">
                  <img src={card.photo} alt="" className="w-[100%] h-[100%]" />
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
