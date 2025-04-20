"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import SkillIcon from "@/components/ui/skill-icon"
import { skillsData } from "@/data/skills-data"
import MotionWrapper from "./ui/MotionWrapper"
import { TextAnimate } from "./magicui/text-animate"

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div id='techStack' className="min-h-screen text-white flex flex-col items-center justify-center pt-10 py-12 px-4 overflow-hidden">
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

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-10 md:gap-12 lg:gap-16 w-full max-w-[1600px] justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skillsData.map((skill, index) => (

            <MotionWrapper key={skill.name} className="flex flex-col items-center" animationType="scale" >
            <SkillIcon
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              percentage={skill.percentage}
              index={index}
            /></MotionWrapper>
        ))}
      </motion.div>
    </div>
  )
}
