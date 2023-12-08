import { NavLink } from "react-router-dom";
import companyLogo from "../../../../public/mock-images/footer/logo.svg"
import scoot from "../../../../public/mock-images/footer/scoot.svg"
// import Logo
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const iteams = [
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
export const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-darkNavy  overflow-hidden">
          <div className="container flex items-center justify-between py-[102px] relative max-md:py-[62px] max-md:flex-col max-md:gap-10 max-mobile:py-[88px]">
            <h2 className="text-white text-5xl font-bold font-spaceMono leading-[48px] max-md:text-center max-mobile:text-[32px]">Sign up and <br /> Scoot off today</h2>
            <span>
              <img src={companyLogo} alt="companyLogo" />
            </span>
            <span className="w-[347px] h-[347px]  absolute rotate-180 opacity-10 rounded-full border-8 border-lightGrey -bottom-[66%] right-[42%] max-md:-bottom-[55%]  max-md:right-[87%] max-mobile:-bottom-[45%] max-mobile:right-[67%]"></span>
            <span className="w-[347px] h-[347px]  absolute rotate-180 opacity-10 rounded-full border-8 border-lightGrey -bottom-[66%] right-[6%] max-md:-bottom-[55%] max-md:right-[30%] max-mobile:hidden"></span>
            <span className="w-[347px] h-[347px]  absolute rotate-180 opacity-10 rounded-full  border-lightGrey bg-lightGrey -bottom-[66%] -right-[30%] max-md:-bottom-[55%] max-md:-right-[27%] max-mobile:-right-[60%] max-mobile:-bottom-[50%]"></span>
          </div>
        </div>
        <div className="bg-footerBg py-[35px] z-10">
          <div className="container flex items-center justify-between max-mobile:flex-col max-mobile:gap-[85px]">
            <ul className="flex items-center gap-8 max-mobile:flex-col max-mobile:gap-4">
              <li className="mr-[26px] max-mobile:mr-0 max-mobile:mb-[25px]">
                <NavLink to={"/"} >
                  <img src={scoot} alt="" />
                </NavLink>
              </li>
              {
                iteams.map((iteam) => {
                  return (
                    <li key={iteam.id}>
                      <NavLink to={iteam.adres} activeClassName="text-darkNavy text-[18px] ease-out duration-300" className="text-dimGrey text-[15px] font-bold font-spaceMono leading-[25px] ease-out duration-300" >
                        {iteam.name}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <div className="flex items-center gap-6">
              <AiFillFacebook size={24} color="#FCB72B" cursor={"pointer"} />
              <FaTwitter size={24} color="#FCB72B" cursor={"pointer"} />
              <FaInstagram size={24} color="#FCB72B" cursor={"pointer"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



