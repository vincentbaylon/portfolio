import { motion } from 'framer-motion'
import '../index.css'

function Backdrop({ children, onClick }) {
	return (
		<>
			<motion.div
				className='backdrop z-50'
				onClick={onClick}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{children}
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
			</motion.div>
		</>
	)
}

export default Backdrop
