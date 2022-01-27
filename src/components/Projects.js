import cruelty from './assets/crueltyfreerecipes.png'
import phoenix from './assets/phoenixfitness.png'
import ProjectCard from './ProjectCard'

function Projects() {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const handleCruelty = () => {
		openInNewTab('https://crueltyfree.recipes/')
	}

	const handlePhoenix = () => {
		openInNewTab('https://phoenix-fitness.herokuapp.com/')
	}

	return (
		<div className='py-10 md:py-20 flex flex-col gap-2'>
			<h1
				id='projects'
				className='p-2 my-5 w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-500 bg-gradient-to-l from-slate-700 text-right'
			>
				Projects
			</h1>
			<div className='p-1 grid flex-col grid-cols-1 xl:grid-cols-2 gap-10'>
				<div className='flex flex-col items-center text-center'>
					<h1 className='p-2 text-2xl font-semibold underline decoration-sky-500'>
						Cruelty-Free Recipes
					</h1>
					<img
						className='md:w-1/2 py-1 hover:cursor-pointer hover:border-2'
						src={cruelty}
						alt='Cruelty free recipes screenshot'
						onClick={handleCruelty}
					/>
					<h1 className='p-2 text-slate-300 text-lg'>
						A plant-based recipe site with rating and commenting features for
						Vegans or those looking to incorporate more plant-based meals into
						their diets.
					</h1>
					<h1 className='p-2 text-amber-500 text-lg'>
						React • Ruby on Rails • TailwindCSS • PostgreSQL • Framer Motion
					</h1>
					<div className='flex flex-row gap-5'>
						<a
							className='text-sky-500 px-2 font-semibold hover:underline text-lg'
							href='https://crueltyfree.recipes/'
							target='_blank'
							rel='noreferrer noopener'
						>
							Live Site
						</a>
						<a
							className='text-sky-500 font-semibold hover:underline text-lg'
							href='https://github.com/vincentbaylon/cruelty-free-recipes'
							target='_blank'
							rel='noreferrer noopener'
						>
							GitHub
						</a>
					</div>
				</div>

				<div className='flex flex-col items-center text-center'>
					<h1 className='p-2 text-2xl font-semibold underline decoration-sky-500'>
						Phoenix Fitness
					</h1>
					<img
						className='md:w-1/2 py-1 hover:cursor-pointer hover:border-2'
						src={phoenix}
						alt='Phoenix fitness screenshot'
						onClick={handlePhoenix}
					/>
					<h1 className='p-2 text-slate-300 text-lg'>
						A workout and body progress tracker to assist in achieving your
						fitness goals.
					</h1>
					<h1 className='p-2 text-amber-500 text-lg'>
						React • Ruby on Rails • MUI • PostgreSQL • Firebase
					</h1>
					<div className='flex flex-row gap-5'>
						<a
							className='text-sky-500 px-2 font-semibold hover:underline text-lg'
							href='https://phoenix-fitness.herokuapp.com/'
							target='_blank'
							rel='noreferrer noopener'
						>
							Live Site
						</a>
						<a
							className='text-sky-500 font-semibold hover:underline text-lg'
							href='https://github.com/vincentbaylon/phoenix'
							target='_blank'
							rel='noreferrer noopener'
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
