import React from 'react'

const MetroList = ({ items }) => {
	return (
		<ul>
			{
				items.map((item, i) => (
					<li key={i}><a href={item.link} target='_blank'>{item.label}</a></li>
				))
			}
		</ul>
	)
}

export default MetroList