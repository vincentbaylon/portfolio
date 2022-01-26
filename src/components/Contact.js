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
			<div className='h-5/6 flex flex-col py-10 md:py-20'>
				<h1 className='p-2 my-5 w-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-gray-300'>
					Contact Me
				</h1>

				<div className='flex flex-col items-center justify-center w-full'>
					<div className='w-full md:w-1/2 bg-gray-200 p-2 rounded-md'>
						<form className='w-full'>
							<div className='mt-5 flex flex-col gap-4 justify-center'>
								<input
									className='p-1 h-10 rounded-md'
									id='name'
									name='name'
									onChange={handleChange}
									required
									placeholder='Enter your name*'
									value={formData.name}
								/>
								<input
									className='p-1 h-10 rounded-md'
									id='email'
									name='email'
									onChange={handleChange}
									required
									placeholder='Enter your email*'
									value={formData.email}
								/>
								<textarea
									className='p-1 rounded-md'
									id='message'
									name='message'
									onChange={handleChange}
									required
									placeholder='Hi there!*'
									value={formData.message}
									rows='3'
								/>
								<span className='flex justify-end'>
									<h1 className='mx-2 my-1 text-gray-400'>
										*All fields required
									</h1>
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
					<div className='flex flex-row justify-evenly mt-5 w-1/2 z-50'>
						<img
							className='hover:cursor-pointer'
							src={Github}
							onClick={handleGithub}
							alt='Github logo'
						/>
						<img
							className='hover:cursor-pointer'
							src={LinkedIn}
							onClick={handleLinkedIn}
							alt='Linkedin logo'
						/>
						<img
							className='hover:cursor-pointer'
							src={Twitter}
							onClick={handleTwitter}
							alt='Twitter logo'
						/>
						<img
							className='hover:cursor-pointer'
							src={Instagram}
							onClick={handleInstagram}
							alt='Instagram logo'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
