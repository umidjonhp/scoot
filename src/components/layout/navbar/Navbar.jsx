import { NavLink } from "react-router-dom";
import logo from "../../../../public/mock-images/scoot.svg"
import { Button } from "../../common/button/Button";

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
  return (
    <>
      <div className="container flex items-center justify-between">
        <ul className="flex items-center gap-8 py-[34px]">
          <li className="mr-[26px]">
            <NavLink to={"/"} >
              <img src={logo} alt="" />
            </NavLink>
          </li>
          {
            pages.map((page) => {
              return (
                <li key={page.id}>
                  <NavLink to={page.adres} activeClassName="text-darkNavy text-[18px] ease-out duration-300" className="text-dimGrey text-[15px] font-bold font-spaceMono leading-[25px] ease-out duration-300" >
                    {page.name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <Button>Get Scootin</Button>
      </div>
    </>
  )
}
