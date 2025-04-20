import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";
import Image from "./Image";
import { Spotlight } from "./ui/spotlight-new";
import { motion } from "framer-motion";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { NavbarDemo } from "./ui/NavDemo";
import MotionWrapper from "./ui/MotionWrapper";
const Home = () => {
  return (
    <MotionWrapper triggerOnce={true} delay={0.2} className="" id="home">
      <section className="flex flex-col min-h-screen relative justify-end md:justify-center items-center pb-5 md:px-8 md:pt-20 lg:px-20  mt-16 overflow-hidden">
        <ScrollProgress />
        <div className="fixed top-0 left-0 w-full md:px-10 z-50">
          <NavbarDemo />
        </div>
        
        <div className="fixed top-0 left-0 w-full">
          <Spotlight />
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          // viewport={{ once: false }}
          // exit={{ opacity: 0 }}
        > */}
          <Image />
        {/* </motion.div> */}

      </section>
      <motion.div
        className="hidden md:block md:-mt-96 relative z-[-1]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: 50 }}
      >
        <TextPressure />
      </motion.div>
    </MotionWrapper>
  );
};

export default Home;
