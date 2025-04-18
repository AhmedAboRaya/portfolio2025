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

function Project() {


  const projects = [
    {
      title: "Waqar",
      subTitle: "Saudi E-commerce",
      description: "Online store for traditional wear.",
      tryLink: "https://waqar-shemagh.vercel.app/",
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
      tech: [ js, node, express, mongo, postman, figma],
    },
    {
      title: "Manasety",
      subTitle: "Study Hub",
      description: "Upload and view lessons.",
      link: "https://youtu.be/p5cD14k9Loc",
      tryLink: "https://manasty-phi.vercel.app/",
      img: "/Manasety.png",
      tech: [react, js, tailwind, node, express, mongo, figma,],
    },
    {
      title: "Egy-Rack",
      subTitle: "Trade Showcase",
      description: "Displays import/export items.",
      link: "https://youtu.be/ofzGAVZGfEY",
      tryLink: "https://egy-rack.vercel.app/",
      img: "/EgyRack.png",
      tech: [react, js, tailwind, node, express, mongo, figma,],
    },
    {
      title: "TaskTracker",
      subTitle: "Productivity Tool",
      description: "Manage tasks and progress.",
      link: "https://youtu.be/GC8Z3Z1Z7-Q",
      tryLink: "https://depi-final-project-m1eh.vercel.app/",
      img: "/taskTracker.png",
      tech: [react, js, tailwind, node, express, mongo],
    },

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
    <setion className="min-h-screen mt-20 md:mt-32 flex flex-col items-center justify-center px-5">
      <motion.h1
        className="aboutTitle text-white font-extrabold text-center text-9xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        <TextAnimate animation="blurInUp" by="character">
        PROJECTS</TextAnimate>
      </motion.h1>
      <div className="container relative w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 ">
        {projects.map((project, index) => (
          <MotionWrapper animationType="slideUp" key={index} delay={index * 0.1}>
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
      </div>
    </setion>
  );
}

export default Project;
