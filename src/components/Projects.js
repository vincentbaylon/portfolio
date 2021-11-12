import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'

function Projects() {
	const displayProjects = ProjectData.map((p) => {
		return (
			<div>
				<ProjectCard
					key={p.name}
					name={p.name}
					image={p.image}
					main={p.image_main}
				/>
			</div>
		)
	})

	return (
		<div className='mx-5 h-5/6 flex flex-col gap-4 lg:justify-center'>
			<h1 className='text-3xl lg:ml-20 2xl:ml-80 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left'>
				Projects
			</h1>
			<div className='gap-4 lg:mx-20 2xl:mx-80 grid md:grid-cols-2 lg:grid-cols-3'>
				{displayProjects}
			</div>
		</div>
	)
}

export default Projects
