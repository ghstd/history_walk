import React from 'react'
import './MetroList.css'

const MetroList = ({ items }) => {
	return (
		<ul className='metro-list'>
			{
				items.map((item, i) => (
					<li key={i}><a href={item.link} target='_blank'>{item.label}</a></li>
				))
			}
		</ul>
	)
}

export default MetroList