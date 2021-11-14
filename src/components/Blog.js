import { useEffect, useState } from 'react'

import BlogCard from './BlogCard'

function Blog() {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch('https://dev.to/api/articles?username=vincentbaylon')
			.then((res) => res.json())
			.then(setBlogs)
	}, [])

	const displayBlogs = blogs?.map((b) => {
		return <BlogCard key={b.id} props={b} />
	})

	return (
		<div className='mx-5 flex w-auto flex-row justify-center'>
			<div className='flex flex-col'>{displayBlogs}</div>
		</div>
	)
}

export default Blog
