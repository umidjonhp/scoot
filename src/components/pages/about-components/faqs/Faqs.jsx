import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// acardion base
const worksBase = [
  {
    id: 1,
    title: "How do I download the app?",
    info: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    id: 2,
    title: "Can I find a nearby Scoots?",
    info: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    id: 3,
    title: "Do I need a license to ride?",
    info: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
];
const drivingBase = [
  {
    id: 4,
    title: "Should I wear a helmet?",
    info: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    id: 5,
    title: "How about the rules & regulations?",
    info: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    id: 6,
    title: "What if I damage my Scoot?",
    info: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
];

export const Faqs = () => {
  const [open, setOpen] = React.useState(0);

  const acardionHandler = (id, open) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="13"
        viewBox="0 0 18 13"
        fill="none"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path d="M2 11L10 3L18 11" stroke="#FCB72B" strokeWidth="3" />
      </svg>
    );
  }
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container flex flex-col gap-16 mb-40  max-md:mb-[120px] max-mobile:gap-12">
      <h2 className="text-darkNavy text-5xl max-mobile:text-[32px] font-bold font-spaceMono leading-[48px] text-center">FAQs</h2>
      <div className="flex  gap-[100px] max-md:flex-col max-md:items-center max-mobile:gap-[32px]">
        <h3 className="text-darkNavy text-[40px] font-bold font-spaceMono leading-[48px] max-mobile:text-2xl">How it works</h3>
        <div className="w-[60%] flex flex-col gap-4 max-md:w-[100%]">
          {
            worksBase.map((acc) => {
              return (
                <Accordion open={open === acc.id} icon={acardionHandler(acc.id, open)} key={acc.id}>
                  <AccordionHeader onClick={() => handleOpen(acc.id)} className="w-[100%] flex items-center justify-between py-8 px-[40px] max-md:px-8 max-mobile:p-[32px] max-mobile:text-lg max-mobile:text-left bg-snow text-darkNavy text-2xl font-bold font-spaceMono leading-7 cursor-pointer hover:bg-lightYellow transition-all duration-200">{acc.title}</AccordionHeader>
                  <AccordionBody className="bg-snow px-[40px] pt-[24px] pb-8 text-darkNavy text-[15px] font-lexendDeca leading-[25px]">
                    <span>{acc.info}</span>
                  </AccordionBody>
                </Accordion>
              )
            })
          }
        </div>
      </div>
      <div className="flex  gap-[100px] max-md:flex-col max-md:items-center">
        <h3 className="text-darkNavy text-[40px] font-bold font-spaceMono leading-[48px]">Safe driving</h3>
        <div className="w-[60%] flex flex-col gap-4  max-md:w-[100%]">
          {
            drivingBase.map((acc) => {
              return (
                <Accordion open={open === acc.id} icon={acardionHandler(acc.id, open)} key={acc.id}>
                  <AccordionHeader onClick={() => handleOpen(acc.id)} className="w-[100%] flex items-center justify-between py-8 px-[40px] max-md:px-8 max-mobile:p-[32px] max-mobile:text-lg max-mobile:text-left bg-snow text-darkNavy text-2xl font-bold font-spaceMono leading-7 cursor-pointer hover:bg-lightYellow transition-all duration-200">{acc.title}</AccordionHeader>
                  <AccordionBody className="bg-snow px-[40px] pt-[24px] pb-8 text-darkNavy text-[15px] font-lexendDeca leading-[25px]">
                    <span>{acc.info}</span>
                  </AccordionBody>
                </Accordion>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
