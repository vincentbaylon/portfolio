import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function NavBar() {
	const navigate = useNavigate()

	return (
		<header className='p-1 w-full h-12 flex items-center font-semibold text-2xl'>
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
		</header>
	)
}

export default NavBar
