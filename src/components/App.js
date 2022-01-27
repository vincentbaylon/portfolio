import { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import FadeIn from 'react-fade-in'

import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Main from './Main'
import NavBar from './NavBar'
import Blog from './Blog'
import Footer from './Footer'

function App() {
	const projectRef = useRef(null)
	const handleProjectClick = () => {
		projectRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<div
				id='top'
				className='p-2 md:p-5 pt-0 m-0 h-full min-h-screen flex flex-col items-center justify-center bg-zinc-800 text-white'
			>
				<div className='max-w-full md:max-w-6xl'>
					<NavBar />

					<Main handleProjectClick={handleProjectClick} />
					<FadeIn>
						<About />
					</FadeIn>

					<div ref={projectRef}>
						<FadeIn>
							<Projects />
						</FadeIn>
					</div>
					<FadeIn>
						<Contact />
					</FadeIn>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</>
	)
}

export default App
