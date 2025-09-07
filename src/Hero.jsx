import React, { useEffect, useRef, useState } from "react";
import Hover from "./Hover";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const container = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // screen resize check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint (1024px)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // only apply transforms if large screen
  const imgY = useTransform(scrollYProgress, [0, 1], [0, isLargeScreen ? -150 : 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, isLargeScreen ? 0.7 : 1]);

  return (
    <div
      ref={container}
      className="w-full overflow-hidden bg-[#f5f5f7] lg:h-screen h-[60vh]"
    >
      <h1 style={{fontFamily:"montserrat,bold"}} className="hidden lg:block absolute top-1/2 text-[12rem] font-bold text-[#dadada] left-1/2 -translate-x-1/2 -translate-y-1/2">
        iCoverWorld
      </h1>

      <motion.img
        style={{ y: imgY, scale: imgScale }}
        className="object-cover scale-300 mt-45 lg:mt-0 -ml-15 lg:ml-0 lg:scale-100 lg:w-full lg:h-full"
        src="/Frame2.png"
        alt="hero"
      />
    </div>
  );
}

export default Hero;
