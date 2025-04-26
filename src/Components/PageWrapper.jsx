// src/components/PageWrapper.jsx
import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { x: "50px", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-50px", opacity: 0 },
};

const transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
