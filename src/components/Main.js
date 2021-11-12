import { motion } from 'framer-motion'

function Main() {
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
						duration: 0.5,
						repeat: false,
					}}
				>
					<motion.div whileHover={{ scale: 1.5 }}>
						<span className='ml-1' key={i}>
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
						duration: 0.5,
						repeat: false,
					}}
				>
					<motion.div whileHover={{ scale: 1.5 }}>
						<span className={e === 'D' ? 'ml-2' : 'ml-1'} key={i}>
							{e}
						</span>
					</motion.div>
				</motion.div>
			</>
		)
	})

	return (
		<div className='h-5/6 m-auto mx-5 sm:mx-10 md:mx-20 lg:mx-48 2xl:mx-80 flex flex-col justify-center '>
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
							duration: 0.5,
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
		</div>
	)
}

export default Main
