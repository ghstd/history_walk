import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<div className='container'>
			<div className='footer'>
				<span>year {new Date().getFullYear()}</span>
			</div>
		</div>
	)
}

export default Footer