import DecayCard from "@/blocks/Components/DecayCard/DecayCard";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";


function Project() {

  const projects = [
    {
        title: "Waqar",
        subTitle: "",
        description: "An e-commerce platform in Saudi Arabia.",
        // link: "https://youtu.be/1RxSLtu58G0",
        tryLink: "https://waqar-shemagh.vercel.app/",
        img: "/waqar.png",
    },
    {
        title: "Esrark",
        subTitle: "",
        description: "Teachers upload lessons; students watch.",
        link: "https://youtu.be/cfdE0iwIJAE",
        tryLink: "https://esrark.vercel.app/",
        img: "/esrark.png",
    },
    {
      title: "MedReserve",
      subTitle: "",
      description: "Manage medical appointments and prescriptions.",
      link: "https://github.com/AhmedAboRaya/MedReserve.git",
      img: "/MedRev.png",
  },
    {
        title: "Manasety",
        subTitle: "",
        description: "Teachers upload lessons; students watch.",
        link: "https://youtu.be/p5cD14k9Loc",
        tryLink: "https://manasty-phi.vercel.app/",
        img: "/Manasety.png",
    },
    {
        title: "Egy-Rack",
        subTitle: "",
        description: "Showcasing import and export products.",
        link: "https://youtu.be/ofzGAVZGfEY",
        tryLink: "https://egy-rack.vercel.app/",
        img: "/EgyRack.png",
    },
    {
        title: "TaskTracker",
        description: "A tool for organizing tasks and managing projects.",
        link: "https://youtu.be/GC8Z3Z1Z7-Q",
        tryLink: "https://depi-final-project-m1eh.vercel.app/",
        img: "/taskTracker.png",
    },
    

    // {
    //     title: "Shopping Website",
    //     description: "An e-commerce platform with a user dashboard.",
    //     link: "https://github.com/AhmedAboRaya/E-Commerce.git",
    //     img: "/Shopping.png",
    // },
    // {
    //     title: "VS Code Clone",
    //     description: "A clone of Visual Studio Code for code editing.",
    //     link: "https://youtu.be/6Vcex4rXHQY",
    //     img: "/vs_clone.png",
    // },
];

  return (
    <setion className="min-h-screen mt-80 flex flex-col items-center justify-center">
            <motion.h1
        className="aboutTitle text-white font-extrabold text-center text-9xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        exit={{ opacity: 0, y: -50 }}
      >
        PROJECTS
      </motion.h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-0 gap-y-52 mt-80">
      {projects.map((project, index) => (
        <DecayCard key={index} ><ThreeDCardDemo title={project.title} disc={project.description} img={project.img} /></DecayCard>
      ))}
      </div>
    </setion>
  );
}

export default Project;