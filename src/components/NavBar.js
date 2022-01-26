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
			<header className='p-1 w-full flex items-center font-semibold text-2xl sticky top-0 z-50 bg-gray-100 justify-end bg-transparent'>
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

			{isOpen ? <Drawer handleClick={handleClick} /> : null}
		</>
	)
}

export default NavBar
