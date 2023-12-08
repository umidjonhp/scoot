// import Img
import boy from "../../../../../public/mock-images/home/homeMain/boy.png"
import city from "../../../../../public/mock-images/home/homeMain/city.png"
import money from "../../../../../public/mock-images/home/homeMain/money.png"
import { Button } from "../../../common/button/Button";
// data
const services = [
  {
    id: "1",
    title: "Easy to use riding telemetry",
    info: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    photo: boy,
    state: true,
  },
  {
    id: "2",
    title: "Coming to a city near you",
    info: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
    photo: city,
    state: false,
  },
  {
    id: "3",
    title: "Zero hassle payments",
    info: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
    photo: money,
    state: true,
  },
];
export const Main = () => {
  return (
    <div className="container flex flex-col gap-40 mb-[200px] max-md:gap-32 max-md:mb-[104px]">
      {
        services.map((service) => {
          return (
            <div key={service.id} className={`flex items-center gap-[220px] ${service.state ? 'flex-row' : 'flex-row-reverse'} max-md:flex-col-reverse max-md:gap-14`}>
              <div className="flex flex-col gap-6 items-start w-[47%] max-md:w-[85%] max-md:gap-10 max-md:items-center">
                <h2 className="text-darkNavy text-5xl font-bold font-spaceMono leading-[48px] max-md:text-center max-md:w-[90%]">{service.title}</h2>
                <p className="text-dimGrey text-[15px] font-lexendDeca leading-[25px] mb-[16px] pr-[24px] max-md:text-center">{service.info}</p>
                <Button>Learn More</Button>
              </div>
              <div className="w-[445px] h-[445px] bg-zinc-300 rounded-full overflow-hidden">
                <img src={service.photo} alt="" className="w-[100%] h-[100%]" />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
