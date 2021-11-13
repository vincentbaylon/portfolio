function ProjectCard({ image, name, main }) {
	return (
		<>
			<div>
				<img
					className='opacity-75 hover:opacity-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg'
					src={main}
					style={{ objectFit: 'cover', width: '100%', height: '100%' }}
				/>
			</div>
		</>
	)
}

export default ProjectCard
