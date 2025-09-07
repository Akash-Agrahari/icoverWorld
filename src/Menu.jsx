import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Hover from "./Hover";

function Menu({ menu }) {
  const menuref = useRef();

  // Open animation
  useEffect(() => {
    if (menuref.current) {
      gsap.fromTo(
        menuref.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, []);

  const handleMenuClick = () => {
    if (menuref.current) {
      gsap.to(menuref.current, {
        x: 200,
        opacity: 1,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => menu(false), // unmount after animation
      });
    }
  };

  return (
    <div
      ref={menuref}
      className="absolute z-10 menu-main top-0 h-screen right-0 w-1/4 
       border-l border-[#dadada] bg-white flex flex-col px-5 py-3 gap-5"
    >
      <div className="w-full flex items-center justify-end">
        <img
          onClick={handleMenuClick}
          src="/nav/close.svg"
          alt="close"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      <div
        style={{ fontFamily: "montserrat,Bold" }}
        className="text-4xl text-[#1D1D1F]  font-medium tracking-tighter flex px-5 flex-col items-start gap-5"
      >
        <Hover  font={'Dancing Script'} arrow={true} href="#">Home</Hover>
        <Hover  font={'Dancing Script'} arrow={true} href="#">Cart</Hover>
        <Hover  font={'Dancing Script'} arrow={true} href="#">Account</Hover>
        <Hover  font={'Dancing Script'} arrow={true} href="#">About</Hover>
        <Hover  font={'Dancing Script'} arrow={true} href="#">Contact</Hover>
      </div>
    </div>
  );
}

export default Menu;
