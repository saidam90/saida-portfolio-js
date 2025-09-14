import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./reveal.module.scss";

export const Reveal = ({ children, width = "fit-content" }) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  const containerClass =
    width === "100%"
      ? `${styles.revealContainer} ${styles.revealContainerFull}`
      : `${styles.revealContainer} ${styles.revealContainerFit}`;

  return (
    <div ref={ref} className={containerClass}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
