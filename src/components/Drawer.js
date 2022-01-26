import { HashLink as Link } from 'react-router-hash-link'
import { motion } from 'framer-motion'

function Drawer({ handleClick }) {
	return (
		<>
			<div
				className='drawer z-50 flex flex-col justify-evenly py-20'
				onClick={handleClick}
			>
				<button className='m-2 md:m-6 absolute top-0 right-0'>
					<span className=''>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='white'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</span>
				</button>
				<Link
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
				</Link>
				<Link
					className='mx-5 text-lg font-normal text-white hover:text-sky-500 hover:underline'
					to='/#about'
				>
					<motion.div
						initial={{ x: 2000 }}
						animate={{ x: 0 }}
						transition={{
							type: 'spring',
							delay: 0.2,
							duration: 0.5,
							repeat: false,
						}}
					>
						ABOUT
					</motion.div>
				</Link>
				<Link
					className='mx-5 text-lg font-normal text-white hover:text-sky-500 hover:underline'
					to='/#projects'
				>
					<motion.div
						initial={{ x: 2000 }}
						animate={{ x: 0 }}
						transition={{
							type: 'spring',
							delay: 0.3,
							duration: 0.5,
							repeat: false,
						}}
					>
						PROJECTS
					</motion.div>
				</Link>

				<Link
					className='mx-5 text-lg font-normal text-white hover:text-sky-500 hover:underline'
					to='/#contact'
				>
					<motion.div
						initial={{ x: 2000 }}
						animate={{ x: 0 }}
						transition={{
							type: 'spring',
							delay: 0.5,
							duration: 0.5,
							repeat: false,
						}}
					>
						CONTACT
					</motion.div>
				</Link>
			</div>
		</>
	)
}

export default Drawer
