import { Routes, Route } from 'react-router-dom'

import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Main from './Main'
import NavBar from './NavBar'
import Blog from './Blog'

function App() {
	return (
		<div className='p-0 m-0 h-screen'>
			<NavBar />

			<Routes>
				<Route exact path='/about' element={<About />} />
				<Route exact path='/projects' element={<Projects />} />
				<Route exact path='/blog' element={<Blog />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route exact path='/' element={<Main />} />
			</Routes>
		</div>
	)
}

export default App
