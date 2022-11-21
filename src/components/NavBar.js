import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import Drawer from "./Drawer";

function NavBar({ handleProjectClick, handleAboutClick, handleContactClick }) {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="sticky justify-center w-full m-auto bg-slate-900 top-6">
      <header className="absolute top-0 right-0 z-50 flex items-center justify-end p-1 text-2xl font-semibold sm:visible md:invisible">
        <button className="" onClick={handleClick}>
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              delay: 0,
              duration: 1,
              repeat: false,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill=""
              viewBox="0 0 20 20"
              stroke="black"
            >
              <g color="#000">
                <path
                  fill="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </g>
            </svg>
          </motion.div>
        </button>
      </header>

      <motion.div
        className="flex items-center justify-center w-full"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          delay: 0,
          duration: 1,
          repeat: false,
        }}
      >
        <header className="absolute top-0 z-50 flex flex-row items-center invisible w-full p-2 rounded-md bg-slate-900 md:visible justify-evenly text-md">
          <Link
            className="font-semibold text-white hover:underline hover:underline-offset-2 hover:decoration-rose-500"
            to=""
            onClick={handleAboutClick}
          >
            ABOUT
          </Link>
          <Link
            className="font-semibold text-white hover:underline hover:underline-offset-2 hover:decoration-rose-500"
            to=""
            onClick={handleProjectClick}
          >
            PROJECTS
          </Link>
          <Link
            className="font-semibold text-white hover:underline hover:underline-offset-2 hover:decoration-rose-500"
            to=""
            onClick={handleContactClick}
          >
            CONTACT
          </Link>
        </header>
      </motion.div>

      <Drawer handleClick={handleClick} isOpen={isOpen} />
    </div>
  );
}

export default NavBar;
