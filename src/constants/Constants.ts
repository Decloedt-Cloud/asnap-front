// animationConstants.js

export const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Staggered animation for text elements
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  
  export const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  
  export const loopingScaleVariants = {
    animate: { scale: [1, 1.3, 1] },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  };
  