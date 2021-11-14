import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Drawer from './Drawer'

function NavBar() {
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState()

	const handleClick = () => {
		setIsOpen((isOpen) => !isOpen)
	}

	return (
		<>
			<header className='visible sm:invisible sm:h-0 p-1 w-full h-12 flex items-center font-semibold text-2xl sticky top-0 z-40 bg-white'>
				<Link
					className='mx-2 text-2xl font-medium hover:text-teal-500 flex-1'
					to='/'
				>
					<motion.div
						initial={{ x: -1000 }}
						animate={{ x: 0 }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						VB
					</motion.div>
				</Link>
				<button className='' onClick={handleClick}>
					<motion.div
						initial={{ x: 1000 }}
						animate={{ x: 0 }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</motion.div>
				</button>
			</header>
			<header className='invisible h-0 sm:visible p-1 w-full sm:h-12 flex items-center font-semibold text-2xl sticky top-0 z-40 bg-white'>
				<Link
					className='mx-2 text-2xl font-medium hover:text-teal-500 flex-1'
					to='/'
				>
					<motion.div
						initial={{ x: -1000 }}
						animate={{ x: 0 }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						VB
					</motion.div>
				</Link>
				<Link
					className='mx-5 text-base font-normal text-gray-500 hover:text-teal-500'
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
					className='mx-5 text-base font-normal text-gray-500 hover:text-teal-500'
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
					className='mx-5 text-base font-normal text-gray-500 hover:text-teal-500'
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
					className='mx-5 text-base font-normal text-gray-500 hover:text-teal-500'
					to='/blog'
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
						BLOG
					</motion.div>
				</Link>
				<Link
					className='mx-5 text-base font-normal text-gray-500 hover:text-teal-500'
					to='/contact'
				>
					<motion.div
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							delay: 0.5,
							duration: 1,
							repeat: false,
						}}
					>
						CONTACT
					</motion.div>
				</Link>
			</header>
			{isOpen ? <Drawer handleClick={handleClick} /> : null}
		</>
	)
}

export default NavBar
