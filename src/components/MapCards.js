import React from 'react'
import MapCard from './MapCard'

const MapCards = ({ cards }) => {

	return (
		<ul className='map-cards'>
			{cards.map((card) => {
				return <MapCard key={card.id} {...card} />
			})}
		</ul>
	)
}

export default MapCards