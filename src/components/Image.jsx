import { useState, useEffect } from "react";
import image from "../assets/image.png";
import TrueFocus from "../blocks/TextAnimations/TrueFocus/TrueFocus";

const Image = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 50 - 25, // Normalize movement
        y: (e.clientY / window.innerHeight) * 50 - 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden absolute top-0 left-0 flex justify-center">
      <h1 className="name relative text-9xl font-extrabold text-white text-center">
        {/* HI, I'M AHMED */}<TrueFocus />
      </h1>
      
      <img
        src={image}
        className="absolute  w-[70%] md:w-auto md:h-2/3 image z-50"
        style={{
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
          top: "50%",
          left: "50%",
          transition: "transform 0.1s ease-out",
        }}
      />


    </div>
  );
};

export default Image;
