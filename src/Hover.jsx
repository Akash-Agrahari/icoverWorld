import React from "react";
import { motion } from "framer-motion";

const Duration = 0.25;
const Stagger = 0.015;

function Hover({ children, href, font = "Montserrat, Bold", arrow = false }) {
  const textArray = children.split("");

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
      href={href}
    >
      {/* First layer (no arrow) */}
      <div>
        {textArray.map((l, i) => (
          <motion.span
            key={`top-${i}`}
            transition={{
              duration: Duration,
              ease: "easeInOut",
              delay: Stagger * i,
            }}
            className="inline-block"
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Second layer (with arrow) */}
      <div className="absolute inset-0">
        {[...textArray, arrow ? " →" : ""].map((l, i) => (
          <motion.span
            key={`bottom-${i}`}
            style={{ fontFamily: font }}
            transition={{
              duration: Duration,
              ease: "easeInOut",
              delay: Stagger * i,
            }}
            className="inline-block"
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}

export default Hover;
