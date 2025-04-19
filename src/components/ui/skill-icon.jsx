"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SkillIcon({ name, icon, color, percentage, index }) {
  const [showProgress, setShowProgress] = useState(false);

  // Calculate the circumference of the circle
  const size = 90;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke-dashoffset based on the percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 500 + index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Circular progress indicator */}
        {showProgress && (
          <motion.svg
            className="absolute top-0 left-0 -rotate-90"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth={strokeWidth}
            />
            {/* Progress circle */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </motion.svg>
        )}

        {/* Skill icon with inner and outer shadow */}
        <motion.div
          className="relative w-[90px] h-[90px] rounded-full flex items-center justify-center z-10"
          style={{
            boxShadow: `0 0 15px ${color}, 0 0 30px ${color}, inset 0 0 30px ${color}`,
            background: `radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)`,
            border: `2px solid ${color}`,
          }}
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: 360 }}
          transition={{
            rotate: {
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            },
            scale: { type: "spring", stiffness: 400, damping: 10 },
          }}
        >
          {typeof icon === "string" ? (
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={icon || "/placeholder.svg"}
                alt={name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          ) : (
            <icon.type size={48} color={color} />
          )}
        </motion.div>
      </motion.div>
  );
}
