"use client";
// import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import react from "../assets/react.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import html from "../assets/html.png"

const About = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="relative min-h-screen w-full mt-24 flex items-center flex-col overflow-hidden">
      {/* About Title */}
      <h1 className="aboutTitle text-white font-extrabold text-center text-9xl">
        ABOUT ME
      </h1>
      
      {/* About Description */}
      <p className="text-center text-white px-7 sm:px-0 sm:w-[70%] mt-10 aboutDescription">
        Hey, I’m Ahmed! I’m a Full-Stack Developer with a passion for building
        web applications that are as smooth as they are powerful. Whether it’s
        crafting beautiful, responsive interfaces or designing scalable back-end
        systems, I love turning ideas into reality with clean, efficient code.
        I’ve worked on educational platforms, project management tools, and
        business solutions, always striving to create seamless user experiences.
        My tech stack includes Next.js, React, Tailwind CSS, JavaScript,
        TypeScript, Node.js, Express.js, and MongoDB, but I’m always exploring
        new tools to stay ahead. Beyond coding, I thrive in collaborative
        environments where ideas flow freely, challenges fuel innovation, and
        every project is an opportunity to grow. If you’re looking for a
        developer who’s passionate, driven, and always ready to tackle the next
        big thing—let’s connect!
      </p>

      {/* Animated Corner Images */}
      <motion.img
        src={react}
        alt="Heart 1"
        className="absolute top-0 left-0 w-32 h-32"
        style={{ rotate }}
      />

      <motion.img
        src={tailwind}
        alt="Heart 2"
        className="absolute top-0 right-0 w-32 h-32"
        style={{ rotate }}
      />

      <motion.img
        src={node}
        alt="Heart 3"
        className="absolute bottom-0 left-0 w-32 h-32"
        style={{ rotate }}
      />

      <motion.img
        src={html}
        alt="Heart 4"
        className="absolute bottom-0 right-0 w-32 h-32"
        style={{ rotate }}
      />
    </div>
  );
};

export default About;
