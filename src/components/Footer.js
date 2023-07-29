import React from 'react'
import './Footer.css'

const Footer = () => {

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-year'>{new Date().getFullYear()}</div>
			</div>
		</footer>
	)
}

export default Footer