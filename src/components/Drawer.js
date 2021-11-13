import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Drawer({ handleClick }) {
	return (
		<>
			<div
				className='drawer z-50 flex flex-col justify-evenly py-20'
				onClick={handleClick}
			>
				<button className='m-5 absolute top-0 right-0'>
					<span className=''>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-10 w-10'
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
					className='mx-5 text-lg font-normal text-white hover:text-teal-500'
					to='/'
				>
					<motion.div
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							delay: 0.1,
							duration: 1,
							repeat: false,
						}}
					>
						MAIN
					</motion.div>
				</Link>
				<Link
					className='mx-5 text-lg font-normal text-white hover:text-teal-500'
					to='/about'
				>
					<motion.div
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							delay: 0.2,
							duration: 1,
							repeat: false,
						}}
					>
						ABOUT
					</motion.div>
				</Link>
				<Link
					className='mx-5 text-lg font-normal text-white hover:text-teal-500'
					to='/projects'
				>
					<motion.div
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							delay: 0.3,
							duration: 1,
							repeat: false,
						}}
					>
						PROJECTS
					</motion.div>
				</Link>
				<Link
					className='mx-5 text-lg font-normal text-white hover:text-teal-500'
					to='/contact'
				>
					<motion.div
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							delay: 0.4,
							duration: 1,
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
