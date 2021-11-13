import Filler from './Filler'

function ProgressBar({ width, percentage, label, color }) {
	return (
		<div className='mb-10 h-1 w-full rounded-lg'>
			<p>{label}</p>
			<Filler width={width} percentage={percentage} color={color} />
		</div>
	)
}

export default ProgressBar
