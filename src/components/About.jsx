import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import { TextGenerateEffectDemo } from "./ui/TextGenerateEffectDemo";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate rotation factors - adjust these values to control rotation speed
  const reactRotation = scrollPosition * 0.5;
  const tailwindRotation = -scrollPosition * 0.3;
  const nodeRotation = scrollPosition * 0.4;
  const htmlRotation = -scrollPosition * 0.2;
  
  return (
    <div className="relative py-16 md:py-36 w-full mt-24 flex items-center flex-col overflow-x-hidden">
      {/* About Title */}
      <motion.h1
        className="aboutTitle text-white font-extrabold text-center text-9xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        ABOUT ME
      </motion.h1>
      
      {/* About Description */}
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
      
      {/* Animated Corner Images */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* React Logo */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{
            transform: `rotate(${reactRotation}deg)`,
            transition: "transform 0.1s linear"
          }}
        >
          <img src={react} alt="React" className="w-full h-full" />
        </motion.div>
        
        {/* Tailwind Logo */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{
            transform: `rotate(${tailwindRotation}deg)`,
            transition: "transform 0.1s linear"
          }}
        >
          <img src={tailwind} alt="Tailwind" className="w-full h-full" />
        </motion.div>
        
        {/* Node.js Logo */}
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{
            transform: `rotate(${nodeRotation}deg)`,
            transition: "transform 0.1s linear"
          }}
        >
          <img src={node} alt="Node" className="w-full h-full" />
        </motion.div>
        
        {/* HTML Logo */}
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{
            transform: `rotate(${htmlRotation}deg)`,
            transition: "transform 0.1s linear"
          }}
        >
          <img src={html} alt="HTML" className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;