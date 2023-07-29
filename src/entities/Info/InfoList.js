import React from 'react'
import './InfoList.css'

const InfoList = ({ list }) => {
	return (
		<ul className='info-list'>
			{list.map((text, i) => <li key={i}>{text}</li>)}
		</ul>
	)
}

export default InfoList