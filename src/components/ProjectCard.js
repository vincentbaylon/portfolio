function ProjectCard({ image, name, main }) {
	return (
		<>
			<div>
				<img
					className='opacity-60 hover:opacity-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg'
					src={main}
					style={{ objectFit: 'contain', width: '100%', height: '100%' }}
				/>
			</div>
		</>
	)
}

export default ProjectCard
