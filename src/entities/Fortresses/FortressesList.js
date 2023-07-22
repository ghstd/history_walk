import React from 'react'
import FortressesItem from './FortressesItem'

const FortressesList = ({ items }) => {
	return (
		<ul>
			{items.map((item, i) => <FortressesItem key={i} {...item} />)}
		</ul>
	)
}

export default FortressesList