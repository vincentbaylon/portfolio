import Filler from './Filler'

function ProgressBar({ percentage, label, color }) {
	return (
		<div className='mb-8 h-2 w-full rounded-lg'>
			<p>{label}</p>
			<Filler percentage={percentage} color={color} />
		</div>
	)
}

export default ProgressBar
