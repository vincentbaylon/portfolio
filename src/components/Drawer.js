import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

function Drawer({ handleClick, isOpen }) {
  return (
    <>
      <div
        className={
          isOpen
            ? "z-50 flex flex-col justify-start gap-20 py-40 drawer right-0"
            : "z-50 flex flex-col justify-start gap-20 py-40 drawer -right-full"
        }
        onClick={handleClick}
      >
        <button className="absolute right-0 m-2 top-5 md:m-6">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
        {/* <Link
					className='mx-5 text-lg font-normal text-white hover:text-sky-500 hover:underline'
					to='/#top'
					>
					<motion.div
					initial={{ x: 2000 }}
					animate={{ x: 0 }}
					transition={{
						type: 'spring',
						delay: 0.1,
						duration: 0.5,
						repeat: false,
					}}
					>
					BACK TO TOP
					</motion.div>
				</Link> */}
        <Link
          className="mx-5 text-lg font-normal text-white hover:text-sky-500 hover:underline"
          to="/#about"
        >
          ABOUT
        </Link>
        <Link
          className="mx-5 text-lg font-normal text-white hover:text-sky-500 hover:underline"
          to="/#projects"
        >
          PROJECTS
        </Link>

        <Link
          className="mx-5 text-lg font-normal text-white hover:text-sky-500 hover:underline"
          to="/#contact"
        >
          CONTACT
        </Link>
      </div>
    </>
  );
}

export default Drawer;
