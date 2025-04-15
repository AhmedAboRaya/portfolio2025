import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import cpp from "../../assets/cpp.png";
import css from "../../assets/css.png";
import git from "../../assets/git.png";
import githup from "../../assets/githup.png";
import js from "../../assets/js.png";
import mongo from "../../assets/mongo.png";
import node from "../../assets/node2.png";
import tailwind from "../../assets/tailwind2.png";
import ts from "../../assets/ts.png";
import sass from "../../assets/sass.png";
import next from "../../assets/next.png";

const Separator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React", imgSrc: react, alt: "React" },
    { name: "Next.js", imgSrc: next, alt: "Next.js" },
    { name: "Tailwind", imgSrc: tailwind, alt: "Tailwind" },
    { name: "TypeScript", imgSrc: ts, alt: "TypeScript" },
    { name: "JavaScript", imgSrc: js, alt: "JavaScript" },
    { name: "CSS", imgSrc: css, alt: "CSS" },
    { name: "HTML", imgSrc: html, alt: "HTML" },
    { name: "Node.js", imgSrc: node, alt: "Node.js" },
    { name: "MongoDB", imgSrc: mongo, alt: "MongoDB" },
    { name: "C++", imgSrc: cpp, alt: "C++" },
    { name: "SASS", imgSrc: sass, alt: "SASS" },
    { name: "Git", imgSrc: git, alt: "Git" },
    { name: "Github", imgSrc: githup, alt: "Github" },
    { name: "React", imgSrc: react, alt: "React" },
    { name: "Next.js", imgSrc: next, alt: "Next.js" },
    { name: "Tailwind", imgSrc: tailwind, alt: "Tailwind" },
    { name: "TypeScript", imgSrc: ts, alt: "TypeScript" },
    { name: "JavaScript", imgSrc: js, alt: "JavaScript" },
    { name: "CSS", imgSrc: css, alt: "CSS" },
    { name: "HTML", imgSrc: html, alt: "HTML" },
    { name: "Node.js", imgSrc: node, alt: "Node.js" },
    { name: "MongoDB", imgSrc: mongo, alt: "MongoDB" },
    { name: "C++", imgSrc: cpp, alt: "C++" },
    { name: "SASS", imgSrc: sass, alt: "SASS" },
    { name: "Git", imgSrc: git, alt: "Git" },
    { name: "Github", imgSrc: githup, alt: "Github" },
    { name: "React", imgSrc: react, alt: "React" },
    { name: "Next.js", imgSrc: next, alt: "Next.js" },
    { name: "Tailwind", imgSrc: tailwind, alt: "Tailwind" },
    { name: "TypeScript", imgSrc: ts, alt: "TypeScript" },
    { name: "JavaScript", imgSrc: js, alt: "JavaScript" },
    { name: "CSS", imgSrc: css, alt: "CSS" },
    { name: "HTML", imgSrc: html, alt: "HTML" },
    { name: "Node.js", imgSrc: node, alt: "Node.js" },
    { name: "MongoDB", imgSrc: mongo, alt: "MongoDB" },
    { name: "C++", imgSrc: cpp, alt: "C++" },
    { name: "SASS", imgSrc: sass, alt: "SASS" },
    { name: "Git", imgSrc: git, alt: "Git" },
    { name: "Github", imgSrc: githup, alt: "Github" },
    { name: "React", imgSrc: react, alt: "React" },
    { name: "Next.js", imgSrc: next, alt: "Next.js" },
    { name: "Tailwind", imgSrc: tailwind, alt: "Tailwind" },
    { name: "TypeScript", imgSrc: ts, alt: "TypeScript" },
    { name: "JavaScript", imgSrc: js, alt: "JavaScript" },
    { name: "CSS", imgSrc: css, alt: "CSS" },
    { name: "HTML", imgSrc: html, alt: "HTML" },
    { name: "Node.js", imgSrc: node, alt: "Node.js" },
    { name: "MongoDB", imgSrc: mongo, alt: "MongoDB" },
    { name: "C++", imgSrc: cpp, alt: "C++" },
    { name: "SASS", imgSrc: sass, alt: "SASS" },
    { name: "Git", imgSrc: git, alt: "Git" },
    { name: "Github", imgSrc: githup, alt: "Github" },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}
    exit={{ opacity: 0, y: 50 }}
    className="overflow-hidden whitespace-nowrap w-full py-4 text-white md:text-lg font-bold my-10 md:my-20 flex flex-col md:space-y-7"
    >
      <motion.div
        className="inline-block"
        style={{ whiteSpace: "nowrap" }}
        animate={{
          x: -scrollPosition * 0.5, // Moves left based on scroll
        }}
        transition={{ ease: "linear", duration: 0.1 }}
      >
        {skills.map((skill, index) => (
          <span key={index} className="mx-4 md:mx-8 text-lg md:text-xl space-x-2">
            <img
              src={skill.imgSrc}
              alt={skill.alt}
              className="inline-block size-7 md:size-10"
            />
            <span>{skill.name}</span>
          </span>
        ))}
      </motion.div>

      <motion.div
        className="inline-block -translate-x-[1600px] mt-4"
        style={{ whiteSpace: "nowrap" }}
        animate={{
          x: scrollPosition * 0.5, // Moves left based on scroll
        }}
        transition={{ ease: "linear", duration: 0.1 }}
      >
        {skills.map((skill, index) => (
          <span key={index} className="mx-4 md:mx-8 text-xl space-x-2">
            <img
              src={skill.imgSrc}
              alt={skill.alt}
              className="inline-block size-7 md:size-10"
            />
            <span>{skill.name}</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Separator;
