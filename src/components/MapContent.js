import React from 'react'
import MapCards from './MapCards'

const MapContent = ({ cards }) => {
	return (
		<div className='map-content'>
			<MapCards cards={cards} />
		</div>
	)
}

export default MapContent