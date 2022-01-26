import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function About() {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/contact')
	}

	return (
		<div className='h-5/6 flex flex-col py-10 md:py-20'>
			<h1 className='p-2 my-5 w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-amber-500'>
				About Me
			</h1>

			<div className='p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6'>
				<div className='text-lg 2xl:text-xl text-left'>
					<h1 className='text-slate-300'>
						Full-Stack Developer currently located in Las Vegas. Passionate
						about being creative and developing web apps that positively impact
						people's lives. Focused and effective under pressure, meeting
						deadlines and working with clients.
						<br />
						<br />
						I enjoy being creative and using my code as a way to express myself
						and share my craft through technology. I strive to create visually
						appealing designs for users with the user experience always the
						focus.
						<br />
						<br />
						When I'm not coding I enjoy DJing, fitness, playing and watching
						sports, watching the MCU and Star Wars, and rewatching The Office.
						<br />
						<br />
					</h1>
				</div>

				<div className=''>
					<h1 className='text-2xl md:text-4xl font-bold'>Skills</h1>
					<h1 className='p-1 text-xl text-slate-300'>
						React • JavaScript • Ruby on Rails • Ruby • PostgreSQL • SQL • Git •
						Github • HTML5 • CSS3 • TailwindCSS
					</h1>
				</div>
			</div>
		</div>
	)
}

export default About
