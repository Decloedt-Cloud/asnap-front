import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function AnimatedTestimonials({ testimonials, autoplay = true }) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-5xl mx-auto antialiased font-sans px-6 py-16">
      {/* Titre Centré */}
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Testimonials
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SECTION IMAGE */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              index === active && (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* SECTION TEXTE */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">{testimonials[active].name}</h3>
            <p className="text-sm text-gray-500">{testimonials[active].designation}</p>
            <motion.p className="text-lg text-gray-700 mt-6">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(5px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* NAVIGATION */}
          <div className="flex gap-4 pt-8">
            <button onClick={handlePrev} className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition">
              <IconArrowLeft className="h-6 w-6 text-black" />
            </button>
            <button onClick={handleNext} className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md hover:bg-gray-300 transition">
              <IconArrowRight className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
