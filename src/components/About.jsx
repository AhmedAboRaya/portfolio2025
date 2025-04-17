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
        className="text-center text-white px-7 text-2xl sm:px-0 sm:w-[70%] mt-10 aboutDescription md:mb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: 50 }}
      >
        <TextGenerateEffectDemo />
      </motion.p>
      <RotatingImages />
    </div>
  );
};

export default About