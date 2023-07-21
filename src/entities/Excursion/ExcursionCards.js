import React from 'react'
import ExcursionCard from './ExcursionCard'
import './ExcursionCards.css'

const ExcursionCards = ({ cards }) => {

	return (
		<ul className='excursion-cards'>
			{cards.map((card) => {
				return <ExcursionCard key={card.id} {...card} />
			})}
		</ul>
	)
}

export default ExcursionCards