import React from 'react'
import './SourcesList.css'

const SourcesList = ({ links }) => {
	return (
		<ul className='sources-list'>
			{
				links.map((item, i) => (
					<li key={i}><a href={item.link} target='_blank'>{item.label}</a></li>
				))
			}
		</ul>
	)
}

export default SourcesList