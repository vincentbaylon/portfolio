import { useState, useEffect } from 'react'

function Filler({ percentage, width, color }) {
	const [value, setValue] = useState(0)
	// const divStyle = {
	// 	background: `${color}`,
	// 	height: '100%',
	// 	borderRadius: 'inherit',
	// 	transition: 'width .2 ease-in',
	// 	width: `${percentage}%`,
	// }
	useEffect(() => {
		setValue(percentage * width)
	})

	const divStyle = {
		backgroundColor: 'rgb(233, 233, 233)',
		borderRadius: '.5rem',
		width: { width },
	}

	const progressStyle = {
		backgroundColor: `${color}`,
		height: '7px',
		borderRadius: '1rem',
		width: `${value}%`,
		transition: '1s ease',
		transitionDelay: '0.1s',
	}

	return (
		<div>
			<div className='mr-10 lg:mr-0' style={divStyle}>
				<div style={progressStyle} />
			</div>
		</div>
	)
}

export default Filler
