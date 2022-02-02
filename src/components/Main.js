import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import resume from './Resume.docx'

function Main({ handleProjectClick }) {
	const navigate = useNavigate()
	const hiMessage = `Hi! I'm Vincent`
	const devMessage = 'Full-Stack Developer'

	let count = 0
	const displayStr = hiMessage.split('').map((e, i) => {
		count += 0.05
		return (
			<div key={i}>
				<motion.div
					initial={{ scale: 1, opacity: 0 }}
					animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
					transition={{
						type: 'spring',
						bounce: 0.5,
						delay: count,
						duration: 0.03,
						repeat: false,
					}}
				>
					<span className={e === e.toUpperCase() ? 'ml-1' : null}>{e}</span>
				</motion.div>
			</div>
		)
	})
	const displayStrTwo = devMessage.split('').map((e, i) => {
		count += 0.05
		return (
			<div key={i}>
				<motion.div
					initial={{ scale: 1, opacity: 0 }}
					animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
					transition={{
						type: 'spring',
						bounce: 0.5,
						delay: count,
						duration: 0.03,
						repeat: false,
					}}
				>
					<span className={e === e.toUpperCase() ? 'ml-1' : null}>{e}</span>
				</motion.div>
			</div>
		)
	})

	return (
		<div className='mt-10 h-5/6 m-auto py-10 md:py-20 flex flex-col justify-center'>
			<div className=''>
				<h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>
					<div className='flex flex-row py-1'>
						{displayStr}
						<motion.div
							initial={{ scale: 1, opacity: 0 }}
							animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
							transition={{
								type: 'spring',
								bounce: 0.5,
								delay: 0.75,
								duration: 0.3,
								repeat: false,
							}}
						>
							<motion.div
								animate={{ rotate: [0, 75, 0] }}
								transition={{ duration: 10, repeat: Infinity }}
							>
								<span className='ml-4'>👋</span>
							</motion.div>
						</motion.div>
					</div>
				</h1>
				<h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>
					<div className='flex flex-row py-1'>{displayStrTwo}</div>
				</h1>
			</div>
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
				<div className='flex flex-row gap-1'>
					<span className='mx-1 mt-10'>
						<button
							className='mb-10 text-sky-500 border-2 border-sky-500 text-md rounded-sms py-2 px-4 hover:bg-sky-500 hover:text-white shadow-md'
							onClick={handleProjectClick}
						>
							PROJECTS
						</button>
					</span>
					<span className='mt-10 mx-1'>
						<a href={resume} download>
							<button className='mb-10 text-sky-500 border-2 border-sky-500 text-md rounded-sm py-2 px-4 hover:bg-sky-500 hover:text-white shadow-md'>
								RESUME
							</button>
						</a>
					</span>
				</div>
			</motion.div>
		</div>
	)
}

export default Main
