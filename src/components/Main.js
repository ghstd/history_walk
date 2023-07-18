import React from 'react'

const Main = ({ children }) => {
	return (
		<div className='container'>
			<div className='main'>
				{children}
			</div>
		</div>
	)
}

export default Main