import { useState } from 'react'
import { motion } from 'framer-motion'

import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'
import Modal from './Modal'

function Projects() {
	const [modalOpen, setModalOpen] = useState(false)
	const [project, setProject] = useState({})
	const title = 'Projects'

	let count = 0
	const displayStr = title.split('').map((e, i) => {
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

	const handleClose = () => {
		setModalOpen(false)
	}

	const handleClick = () => {
		setModalOpen((modalOpen) => !modalOpen)
	}

	const displayProjects = ProjectData.map((p) => {
		if (p.name === 'Phoenix Fitness') {
			return (
				<div>
					<motion.div
						initial={{ x: -500, opacity: 0 }}
						animate={{ x: 0, opacity: [0, 1] }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						<ProjectCard
							key={p.name}
							name={p.name}
							image={p.image}
							repo={p.repo}
							main={p.image_main}
							handleClick={handleClick}
							setProject={setProject}
						/>
					</motion.div>
				</div>
			)
		} else if (p.name === 'DunderList') {
			return (
				<div>
					<motion.div
						initial={{ y: -500, opacity: 0 }}
						animate={{ y: 0, opacity: [0, 1] }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						<ProjectCard
							key={p.name}
							name={p.name}
							image={p.image}
							repo={p.repo}
							main={p.image_main}
							handleClick={handleClick}
							setProject={setProject}
						/>
					</motion.div>
				</div>
			)
		} else if (p.name === 'Dead Ass Weather') {
			return (
				<div>
					<motion.div
						initial={{ x: 500, opacity: 0 }}
						animate={{ x: 0, opacity: [0, 1] }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						<ProjectCard
							key={p.name}
							name={p.name}
							image={p.image}
							repo={p.repo}
							main={p.image_main}
							handleClick={handleClick}
							setProject={setProject}
						/>
					</motion.div>
				</div>
			)
		} else if (p.name === 'How To Train Your Dragon') {
			return (
				<div>
					<motion.div
						initial={{ x: -500, opacity: 0 }}
						animate={{ x: 0, opacity: [0, 1] }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						<ProjectCard
							key={p.name}
							name={p.name}
							image={p.image}
							repo={p.repo}
							main={p.image_main}
							handleClick={handleClick}
							setProject={setProject}
						/>
					</motion.div>
				</div>
			)
		} else if (p.name === 'Guardians of the Banana') {
			return (
				<div>
					<motion.div
						initial={{ y: 500, opacity: 0 }}
						animate={{ y: 0, opacity: [0, 1] }}
						transition={{
							type: 'spring',
							delay: 0,
							duration: 1,
							repeat: false,
						}}
					>
						<ProjectCard
							key={p.name}
							name={p.name}
							image={p.image}
							repo={p.repo}
							main={p.image_main}
							handleClick={handleClick}
							setProject={setProject}
						/>
					</motion.div>
				</div>
			)
		}
	})

	return (
		<div className='mx-5 h-5/6 flex flex-col gap-4 lg:justify-center'>
			{/* <h1 className='text-3xl mt-5 lg:ml-20 2xl:ml-80 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left'>
				<div className='flex flex-row'>{displayStr}</div>
			</h1> */}
			<div className='lg:mx-20 2xl:mx-80 grid md:grid-cols-2 lg:grid-cols-3'>
				{displayProjects}
			</div>

			{modalOpen ? (
				<Modal
					modalOpen={modalOpen}
					handleClose={handleClose}
					project={project}
				/>
			) : null}
		</div>
	)
}

export default Projects
