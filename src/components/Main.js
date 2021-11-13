import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Main() {
	const navigate = useNavigate()
	const hiMessage = `Hi, I'm Vincent`
	const devMessage = 'Full-Stack Developer'

	let count = 0
	const displayStr = hiMessage.split('').map((e, i) => {
		count += 0.1
		return (
			<>
				<motion.div
					initial={{ scale: 1, opacity: 0 }}
					animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
					transition={{
						type: 'spring',
						bounce: 0.5,
						delay: count,
						duration: 0.2,
						repeat: false,
					}}
				>
					<motion.div whileHover={{ scale: 1.5 }}>
						<span className={e === e.toUpperCase() ? 'ml-1' : null} key={i}>
							{e}
						</span>
					</motion.div>
				</motion.div>
			</>
		)
	})
	const displayStrTwo = devMessage.split('').map((e, i) => {
		count += 0.1
		return (
			<>
				<motion.div
					initial={{ scale: 1, opacity: 0 }}
					animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
					transition={{
						type: 'spring',
						bounce: 0.5,
						delay: count,
						duration: 0.2,
						repeat: false,
					}}
				>
					<motion.div whileHover={{ scale: 1.5 }}>
						<span className={e === e.toUpperCase() ? 'ml-1' : null} key={i}>
							{e}
						</span>
					</motion.div>
				</motion.div>
			</>
		)
	})

	const handleClick = () => {
		navigate('/contact')
	}

	return (
		<div className='h-5/6 m-auto mx-2 sm:mx-10 md:mx-20 lg:mx-48 2xl:mx-80 flex flex-col justify-center '>
			<h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold text-left'>
				<div className='flex flex-row'>
					{displayStr}
					<motion.div
						initial={{ scale: 1, opacity: 0 }}
						animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
						transition={{
							type: 'spring',
							bounce: 0.5,
							delay: 1.6,
							duration: 0.2,
							repeat: false,
						}}
					>
						<motion.div whileHover={{ scale: 1.3 }}>
							<motion.div
								animate={{ rotate: [0, 75, 0] }}
								transition={{ duration: 10, repeat: Infinity }}
							>
								<span className='ml-4'>👋</span>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</h1>
			<br />
			<h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold text-left'>
				<div className='flex flex-row'>{displayStrTwo}</div>
			</h1>
			<span className='mt-10 mx-1'>
				<motion.div
					initial={{ x: -1000 }}
					animate={{ x: 0 }}
					transition={{
						type: 'spring',
						delay: 3.5,
						duration: 1,
						repeat: false,
					}}
				>
					<button
						className='mb-10 border-2 bg-teal-500 text-white text-xl rounded-md py-2 px-4 hover:bg-gray-400 shadow-md'
						onClick={handleClick}
					>
						Contact me
					</button>
				</motion.div>
			</span>
		</div>
	)
}

export default Main
