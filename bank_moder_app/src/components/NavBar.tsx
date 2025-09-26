import { AnimatePresence, motion } from "framer-motion";

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/logo.svg";

import { navLinks } from "../constants";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [navShadow, setNavShadow] = useState(false);

  const handleClickLogo = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }

      window.addEventListener("scroll", handleScroll);
    };
    return () => window.addEventListener("scroll", handleScroll);
  }, [setNavShadow]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed z-50 top-0 left-0 w-full  flex py-6 justify-between items-center duration-200 ${
        navShadow ? "bg-primary/30 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto flex px-6 sm:px-16">
        <img
          src={logo}
          alt="hoobank"
          onClick={handleClickLogo}
          className="w-32 h-8 hover:drop-shadow-2xl cursor-pointer"
        />

        <ul className="text-dimWhite list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`"font-poppins font-normal cursor-pointer text-base hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300 ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={toggle ? "close" : "menu"}
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6 object-contain cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
          </AnimatePresence>

          <AnimatePresence initial={false}>
            <motion.div
              key={toggle ? "flex" : "hidden"}
              initial={{ opacity: 0, scale: 0, originX: 1, originY: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring" }}
              className={`${
                toggle ? "flex" : "hidden"
              } bg-black-gradient p-6 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={index}
                    className={`"font-poppins font-normal cursor-pointer text-base text-white ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    }`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};
