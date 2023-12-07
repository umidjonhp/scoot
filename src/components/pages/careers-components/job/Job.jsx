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
    <div className="container flex flex-col gap-6 mb-40">
      {
        jobs.map((job) => {
          return(
            <div className="bg-snow flex items-center justify-between pt-[32px] pb-[35px] pl-10 pr-16">
              <div className="flex flex-col gap-2">
                <h5 className="text-darkNavy text-2xl font-bold font-spaceMono leading-7">{job.position}</h5>
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
