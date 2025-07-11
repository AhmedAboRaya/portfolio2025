import DecayCard from "@/blocks/Components/DecayCard/DecayCard";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";
import MotionWrapper from "./ui/MotionWrapper";
import react from "@/../assets/react.png";
import js from "@/../assets/js.png";
import mongo from "@/../assets/mongo.png";
import node from "@/../assets/node2.png";
import tailwind from "@/../assets/tailwind2.png";
import ts from "@/../assets/ts.png";
import next from "@/../assets/next.png";
import figma from "@/../assets/figma.png";
import postman from "@/../assets/postman.png";
import redux from "@/../assets/redux.png";
import express from "@/../assets/express.png";
import { TextAnimate } from "./magicui/text-animate";
import { World } from "@/components/ui/globe";

function Project() {
  const projects = [
    {
      title: "Aokaaze Sushi",
      subTitle: "Restaurant Website",
      description: "Book, order, and enjoy sushi online.",
      link: "https://www.linkedin.com/posts/ahmed-abo-raya_fullstackdevelopment-reactjs-nodejs-activity-7333094398420750336-HU70?utm_source=share&utm_medium=member_desktop&rcm=ACoAADan3KsBYwogVwex0VfuSXO14V3ytH-n0-4", 
      tryLink: "https://aokaaze-sushi.vercel.app/", 
      img: "/aokaaze-sushi.png",
      tech: [react, ts, tailwind, node, express, mongo, postman, figma],
    },
    {
      title: "Waqar",
      subTitle: "Saudi E-commerce",
      description: "Online store for traditional wear.",
      tryLink: "https://waqar-shemagh.vercel.app/",
      link: "https://youtu.be/IC-bWDz2TT8",
      img: "/waqar.png",
      tech: [next, ts, tailwind, node, express, mongo, redux, figma],
    },
    {
      title: "Esrark",
      subTitle: "E-learning Platform",
      description: "Teachers share, students learn.",
      link: "https://youtu.be/cfdE0iwIJAE",
      tryLink: "https://esrark.vercel.app/",
      img: "/esrark.png",
      tech: [react, js, tailwind, node, express, mongo, figma],
    },
    {
      title: "MedReserve",
      subTitle: "Health Appointments",
      description: "Book visits and track meds.",
      link: "https://github.com/AhmedAboRaya/MedReserve.git",
      img: "/MedRev.png",
      tech: [js, node, express, mongo, postman, figma],
    },
    {
      title: "Manasety",
      subTitle: "Study Hub",
      description: "Upload and view lessons.",
      link: "https://youtu.be/p5cD14k9Loc",
      tryLink: "https://manasty-phi.vercel.app/",
      img: "/Manasety.png",
      tech: [react, js, tailwind, node, express, mongo, figma],
    },
    {
      title: "Egy-Rack",
      subTitle: "Trade Showcase",
      description: "Displays import/export items.",
      link: "https://youtu.be/ofzGAVZGfEY",
      tryLink: "https://egy-rack.vercel.app/",
      img: "/EgyRack.png",
      tech: [react, js, tailwind, node, express, mongo, figma],
    },
    // {
    //   title: "TaskTracker",
    //   subTitle: "Productivity Tool",
    //   description: "Manage tasks and progress.",
    //   link: "https://youtu.be/GC8Z3Z1Z7-Q",
    //   tryLink: "https://depi-final-project-m1eh.vercel.app/",
    //   img: "/taskTracker.png",
    //   tech: [react, js, tailwind, node, express, mongo],
    // },

    // {
    //     title: "Shopping Website",
    //     description: "An e-commerce platform with a user dashboard.",
    //     link: "https://github.com/AhmedAboRaya/E-Commerce.git",
    //     img: "/Shopping.png",
    // },
    // {
    //     title: "VS Code Clone",
    //     description: "A clone of Visual Studio Code for code editing.",
    //     link: "https://youtu.be/6Vcex4rXHQY",
    //     img: "/vs_clone.png",
    // },
  ];

  return (
    <setion
      id="projects"
      className="min-h-screen relative pt-24 md:mt-32 flex flex-col items-center justify-center px-5"
    >
      <motion.h1
        className="aboutTitle text-white font-extrabold text-center text-9xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        <TextAnimate animation="blurInUp" by="character">
          PROJECTS
        </TextAnimate>
      </motion.h1>
      <div className="container relative w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 ">
        {projects.map((project, index) => (
          <MotionWrapper
            className="hidden md:flex"
            animationType="slideUp"
            key={index}
            delay={index * 0.1}
          >
            <DecayCard>
              <ThreeDCardDemo
                title={project.title}
                disc={project.description}
                subTitle={project.subTitle}
                img={project.img}
                tryLink={project.tryLink}
                link={project.link}
                tech={project.tech}
              />
            </DecayCard>
          </MotionWrapper>
        ))}

        {projects.map((project, index) => (
          <MotionWrapper
            className="flex md:hidden"
            animationType="slideUp"
            key={index}
            delay={index * 0.1}
          >
              <ThreeDCardDemo
                title={project.title}
                disc={project.description}
                subTitle={project.subTitle}
                img={project.img}
                tryLink={project.tryLink}
                link={project.link}
                tech={project.tech}
              />
          </MotionWrapper>
        ))}
      </div>
      <MotionWrapper
        triggerOnce="true"
        className="absolute right-[50%] md:right-[75%] -bottom-[7%] md:-bottom-[10%] lg:-bottom-[15%] xl:-bottom-[20%] z-[-1] "
      >
        <World />
      </MotionWrapper>
    </setion>
  );
}

export default Project;
