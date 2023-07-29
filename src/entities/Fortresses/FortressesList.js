import React from 'react'
import FortressesItem from './FortressesItem'
import './FortressesList.css'

const FortressesList = ({ items }) => {
	return (
		<ul className='fortresses-list'>
			{items.map((item, i) => <FortressesItem key={i} {...item} />)}
		</ul>
	)
}

export default FortressesList