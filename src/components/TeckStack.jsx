import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "framer-motion";
import { OrbitingCircles } from "./magicui/orbiting-circles";
import react from "@/../assets/react.png";
import html from "@/../assets/html.png";
import cpp from "@/../assets/cpp.png";
import css from "@/../assets/css.png";
import git from "@/../assets/git.png";
import githup from "@/../assets/githup.png";
import js from "@/../assets/js.png";
import mongo from "@/../assets/mongo.png";
import node from "@/../assets/node2.png";
import tailwind from "@/../assets/tailwind2.png";
import ts from "@/../assets/ts.png";
import sass from "@/../assets/sass.png";
import next from "@/../assets/next.png";
import figma from "@/../assets/figma.png";
import apis from "@/../assets/apis.png";
import postman from "@/../assets/postman.png";
import mysql from "@/../assets/mysql.png";
import redux from "@/../assets/redux.png";
import express from "@/../assets/express.png";

const reviews = [
  {
    name: "React",
    img: react,
  },
  {
    name: "HTML",
    img: html,
  },
  {
    name: "C++",
    img: cpp,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "Git",
    img: git,
  },
  {
    name: "Git Hub",
    img: githup,
  },
  {
    name: "Java Script",
    img: js,
  },
  {
    name: "MongoDB",
    img: mongo,
  },
  {
    name: "Node JS",
    img: node,
  },
  {
    name: "Tailwind",
    img: tailwind,
  },
  {
    name: "Type Script",
    img: ts,
  },
  {
    name: "SASS",
    img: sass,
  },
  {
    name: "Next",
    img: next,
  },
  {
    name: "Figma",
    img: figma,
  },
  {
    name: "APIs",
    img: apis,
  },
  {
    name: "Postman",
    img: postman,
  },
  {
    name: "MySQL",
    img: mysql,
  },
  {
    name: "Redux",
    img: redux,
  },
  {
    name: "Express",
    img: express,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative px-6 flex items-center cursor-pointer overflow-hidden rounded-xl p-4 bg-[#0B0B0B]/60 border border-border/30 hover:bg-[#0B0B0B]/80 hover:border-border/70 duration-300"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2 pr-16">
        <img className="" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col items-center justify-center">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
export function TechStack() {
  return (
    <section id="techStack" className="mt-10 md:mt-16">
      <motion.h1
        className="aboutTitle text-white font-extrabold text-center text-9xl mt-20 mb-10 md:mb-20 relative "
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        <TextAnimate animation="blurInUp" by="character">
          Tech Stack
        </TextAnimate>
      </motion.h1>

      <div className="">
        <div className="relative flex text-white h-72 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="relative w-full md:max-w-6xl">
              <Marquee repeat={100} pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <div className="absolute h-full top-0 left-0 w-20 bg-gradient-to-r from-black via-[#00000033] to-[#0000000a]" />
              <div className="absolute h-full top-0 right-0 w-20 bg-gradient-to-l from-black via-[#00000010] to-[#0000000a]" />
            </div>
            <div className="relative w-full">
              <Marquee
                repeat={100}
                reverse
                pauseOnHover
                className="[--duration:20s]"
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>{" "}
              <div className="absolute h-full top-0 left-0 w-20 bg-gradient-to-r from-black via-[#00000033] to-[#0000000a]" />
              <div className="absolute h-full top-0 right-0 w-20 bg-gradient-to-l from-black via-[#00000010] to-[#0000000a]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
