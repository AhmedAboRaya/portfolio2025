// About.tsx
import { useEffect, useState } from "react";
import { RotatingImages } from "@/components/ui/RotatingImages";
import { TextGenerateEffectDemo } from "./ui/TextGenerateEffectDemo";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "framer-motion";

 const About = () => {


  return (
    <div className="relative py-16 md:py-36 w-full mt-24 flex items-center flex-col overflow-x-hidden">
      <motion.h1
        className="aboutTitle text-white font-extrabold text-center text-9xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        <TextAnimate animation="blurInUp" by="character">
          ABOUT ME
        </TextAnimate>
      </motion.h1>

      <motion.p
        className="text-center relative text-white px-7 text-2xl sm:px-0 sm:w-[70%] mt-10 aboutDescription md:mb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: 50 }}
      >
        <TextGenerateEffectDemo />
        <div className="hidden md:flex absolute -top-6 -left-8 w-8 h-8 border-t-4 border-l-4 border-[#4BDE80] rounded-tl-lg"></div>
        {/* <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#4BDE80] rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#4BDE80] rounded-bl-lg"></div> */}
        <div className="hidden md:flex absolute -bottom-6 -right-6 w-8 h-8 border-b-4 border-r-4 border-[#4BDE80] rounded-br-lg"></div>
      </motion.p>
      <RotatingImages />
    </div>
  );
};

export default About