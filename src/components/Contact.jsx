import { AuroraText } from "./magicui/aurora-text";
import { BorderBeam } from "./magicui/border-beam";
import { motion } from "framer-motion";
import { TextAnimate } from "./magicui/text-animate";
import { useState } from "react";
import MotionWrapper from "./ui/MotionWrapper";
import { World } from "./ui/globe";
import FireflyButton from "./ui/firefly-button";
// import emailjs from "emailjs-com";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //     to_name: "Ahmed AboRaya",
  //   });
  //   const [statusMessage, setStatusMessage] = useState("");
  //   const [isSending, setIsSending] = useState(false);

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setIsSending(true);
  //     setStatusMessage("Sending...");

  //     emailjs
  //       .send(
  //         "service_bplj1hc",
  //         "template_skwh4ko",
  //         formData,
  //         "5eR8XMsDN1mBxKRpk"
  //       )
  //       .then(
  //         (response) => {
  //           setStatusMessage("Message sent successfully!");
  //         },
  //         (error) => {
  //           console.error("EmailJS error:", error);
  //           setStatusMessage("Failed to send message. Please try again later.");
  //         }
  //       )
  //       .finally(() => {
  //         setIsSending(false);
  //         setFormData({
  //           name: "",
  //           email: "",
  //           message: "",
  //           to_name: "Ahmed AboRaya",
  //         });
  //       });
  //   };

  return (
    <section
      id="contact"
      className="text-white pt-16 px-5 min-h-screen w-full flex items-center flex-col"
    >
      <motion.h1
        className="aboutTitle text-white font-extrabold w-full text-9xl text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        <TextAnimate animation="blurInUp" by="character">
          Contact Me
        </TextAnimate>
      </motion.h1>
      <div className="flex flex-col gap-y-11 z-50 md:grid md:grid-cols-2 mt-20 container">
        <MotionWrapper
          animationType="slideRight"
          className="text-7xl font-semibold"
        >
          Have Any Project In <AuroraText>Mind?</AuroraText>
        </MotionWrapper>
        <MotionWrapper
          className="w-full z-[-1] absolute flex justify-center items-center mt-24 md:mt-0"
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: "100px",
            margin: "0 auto",
          }}
        >
          <World />
        </MotionWrapper>
        <MotionWrapper
          animationType="slideLeft"
          className="relative rounded-xl px-8 md:px-12 lg:px-16 xl:px-20 py-20 bg-[#0B0B0B]/60 border border-border/30 w-full flex gap-5 flex-col  overflow-hidden"
        >
          <MotionWrapper delay={0.4} animationType="scall" className="relative">
            <input
              type="text"
              id="name"
              name="name"
              // onChange={handleChange}
              className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left  peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
            >
              Your Name
            </label>
          </MotionWrapper>
          <MotionWrapper delay={0.5} animationType="scall" className="relative">
            <input
              type="text"
              id="name"
              name="name"
              // onChange={handleChange}
              className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left  peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
            >
              Your Email
            </label>
          </MotionWrapper>
          <MotionWrapper delay={0.6} animationType="scall" className="relative">
            <input
              type="text"
              id="name"
              name="name"
              // onChange={handleChange}
              className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left  peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
            >
              Subject
            </label>
          </MotionWrapper>
          <MotionWrapper delay={0.7} animationType="scall" className="relative">
            <input
              type="text"
              id="name"
              name="name"
              // onChange={handleChange}
              className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left  peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
            >
              Description
            </label>
          </MotionWrapper>

          <FireflyButton
            text="Glowing Button"
            backgroundColor="#000000cc"
            textColor="#ffffff"
            glowColor="#4BDE80"
            fireflyCount={15}
            fontSize="1.2rem"
            padding="1.5rem 3rem"
            onClick={() => alert("Glowing button clicked!")}
          />

          <BorderBeam duration={8} size={100} />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Contact;
