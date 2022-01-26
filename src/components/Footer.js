import { HashLink as Link } from 'react-router-hash-link'

function Footer() {
	return (
		<div className='p-5 text-slate-800 flex items-center bg-gray-500'>
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
				<Link className='hover:underline hover:text-sky-500' to='/#top'>
					BACK TO TOP
				</Link>
			</div>
		</div>
	)
}

export default Footer
