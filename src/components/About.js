import { useNavigate } from 'react-router-dom'

import ProgressBar from './ProgressBar'

function About() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/contact')
	}

	return (
		<div className='h-5/6 m-5 lg:m-auto flex flex-col md:m-auto md:justify-center lg:justify-center w-full sm:w-11/12 md:w-10/12 lg:w-9/12'>
			<h1 className='my-5 lg:mx-10 text-2xl md:text-4xl lg:text-5xl font-semibold'>
				Get To Know Me
			</h1>
			<div className='lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center'>
				<div className='mr-10 text-lg 2xl:text-2xl text-left'>
					<p>
						Full-Stack Developer currently located in Las Vegas. Passionate
						about being creative and developing web apps that positively impact
						people's lives. Focused and effective under pressure, meeting
						deadlines and working with clients.
						<br />
						<br />
						Hobbies are DJing, mountain biking, fitness and playing sports.
						Faithful fan of SF 49ers, SF Giants and LA Lakers. Enjoys watching
						boxing, MMA, MCU, The Office and Star Wars (Darth Bane deserves a
						trilogy!).
						<br />
						<br />
					</p>
					<button
						className='mb-10 border-2 bg-indigo-500 text-white text-lg rounded-md py-2 px-4 hover:bg-gray-400'
						onClick={handleClick}
					>
						Contact me
					</button>
				</div>

				<div className='lg:ml-10 w-full'>
					<ProgressBar
						width='100'
						percentage='.80'
						label='React'
						color='cyan'
					/>
					<ProgressBar width='100' percentage='.60' label='Rails' color='red' />
					<ProgressBar
						width='100'
						percentage='.70'
						label='JavaScript'
						color='orange'
					/>
					<ProgressBar
						width='100'
						percentage='.50'
						label='Ruby'
						color='indigo'
					/>
				</div>
			</div>
		</div>
	)
}

export default About