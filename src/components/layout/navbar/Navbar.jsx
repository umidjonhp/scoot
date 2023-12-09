import { NavLink } from "react-router-dom";
import logo from "../../../../public/mock-images/scoot.svg"
import logo2 from "../../../../public/mock-images/scoot2.svg"
import { Button } from "../../common/button/Button";
import { useState } from "react";

const pages = [
  {
    name: "About",
    id: "1",
    adres: "/about",
  },
  {
    name: "Location",
    id: "2",
    adres: "/locations",
  },
  {
    name: "Careers",
    id: "3",
    adres: "/careers",
  },
];
export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toogleModal = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <>
      <div className="max-mobile:fixed max-mobile:top-0 max-mobile:z-20 max-mobile:bg-white max-mobile:w-[100%] max-mobile:shadow-[0px_5px_28px_5px_#495567] ">
        <div className="container flex max-mobile:hidden items-center justify-between ">
          <ul className="flex items-center gap-8 py-[34px] max-md:py-[21px]">
            <li className="mr-[26px]">
              <NavLink to={"/"} >
                <img src={logo} alt="" />
              </NavLink>
            </li>
            {
              pages.map((page) => {
                return (
                  <li key={page.id}>
                    <NavLink to={page.adres} activeClassName="text-darkNavy text-[20px] max-md:text-[17px] ease-out duration-300" className="text-dimGrey text-[15px] font-bold font-spaceMono leading-[25px] ease-out duration-300 max-md:text-[14px]" >
                      {page.name}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
          <Button>Get Scootin</Button>
        </div>
        <div className="container hidden max-mobile:flex items-center py-[22px] gap-[75px]">
          <div className="w-[20px] h-4 relative" onClick={toogleModal}>
            <div className={`w-[20px] h-[3.69px] left-0 top-0 absolute bg-amber-400 transition-all duration-300 ${isNavOpen ? `-rotate-[45deg] translate-x-[0%] translate-y-[140%]` : ``}`}></div>
            <div className={`${isNavOpen ? `w-0` : `w-[20px]`} transition-all duration-300 h-[3.69px] left-0 top-[6.15px] absolute bg-amber-400`}></div>
            <div className={`w-[20px] h-[3.69px] left-0 top-[12.31px] absolute bg-amber-400 transition-all duration-300 ${isNavOpen ? `rotate-[45deg] -translate-x-[0%] -translate-y-[170%]` : ``}`}></div>
          </div>
          <NavLink to={"/"} >
            <img src={logo2} />
          </NavLink>
          <div className={`bg-zinc pt-[64px] transition-all duration-1000 pb-6 px-8 flex flex-col justify-between absolute  h-[89vh] z-50 ${isNavOpen ? `w-[80%]` : `w-0 -left-[150%]`} top-[100%] left-0 `}>
            <ul className="flex flex-col gap-6">
              {
                pages.map((page) => {
                  return (
                    <li key={page.id} onClick={toogleModal}>
                      <NavLink to={page.adres} activeClassName="text-darkNavy text-[22px] ease-out duration-300" className="text-slate-200 text-lg font-bold font-spaceMono leading-[25px] ease-out duration-300">
                        {page.name}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <Button>Get Scootin</Button>
          </div>
        </div>
      </div>
    </>
  )
}


