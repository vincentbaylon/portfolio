function ProjectCard({ image, name, main, repo, handleClick, setProject }) {
	const projectClick = () => {
		setProject({ image: image, name: name, main: main, repo: repo })
		handleClick()
	}

	return (
		<>
			<div className='group flex justify-center items-center'>
				<button
					className='group h-16 w-16 rounded-full absolute hidden group-hover:block bg-teal-500 z-50 justify-center'
					onClick={projectClick}
				>
					<h1 className='text-md font-medium text-white'>View Project</h1>
				</button>
				<img
					className='opacity-60 hover:opacity-100 transition duration-500 ease-in-out transform hover:shadow-lg group-hover:block'
					src={main}
					style={{ objectFit: 'cover', width: '100%', height: '100%' }}
					onClick={projectClick}
				/>
			</div>
		</>
	)
}

export default ProjectCard
