import { useState } from 'react'
import { motion } from 'framer-motion'

import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'
import Modal from './Modal'

function Projects() {
	return (
		<div className='py-10 md:py-20 flex flex-col gap-2'>
			<h1 className='p-2 my-5 w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-l from-gray-300 text-right'>
				Projects
			</h1>
		</div>
	)
}

export default Projects
