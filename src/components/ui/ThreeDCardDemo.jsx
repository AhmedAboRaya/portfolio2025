"use client";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo({ title, disc, img, subTitle, tryLink, link }) {
  return (
    <CardContainer className="inter-var z-[1999]">
      <CardBody className="bg-[#0B0B0B]/60 relative group/card px-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#4BDE80] rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#4BDE80] rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#4BDE80] rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#4BDE80] rounded-br-lg"></div>
        <div className="absolute -top-5 left-1/2 font-medium transform tracking-widest flex justify-center items-center -translate-x-1/2 bg-[#203B2A] text-[#4BDE80] border border-[#4BDE80] text-[20px] h-10 px-6 rounded-full z-20">
          {title || "Make things float in air"}
        </div>
        <CardItem className="text-xl  mt-4 text-white text-center w-full ">
          {subTitle || "Make things float in air"}
        </CardItem>
        <CardItem
          as="p"
          className=" text-lg  mt-2 text-white font-light text-center w-full "
        >
          {disc ||
            "Hover over this card to unleash the power of CSS perspective"}
        </CardItem>
        <CardItem className="w-full mt-4">
          <img
            src={
              img ||
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 tracking-wide rounded-xl h-14 flex justify-center font-normal text-white hover:text-[#4BDE80] duration-300"
          >
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-[17px]">Watch Demo →</a>
            )}
          </CardItem>
          {tryLink && (
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-xl text-white flex justify-center items-center tracking-wider text-xs font-medium cursor-pointer border border-[#4BDE80] bg-transparent hover:bg-[#4BDE80] hover:text-black duration-300"
            >
              <a href={tryLink} className="text-[18px]" target="_blank" rel="noopener noreferrer">
                Try now{" "}
              </a>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
