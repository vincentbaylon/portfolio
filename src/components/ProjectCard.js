function ProjectCard({ name, url, img, desc, tools, live, repo, children }) {
	return (
		<div className='flex flex-col items-center text-center'>
			<h1 className='p-2 text-2xl font-semibold underline decoration-sky-500'>
				{name}
			</h1>
			{children}
			<h1 className='p-2 text-slate-300 text-lg'>{desc}</h1>
			<h1 className='p-2 text-amber-500 text-lg'>{tools}</h1>
			<div className='flex flex-row gap-5'>
				<a
					className='text-sky-500 px-2 font-semibold hover:underline hover:decoration-amber-500 text-lg'
					href={url}
					target='_blank'
					rel='noreferrer noopener'
				>
					LIVE SITE
				</a>
				<a
					className='text-sky-500 font-semibold hover:underline hover:decoration-amber-500 text-lg'
					href={repo}
					target='_blank'
					rel='noreferrer noopener'
				>
					GITHUB
				</a>
			</div>
		</div>
	)
}

export default ProjectCard
