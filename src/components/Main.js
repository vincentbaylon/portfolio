import { motion } from "framer-motion";
import resume from "./Resume.docx";
import dev from "./assets/developer.svg";

function Main({ handleProjectClick }) {
  const hiMessage = `Hi! I'm Vincent`;
  const devMessage = "Full-Stack Developer";

  let count = 0;
  const displayStr = hiMessage.split("").map((e, i) => {
    count += 0.05;
    return (
      <div key={i}>
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
          transition={{
            type: "spring",
            bounce: 0.5,
            delay: count,
            duration: 0.03,
            repeat: false,
          }}
        >
          <span className={e === e.toUpperCase() ? "ml-1" : null}>{e}</span>
        </motion.div>
      </div>
    );
  });
  const displayStrTwo = devMessage.split("").map((e, i) => {
    count += 0.05;
    return (
      <div key={i}>
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
          transition={{
            type: "spring",
            bounce: 0.5,
            delay: count,
            duration: 0.03,
            repeat: false,
          }}
        >
          <span className={e === e.toUpperCase() ? "ml-1" : null}>{e}</span>
        </motion.div>
      </div>
    );
  });

  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-evenly">
      <div className="mt-10 h-5/6 py-10 md:py-20 flex flex-col">
        <div className="">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-black">
            <div className="flex flex-row py-1">
              {displayStr}
              <motion.div
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  delay: 0.75,
                  duration: 0.3,
                  repeat: false,
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 75, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <span className="ml-4">👋</span>
                </motion.div>
              </motion.div>
            </div>
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-black">
            <div className="flex flex-row py-1">{displayStrTwo}</div>
          </h1>
        </div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            delay: 0,
            duration: 1,
            repeat: false,
          }}
        >
          <div className="flex flex-row gap-1">
            <span className="mx-1 mt-10">
              <button
                className="mb-10 text-gray-500 border-2 border-gray-500 text-md rounded-sms py-2 px-4 hover:bg-gray-500 hover:text-white shadow-md"
                onClick={handleProjectClick}
              >
                PROJECTS
              </button>
            </span>
            <span className="mt-10 mx-1">
              <a href={resume} download>
                <button className="mb-10 text-gray-500 border-2 border-gray-500 text-md rounded-sm py-2 px-4 hover:bg-gray-500 hover:text-white shadow-md">
                  RESUME
                </button>
              </a>
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          delay: 0,
          duration: 1,
          repeat: false,
        }}
      >
        <img
          className="h-64 md:h-80 md:mt-40"
          src={dev}
          alt="a developer coding"
        />
      </motion.div>
    </div>
  );
}

export default Main;
