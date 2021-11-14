function BlogCard({ props }) {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const handleClick = () => {
		openInNewTab(props.url)
	}

	return (
		<div className='my-10'>
			{console.log(props)}
			<h1 className='text-2xl font-bold'>{props.title}</h1>
			<h1 className='text-gray-500'>{props.readable_publish_date}</h1>
			<p className='font-semibold'>{props.description}</p>
			<span className='flex justify-end'>
				<button
					className='text-teal-500 font-semibold hover:text-gray-500'
					onClick={handleClick}
				>
					Read more
				</button>
			</span>
		</div>
	)
}

export default BlogCard
