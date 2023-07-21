import React from 'react'

const InfoList = ({ list }) => {
	return (
		<ul>
			{list.map((text, i) => <li key={i}>{text}</li>)}
		</ul>
	)
}

export default InfoList