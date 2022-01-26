import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Main() {
	const navigate = useNavigate()

	const handleClick = () => {}

	return (
		<div className='h-5/6 m-auto py-10 md:py-20 flex flex-col justify-center'>
			<div className=''>
				<h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>
					Hi! I'm Vincent 👋
				</h1>
				<h1 className='font-bold text-2xl md:text-4xl lg:text-6xl'>
					Full-Stack Developer
				</h1>
			</div>
			<div className='flex flex-row gap-1'>
				<span className='mt-10'>
					<button
						className='mb-10 bg-sky-400 text-white text-lg rounded-md py-2 px-4 hover:bg-gray-400 shadow-md'
						onClick={handleClick}
					>
						Projects
					</button>
				</span>
				<span className='mt-10 mx-1'>
					<button
						className='mb-10 bg-sky-400 text-white text-lg rounded-md py-2 px-4 hover:bg-gray-400 shadow-md'
						onClick={handleClick}
					>
						Resume
					</button>
				</span>
			</div>
		</div>
	)
}

export default Main
