import { motion } from "framer-motion";
import dev from "./assets/developer.svg";
import resume from "./Resume.pdf";

function Main({ handleProjectClick }) {
  const hiMessage = `Hi! I'm Vincent,`;
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
    <div className="flex flex-col items-center w-full md:flex-row justify-evenly">
      <div className="flex flex-col py-10 mt-10 h-5/6 md:py-20">
        <div className="">
          <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-3xl">
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
              ></motion.div>
            </div>
          </h1>
          <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-6xl">
            <div className="flex flex-row py-1 -ml-0.5">{displayStrTwo}</div>
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
                className="px-4 py-2 mb-10 text-gray-500 border-2 border-gray-500 rounded-sm shadow-md text-md hover:bg-gray-500 hover:text-white"
                onClick={handleProjectClick}
              >
                PROJECTS
              </button>
            </span>
            <span className="mx-1 mt-10">
              <a href={resume} download>
                <button className="px-4 py-2 mb-10 text-gray-500 border-2 border-gray-500 rounded-sm shadow-md text-md hover:bg-gray-500 hover:text-white">
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
