import Header from "./Header";
import Image from "./Image";
import ContactButton from "./ui/ContactButton";
import { Spotlight } from "./ui/spotlight-new";

const Home = () => {
  return (
<section className="flex flex-col min-h-screen relative justify-end md:justify-center items-center pb-5 md:px-8 md:pt-20 lg:px-20  mt-16">
    <Header />
    <Spotlight />
  <Image />
  <div className="flex justify-center md:justify-between w-full">
    <p className="hidden md:block text-white description">
      A FULL-STACK ENGINEER PASSIONATE <br />
      ABOUT BUILDING SCALABLE AND
      <br />
      INNOVATIVE WEB SOLUTIONS
    </p>
    <ContactButton />
  </div>
</section>
  );
};

export default Home;
