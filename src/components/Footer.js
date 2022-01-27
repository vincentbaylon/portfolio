function Footer() {
	const handleClick = () => {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' })
	}

	return (
		<div className='p-3 text-slate-800 flex items-center bg-gray-500'>
			<h1 className='text-md md:text-lg flex-1'>
				© 2022 Vincent Baylon -{' '}
				<a
					className='hover:underline hover:text-sky-500'
					href={'mailto:' + 'vincentbaylon@gmail.com'}
				>
					vincentbaylon@gmail.com
				</a>
			</h1>
			<div className=''>
				<button
					className='hover:underline hover:text-sky-500'
					onClick={handleClick}
				>
					BACK TO TOP
				</button>
			</div>
		</div>
	)
}

export default Footer
