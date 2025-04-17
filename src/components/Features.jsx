import Orb from "@/blocks/Backgrounds/Orb/Orb";
import Globe from "./ui/globe1";
import { Ripple } from "./magicui/ripple";
import { AnimatedList } from "./magicui/animated-list";
import Notification from "./ui/notification";
import { IconCloud } from "./magicui/icon-cloud";
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
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { motion } from "framer-motion";
import MotionWrapper from "./ui/MotionWrapper";
import { World } from "./ui/globe";
import { TextAnimate } from "./magicui/text-animate";

const clientBenefits = [
  {
    name: "Blazing Fast Performance",
    description: "Optimized code & latest tech stack",
    time: "Core Benefit",
    icon: "⚡",
    color: "#FFB800", // Yellow
  },
  {
    name: "Real-time Communication",
    description: "24/7 support & quick responses",
    time: "Always Available",
    icon: "💬",
    color: "#1E86FF", // Blue
  },
  {
    name: "Stunning UI/UX Design",
    description: "Modern & intuitive interfaces",
    time: "Visual Excellence",
    icon: "🎨",
    color: "#936DFF", // Purple
  },
  {
    name: "Military-grade Security",
    description: "Encrypted & protected data",
    time: "Safety First",
    icon: "🛡️",
    color: "#00C9A7", // Teal
  },
  {
    name: "Smart Dashboard",
    description: "Powerful analytics & controls",
    time: "Admin Tools",
    icon: "📊",
    color: "#FF6B35", // Orange
  },
  {
    name: "SEO Optimized",
    description: "Higher search rankings",
    time: "Visibility Boost",
    icon: "🔍",
    color: "#00BFFF", // Sky Blue
  },
  {
    name: "Scalable Architecture",
    description: "Grows with your business",
    time: "Future-proof",
    icon: "📈",
    color: "#7C4DFF", // Deep Purple
  },
  {
    name: "Cross-platform Access",
    description: "Works on any device, anywhere",
    time: "Global Reach",
    icon: "🌍",
    color: "#00a392", // Pink
  },
];

const techIcons = [
  react,
  html,
  cpp,
  css,
  git,
  githup,
  js,
  mongo,
  node,
  tailwind,
  ts,
  sass,
  next,
  express,
  figma,
  redux,
  mysql,
  apis,
  postman,
];

const extendedClientBenefits = Array(30)
  .fill()
  .flatMap(() => [...clientBenefits]);
function Features() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-between w-full min-h-screen p-5">
      <motion.h1
        className="aboutTitle text-white font-extrabold text-center text-9xl mb-20 relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        <TextAnimate animation="blurInUp" by="character">
        FEATURES</TextAnimate>
      </motion.h1>
      <div className="hidden xl:grid grid-cols-3 relative w-full gap-4">
        <div className="grid grid-rows-2">
          <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg">
            <AnimatedList>
              {extendedClientBenefits.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
          <div>
            {/* <MotionWrapper> */}
            {/* <IconCloud images={techIcons} /> */}
            {/* </MotionWrapper> */}
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full">
          <MotionWrapper>
            {/* <Globe /> */}
            <World />
          </MotionWrapper>
        </div>
        <div className="grid grid-rows-2">
          <div></div>
          <MotionWrapper>
            <div className="relative">
              <Terminal>
                <TypingAnimation className="text-white">
                  &gt; pnpm start-project YOUR_IDEA
                </TypingAnimation>

                <AnimatedSpan delay={1500} className="text-green-500">
                  <span>✔ Technical & Financial Feasibility Study.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2000} className="text-green-500">
                  <span>✔ Requirements documented in SRS.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2500} className="text-green-500">
                  <span>✔ Timeline approved.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-green-500">
                  <span>✔ Wireframes presented.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3500} className="text-green-500">
                  <span>✔ Core Development.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4000} className="text-green-500">
                  <span>✔ QA & Testing.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4500} className="text-green-500">
                  <span>✔ Security Audit.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={5000} className="text-green-500">
                  <span>✔ Delivery Package prepared.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={5500} className="text-green-500">
                  <span>✔ Deployment.</span>
                </AnimatedSpan>

                <AnimatedSpan delay={6000} className="text-blue-400">
                  <span>📞 Technical Support (30 days)</span>
                </AnimatedSpan>

                <TypingAnimation delay={6500} className="text-gray-300">
                  🚀 Launch Success! Ready for the world
                </TypingAnimation>

                <TypingAnimation delay={7000} className="text-gray-300">
                  Your vision is now live
                </TypingAnimation>
              </Terminal>
            </div>
          </MotionWrapper>
        </div>
      </div>

      <div className="xl:hidden flex flex-col items-center justify-center w-full h-full">
        <MotionWrapper
          className="w-full flex justify-center items-center mt-24 md:mt-0"
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {/* <Globe className="w-[90%]" /> */}
          <World />
        </MotionWrapper>
        <div className="flex flex-col md:flex-row md:justify-between md:w-full gap-4 -translate-y-[44rem] md:-translate-y-[34rem]">
          <div className="relative flex max-h-[400px] min-h-[400px] w-full md:w-fit max-w-[32rem] flex-col overflow-hidden rounded-lg">
            <AnimatedList>
              {extendedClientBenefits.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>

          <MotionWrapper>
            <Terminal>
              <TypingAnimation className="text-white">
                &gt; pnpm start-project YOUR_IDEA
              </TypingAnimation>

              <AnimatedSpan delay={1500} className="text-[#4BDE80]">
                <span>✔ Technical & Financial Feasibility Study.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-[#4BDE80]">
                <span>✔ Requirements documented in SRS.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-[#4BDE80]">
                <span>✔ Timeline approved.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3000} className="text-[#4BDE80] ">
                <span>✔ Wireframes presented.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-[#4BDE80]">
                <span>✔ Core Development.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-[#4BDE80]">
                <span>✔ QA & Testing.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-[#4BDE80]">
                <span>✔ Security Audit.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5000} className="text-[#4BDE80]">
                <span>✔ Delivery Package prepared.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5500} className="text-[#4BDE80]">
                <span>✔ Deployment.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={6000} className="text-blue-400">
                <span>📞 Technical Support (30 days)</span>
              </AnimatedSpan>

              <TypingAnimation delay={6500} className="text-gray-300">
                🚀 Launch Success! Ready for the world
              </TypingAnimation>

              <TypingAnimation delay={7000} className="text-gray-300">
                Your vision is now live
              </TypingAnimation>
            </Terminal>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}

export default Features;
