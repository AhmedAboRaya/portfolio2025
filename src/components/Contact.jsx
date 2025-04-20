import { AuroraText } from "./magicui/aurora-text";
import { motion } from "framer-motion";
import { TextAnimate } from "./magicui/text-animate";
import { useState, useEffect } from "react";
import MotionWrapper from "./ui/MotionWrapper";
import { World } from "./ui/globe";
import FireflyButton from "./ui/firefly-button";
import emailjs from "@emailjs/browser";
import { AnimatedBeam } from "./magicui/animated-beam";
import { AnimatedBeamDemo } from "./ui/AnimatedBeamDemo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage("");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending...");

    try {
      await emailjs.send(
        "service_bplj1hc",
        "template_n6nfhyh",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Ahmed AboRaya",
        },
        "5eR8XMsDN1mBxKRpk"
      );

      setStatusMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

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
          Contact
        </TextAnimate>
      </motion.h1>
      <div className="flex flex-col gap-y-11 md:grid md:grid-cols-2 mt-20 container">
        <MotionWrapper
          animationType="slideRight"
          className="text-4xl md:text-7xl font-semibold"
        >
          Have Any Project In <AuroraText>Mind?</AuroraText>
          <AnimatedBeamDemo />
          
          
        </MotionWrapper>

        {/* Globe */}
        <MotionWrapper
          className="w-full z-[-1] absolute flex justify-center items-center m-auto"
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: "100px",
            margin: "0 auto",
          }}
        >
          <World />
        </MotionWrapper>

        {/* Form */}
        <MotionWrapper
          animationType="slideLeft"
          className="relative rounded-xl px-8 md:px-12 lg:px-16 xl:px-20 py-7 md:py-12 lg:py-16 xl:py-20 bg-[#0B0B0B]/60 border border-border/30 w-full flex gap-5 flex-col overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
              >
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative mt-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
              >
                Your Email
              </label>
            </div>

            {/* Subject Input */}
            <div className="relative mt-4">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="subject"
                className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
              >
                Subject
              </label>
            </div>

            {/* Message Input */}
            <div className="relative mt-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
                placeholder=" "
                required
                rows={4}
              />
              <label
                htmlFor="message"
                className="absolute left-2 -top-2.5 text-sm font-medium text-[#4BDE80] px-1 transition-all duration-500 transform scale-90 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-200 peer-focus:scale-90"
              >
                Message
              </label>
            </div>

            <div className="w-full flex flex-col items-center pt-4 md:pt-9">
              <div>
                <FireflyButton
                  type="submit"
                  text={isSending ? "Sending..." : "Send"}
                  backgroundColor="#000000cc"
                  textColor="#ffffff"
                  glowColor="#ffffff"
                  fireflyCount={15}
                  fontSize="1rem"
                  padding="1rem 3rem"
                  disabled={isSending}
                />
              </div>
              {statusMessage && (
                <p className={`mt-4 text-sm ${statusMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Contact;