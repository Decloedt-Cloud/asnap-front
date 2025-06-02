import React, { useState } from "react";
import { motion } from "framer-motion";

// Import partner logos
import Amazon from "../assets/png/Amazon.png";
import Framer from "../assets/png/Framer.png";
import OpenAI from "../assets/png/OpenAI.png";
import Spotify from "../assets/png/Spotify.png";
import Tesla from "../assets/png/Tesla.png";
import Todoist from "../assets/png/Todoist.png";
import Decloedt from "../assets/png/decloedt.png";
import Deloitte from "../assets/png/deloitte.png";
import Qatar from "../assets/png/Qatar.png";

const OurPartners = () => {
  const logos = [
    { src: Amazon, alt: "Amazon" },
    { src: Framer, alt: "Framer" },
    { src: OpenAI, alt: "OpenAI" },
    { src: Spotify, alt: "Spotify" },
    { src: Tesla, alt: "Tesla" },
    { src: Todoist, alt: "Todoist" },
    { src: Decloedt, alt: "Decloedt" },
    { src: Deloitte, alt: "Deloitte" },
    { src: Qatar, alt: "Qatar" },
  ];

  const [isPaused, setIsPaused] = useState(false);

  // Animation Variants
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gray-100 py-10">
      {/* Heading with Top Animation */}
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom="top"
      >
        Our Trusted Partners
      </motion.h2>

      {/* Interactive Subtitle with Left Animation */}
      <motion.p
        className="text-center text-gray-600 text-lg mb-8"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom="left"
        whileHover={{
          scale: 1.1,
          color: "#FFBF23",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
      >
        Connecting with the best innovators and leaders worldwide
      </motion.p>

      {/* Scrolling Logos with Right Animation */}
      <motion.div
        className="overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom="right"
      >
        <motion.div
          className="flex gap-10 items-center"
          animate={isPaused ? { x: "0%" } : { x: ["0%", "-100%"] }}
          transition={{
            repeat: isPaused ? 0 : Infinity,
            duration: 15,
            ease: "linear",
          }}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto cursor-pointer"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto cursor-pointer"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurPartners;
