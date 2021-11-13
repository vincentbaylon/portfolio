import { motion } from 'framer-motion'
import Backdrop from './Backdrop'

function Modal({ handleClose, project }) {
	const dropIn = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
		},
	}

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const handleClick = () => {
		console.log(project.repo)
		openInNewTab(project.repo)
	}

	const handlePhoenix = () => {
		openInNewTab('https://phoenix-fitness.herokuapp.com')
	}

	return (
		<>
			{console.log(project)}
			<Backdrop onClick={handleClose}>
				<div className='flex flex-col w-full'>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						className='modal'
						variants={dropIn}
					>
						<img src={project.image} />
					</motion.div>
					<span className='flex justify-center'>
						<button
							className='text-white mx-5 text-xl mt-5 rounded-md bg-teal-500 py-2 px-4'
							onClick={handleClick}
						>
							Repo
						</button>
						{project.name === 'Phoenix Fitness' ? (
							<button
								className='text-white mx-5 text-xl mt-5 rounded-md bg-teal-500 py-2 px-4'
								onClick={handlePhoenix}
							>
								Live
							</button>
						) : null}
					</span>
				</div>
			</Backdrop>
		</>
	)
}

export default Modal
