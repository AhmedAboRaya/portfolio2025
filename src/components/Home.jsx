import GradientText from "../blocks/TextAnimations/GradientText/GradientText";
import TextPressure from "../blocks/TextAnimations/TextPressure/TextPressure";
import TrueFocus from "../blocks/TextAnimations/TrueFocus/TrueFocus";
import Header from "./Header";
import Image from "./Image";
import ContactButton from "./ui/ContactButton";
import { Spotlight } from "./ui/spotlight-new";

const Home = () => {
  return (
    <div className="">
      <section className="flex flex-col min-h-screen relative justify-end md:justify-center items-center pb-5 md:px-8 md:pt-20 lg:px-20  mt-16 overflow-hidden">
        <Header />
        <div className="fixed top-0 left-0 w-full">
          <Spotlight />
        </div>

        <Image />
        <div className="flex justify-center md:justify-between w-full">
          {/* <GradientText className="hidden  description">
          A FULL-STACK ENGINEER PASSIONATE <br />
              ABOUT BUILDING SCALABLE AND
              <br />
              INNOVATIVE WEB SOLUTIONS

          </GradientText> */}
          {/* <p className="hidden md:block description text-white">
          A FULL-STACK ENGINEER PASSIONATE <br />
              ABOUT BUILDING SCALABLE AND
              <br />
              INNOVATIVE WEB SOLUTIONS
          </p> */}
          <ContactButton />
        </div>
      </section>
      <div className="hidden md:block md:-mt-96">
        <TextPressure />
      </div>
    </div>
  );
};

export default Home;
