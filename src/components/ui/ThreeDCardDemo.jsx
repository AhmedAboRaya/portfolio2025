"use client";

import { TextAnimate } from "../magicui/text-animate";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import MotionWrapper from "./MotionWrapper";

export function ThreeDCardDemo({
  title,
  disc,
  img,
  subTitle,
  tryLink,
  link,
  tech,
}) {
  return (
    <CardContainer className="inter-var z-[1999] ">
      <CardBody className="bg-[#0B0B0B]/60 relative group/card px-5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#4BDE80] rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#4BDE80] rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#4BDE80] rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#4BDE80] rounded-br-lg"></div>
        <div className="absolute -top-5 left-1/2 font-medium transform tracking-widest flex justify-center items-center -translate-x-1/2 bg-[#203B2A] text-[#4BDE80] border border-[#4BDE80] text-[20px] h-10 px-6 rounded-full z-20">
          <TextAnimate animation="scaleUp" by="text">
            {title || "Make things float in air"}
          </TextAnimate>
        </div>

        <CardItem className="text-xl  mt-4 text-white text-center w-full ">
          <TextAnimate animation="scaleUp" by="text">
            {subTitle || "Make things float in air"}
          </TextAnimate>
        </CardItem>
        <CardItem
          as="p"
          className=" text-lg  mt-2 text-white font-light text-center w-full "
        >
          <TextAnimate animation="scaleUp" by="text">
            {disc ||
              "Hover over this card to unleash the power of CSS perspective"}
          </TextAnimate>
        </CardItem>
        <CardItem className="w-full mt-4">
          <TextAnimate
            segmentClassName={"w-full"}
            className={"w-full"}
            animation="scaleUp"
            by="text"
          >
            <img
              src={
                img ||
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </TextAnimate>
        </CardItem>
        <div className="flex justify-center items-center mt-7">
          {tech.map((item, index) => {
            const randomSpeed =
              (Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 40);
            const randomStart = Math.floor(Math.random() * 360);

            return (
              <MotionWrapper
                key={index}
                className="border border-[#4BDE80] rounded-full p-2 bg-black hover:scale-110 -ml-3 group duration-300"
                style={{
                  transform: `rotate(${randomStart}deg)`,
                  animation: `spin 5s linear infinite`,
                  animationDirection: randomSpeed > 0 ? "normal" : "reverse",
                }}
                delay={index * 0.1}
              >
                <img
                  src={item}
                  alt="tech"
                  className="size-6 transition-transform duration-300 group-hover:scale-105 group-hover:skew-x-12 group-hover:skew-y-6"
                />
              </MotionWrapper>
            );
          })}
        </div>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 tracking-wide rounded-xl h-14 flex justify-center font-normal text-white hover:text-[#4BDE80] duration-300"
          >
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[17px]"
              >
                Watch Demo →
              </a>
            )}
          </CardItem>
          {tryLink && (
            <a
              href={tryLink}
              className="text-[18px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl text-white flex justify-center items-center tracking-wider text-xs font-medium cursor-pointer border border-[#4BDE80] bg-transparent hover:bg-[#4BDE80] hover:text-black duration-300"
              >
                Try now
              </CardItem>
            </a>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
