// RotatingImages.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import react from "@/assets/react.png";
import node from "@/assets/sass.png";
import tailwind from "@/assets/tailwind.png";
import html from "@/assets/html.png";

export const RotatingImages = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add slight throttling for performance
    const throttledScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Memoize calculations
  const rotations = {
    react: scrollPosition * 0.5,
    tailwind: -scrollPosition * 0.3,
    node: scrollPosition * 0.4,
    html: -scrollPosition * 0.2,
  };

  return (
    <div className="block absolute inset-0 pointer-events-none overflow-hidden">
      {[
        { img: react, className: "top-3 left-5 md:top-10 md:left-10 ", rotation: rotations.react },
        { img: tailwind, className: "top-3 right-5 md:top-10 md:right-10", rotation: rotations.tailwind },
        { img: node, className: "bottom-3 left-5 md:bottom-10 md:left-10", rotation: rotations.node },
        { img: html, className: "bottom-3 right-5 md:bottom-10 md:right-10", rotation: rotations.html },
      ].map(({ img, className, rotation }, index) => (
        <motion.div
          key={index}
          className={`absolute size-10 sm:size-16 md:size-32 ${className} `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.1s linear",
          }}
        >
          <img src={img} alt="" className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};