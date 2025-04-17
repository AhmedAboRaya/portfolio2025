import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";
import Header from "./Header";
import Image from "./Image";
import ContactButton from "./ui/ContactButton";
import { Spotlight } from "./ui/spotlight-new";
import { motion, useInView } from "framer-motion";

const Home = () => {
  return (
    <div className="">
      <section className="flex flex-col min-h-screen relative justify-end md:justify-center items-center pb-5 md:px-8 md:pt-20 lg:px-20  mt-16 overflow-hidden">
        <Header />
        <div className="fixed top-0 left-0 w-full">
          <Spotlight />
        </div>
        <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  // viewport={{ once: false }}
                  // exit={{ opacity: 0 }}
                  >
          <Image />
        </motion.div>
        
        <div className="flex justify-center md:justify-between w-full">
          <ContactButton />
        </div>
      </section>
      <motion.div className="hidden md:block md:-mt-96 relative z-[-1]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}
                exit={{ opacity: 0, y: 50 }} >
        <TextPressure />
      </motion.div>
    </div>
  );
};

export default Home;
