import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import Github from './github.svg'
import LinkedIn from './linkedin.svg'
import Twitter from './twitter.svg'
import Instagram from './instagram.svg'

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const title = 'Contact Me'

	let count = 0
	const displayStr = title.split('').map((e, i) => {
		count += 0.1
		return (
			<>
				<motion.div
					initial={{ scale: 1, opacity: 0 }}
					animate={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
					transition={{
						type: 'spring',
						bounce: 0.5,
						delay: count,
						duration: 0.2,
						repeat: false,
					}}
				>
					<motion.div whileHover={{ scale: 1.5 }}>
						<span className={e === e.toUpperCase() ? 'ml-1' : null} key={i}>
							{e}
						</span>
					</motion.div>
				</motion.div>
			</>
		)
	})

	const handleChange = (e) => {
		const name = e.target.name
		let value = e.target.value

		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (
			formData.name === '' ||
			formData.email === '' ||
			formData.message === ''
		) {
			alert('Missing a required field')
		} else {
			const templateId = 'template_tpmtovc'
			const serviceId = 'service_5gsbwtb'
			const userId = 'user_T0c9HVubIJMZMsHRVIWoj'

			emailjs
				.send(
					serviceId,
					templateId,
					{
						message: formData.message,
						from_name: formData.name,
						reply_to: formData.email,
					},
					userId
				)
				.then(
					function (response) {
						console.log('SUCCESS!', response.status, response.text)
						alert('Message sent')

						setFormData({
							name: '',
							email: '',
							message: '',
						})
					},
					function (error) {
						console.log('FAILED...', error)
						alert('Failed, please try again')
					}
				)
		}
	}

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const handleGithub = () => {
		openInNewTab('https://github.com/vincentbaylon')
	}

	const handleLinkedIn = () => {
		openInNewTab('https://www.linkedin.com/in/vincentbaylon/')
	}

	const handleTwitter = () => {
		openInNewTab('https://twitter.com/vincentbaylon_')
	}

	const handleInstagram = () => {
		openInNewTab('https://www.instagram.com/vincebaylon_/')
	}

	return (
		<>
			<div className='h-5/6 m-5 lg:m-auto lg:items-center flex flex-col md:m-auto md:justify-center lg:justify-center w-full sm:w-11/12 md:w-10/12 lg:w-9/12'>
				<span className='flex items-start w-4/6'>
					<h1 className='my-5 lg:mx-3 2xl:mx-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-left'>
						<div className='flex flex-row'>{displayStr}</div>
					</h1>
				</span>
				<div className='bg-gray-200 lg:h-2/6 lg:w-3/5 flex flex-col items-center justify-center rounded-md mr-10 sm:mr-5 md:mr-5'>
					<form className='w-full'>
						<div className='m-auto mt-5 flex flex-col w-11/12 gap-4 justify-center'>
							<input
								className='p-1 h-10 rounded-md w-11/12'
								id='name'
								name='name'
								onChange={handleChange}
								required
								placeholder='Enter name'
								value={formData.name}
							/>
							<input
								className='p-1 h-10 rounded-md w-11/12'
								id='email'
								name='email'
								onChange={handleChange}
								required
								placeholder='Enter email'
								value={formData.email}
							/>
							<textarea
								className='p-1 rounded-md'
								id='message'
								name='message'
								onChange={handleChange}
								required
								placeholder='Hi there!'
								value={formData.message}
								rows='3'
							/>
							<span className='flex justify-end'>
								<h1 className='mx-2 my-1 text-gray-400'>All fields required</h1>
								<button
									className='mb-10 bg-teal-500 text-white text-md rounded-md py-1 px-4 hover:bg-gray-400'
									type='submit'
									onClick={handleSubmit}
								>
									Submit
								</button>
							</span>
						</div>
					</form>
				</div>
				<div className='flex flex-row justify-evenly w-11/12 md:w-auto lg:w-3/4 mt-5'>
					<img src={Github} onClick={handleGithub} />
					<img src={LinkedIn} onClick={handleLinkedIn} />
					<img src={Twitter} onClick={handleTwitter} />
					<img src={Instagram} onClick={handleInstagram} />
				</div>
			</div>
		</>
	)
}

export default Contact
