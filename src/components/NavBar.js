import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import Drawer from './Drawer'

function NavBar({ handleProjectClick, handleAboutClick, handleContactClick }) {
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState()

	const handleClick = () => {
		setIsOpen((isOpen) => !isOpen)
	}

	return (
		<div className='flex relative w-full justify-center bg-zinc-800'>
			<header className='sm:visible md:invisible p-1 flex items-center font-semibold text-2xl absolute top-0 right-0 z-50 justify-end'>
				<button className='' onClick={handleClick}>
					<motion.div
						initial={{ y: -1000 }}
						animate={{ y: 0 }}
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
							fill=''
							viewBox='0 0 20 20'
							stroke='currentColor'
						>
							<g color='#0EA5E9'>
								<path
									fill='#0EA5E9'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</g>
						</svg>
					</motion.div>
				</button>
			</header>

			<motion.div
				className='flex justify-center items-center w-full'
				initial={{ y: -1000 }}
				animate={{ y: 0 }}
				transition={{
					type: 'spring',
					delay: 0,
					duration: 1,
					repeat: false,
				}}
			>
				<header className='invisible md:visible p-2 flex flex-row w-full items-center top-0 z-50 justify-evenly absolute text-md bg-slate-700 rounded-md'>
					<Link
						className='text-sky-500 font-semibold hover:underline hover:decoration-amber-500'
						to=''
						onClick={handleAboutClick}
					>
						ABOUT
					</Link>
					<Link
						className='text-sky-500 font-semibold hover:underline hover:decoration-amber-500'
						to=''
						onClick={handleProjectClick}
					>
						PROJECTS
					</Link>
					<Link
						className='text-sky-500 font-semibold hover:underline hover:decoration-amber-500'
						to=''
						onClick={handleContactClick}
					>
						CONTACT
					</Link>
				</header>
			</motion.div>

			{isOpen ? <Drawer handleClick={handleClick} /> : null}
		</div>
	)
}

export default NavBar
