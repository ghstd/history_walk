import React from 'react'
import ExcursionCards from './ExcursionCards'
import './ExcursionContent.css'

const ExcursionContent = ({ cards }) => {
	return (
		<div className='excursion-content'>
			<ExcursionCards cards={cards} />
		</div>
	)
}

export default ExcursionContent