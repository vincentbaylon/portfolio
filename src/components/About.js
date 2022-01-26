import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function About() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/contact')
	}

	return (
		<div className='h-5/6 flex flex-col py-10 md:py-20'>
			<h1 className='p-2 my-5 w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-gray-300'>
				About Me
			</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6'>
				<div className='text-lg 2xl:text-2xl text-left'>
					<p>
						Full-Stack Developer currently located in Las Vegas. Passionate
						about being creative and developing web apps that positively impact
						people's lives. Focused and effective under pressure, meeting
						deadlines and working with clients.
						<br />
						<br />
						Hobbies are DJing, mountain biking, fitness and playing sports.
						Faithful fan of SF 49ers, SF Giants and LA Lakers. Enjoy watching
						boxing, MMA, MCU, The Office and Star Wars (Darth Bane needs a
						trilogy!).
						<br />
						<br />
					</p>
				</div>

				<div className=''>
					<h1 className='text-2xl font-bold'>Skills</h1>
					<h1 className='text-xl'>
						React • JavaScript • Ruby on Rails • Ruby • PostgreSQL • SQL • Git •
						Github • HTML5 • CSS3 • TailwindCSS
					</h1>
				</div>
			</div>
		</div>
	)
}

export default About
