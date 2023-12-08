import { Button } from "../../../common/button/Button"

const jobs = [
  {
    id: "1",
    position: "General Manager",
    country: "Jakarta, Indonesia",
  },
  {
    id: "2",
    position: "UI/UX Designer",
    country: "Yokohama, Japan",
  },
  {
    id: "3",
    position: "Blog Content Copywriter",
    country: "New York, United States",
  },
  {
    id: "4",
    position: "Graphic Designer",
    country: "New York, United States",
  },
  {
    id: "5",
    position: "Fleet Supervisor",
    country: "Jakarta, Indonesia",
  },
  {
    id: "6",
    position: "UX Analyst",
    country: "London, United Kingdom",
  },
]
export const Job = () => {
  return (
    <div className="container flex flex-col gap-6 mb-40 max-md:mb-[120px] max-md:gap-4">
      {
        jobs.map((job) => {
          return(
            <div className="bg-snow flex items-center justify-between pt-[32px] pb-[35px] pl-10 pr-16 max-md:py-[33.5px] max-md:px-12 max-mobile:pt-9 max-mobile:pb-[32px] max-mobile:px-[28px] max-mobile:flex-col max-mobile:gap-4 max-mobile:items-center">
              <div className="flex flex-col gap-2 max-mobile:gap-1 max-mobile:w-[100%] max-mobile:items-center">
                <h5 className="text-darkNavy text-2xl font-bold font-spaceMono leading-7 max-mobile:text-center max-mobile:text-lg">{job.position}</h5>
                <span className="text-darkNavy text-[15px] font-lexendDeca leading-[25px]">{job.country}</span>
              </div>
              <Button>Apply</Button>
            </div>
          )
        })
      }
    </div>
  )
}
