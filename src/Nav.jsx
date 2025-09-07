import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Menu from "./Menu";
import Hover from "./Hover";
import Search from "./Search";
import { motion } from "framer-motion";

function Nav() {
  const divRef = useRef();
  const navRef = useRef();
  const searchRef = useRef();
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev); // toggle menu
  };

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    const nav = navRef.current;

    const handleScroll = () => {
      if (window.scrollY > 5) {
        gsap.to(divRef.current, {
          opacity: 0,
          duration: 0.01,
          display: "none", // sets display:none after fade
          ease: "ease",
        });

        gsap.to(nav, {
          backdropFilter: "blur(40px)", // same as backdrop-blur-3xl
          backgroundColor: "rgba(255, 255, 255, 0.5)", // white/70
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(divRef.current, {
          opacity: 1,
          delay: 0.3,
          duration: 0,
          display: "flex",
          ease: "power2.out",
        });

        gsap.to(nav, {
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(255, 255, 255, 1)",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isSearchOpen && <Search setOpen={setIsSearchOpen} />}
      <motion.div
        animate={{
          backgroundColor: isSearchOpen
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0.5)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        ref={navRef}
        className=" select-none bg-white nav-main z-[999] w-full fixed"
      >
        <div
          style={{ fontFamily: "montserrat,Bold" }}
          className="relative  w-full py-2 px-5  flex items-center  justify-between "
        >
          <h1 className="left-nav text-xl text-[#1d1d1f]  xl:text-2xl md:text-lg sm:text-sm  lg:text-xl 2xl:text-3xl lg:font-medium font-semibold tracking-tight">
            iCoverworld
          </h1>
          <div className=" right-nav sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg flex items-center justify-center gap-5">
            <img
              onClick={handleSearchClick}
              src={isSearchOpen ? "/nav/close.svg" : "/nav/search.svg"}
              ref={searchRef}
              className="sm:w-4 sm:h-4  md:w-5 h-7 w-7 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 cursor-pointer "
              alt="Search"
            />
            <img
              src="/nav/cart.svg"
              className="sm:w-4 sm:h-4 md:w-5 h-7 w-7 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 cursor-pointer "
              alt="cart"
            />

            <img
              onClick={handleMenuClick}
              ref={menuRef}
              src="/nav/menu.svg"
              className="flex sm:w-4 sm:h-4 h-7 w-7  md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 cursor-pointer"
              alt="menu"
            />
          </div>
        </div>
        {/* Conditionally render the menu */}
        {isMenuOpen && <Menu menu={setIsMenuOpen} />}
      </motion.div>
    </>
  );
}

export default Nav;
