import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<header className='p-1 w-full h-12 flex items-center font-semibold text-2xl'>
			<Link
				className='mx-2 text-2xl font-medium hover:text-indigo-500 flex-1'
				to='/'
			>
				VB
			</Link>
			<Link className='mx-5 text-base font-normal hover:text-indigo-500' to='/'>
				MAIN
			</Link>
			<Link
				className='mx-5 text-base font-normal hover:text-indigo-500'
				to='/about'
			>
				ABOUT
			</Link>
			<Link
				className='mx-5 text-base font-normal hover:text-indigo-500'
				to='/projects'
			>
				PROJECTS
			</Link>
			<Link
				className='mx-5 text-base font-normal hover:text-indigo-500'
				to='/contact'
			>
				CONTACT
			</Link>
		</header>
	)
}

export default NavBar
