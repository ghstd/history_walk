import React from 'react'

const SourcesList = ({ links }) => {
	return (
		<ul>
			{
				links.map((item, i) => (
					<li key={i}><a href={item.link} target='_blank'>{item.label}</a></li>
				))
			}
		</ul>
	)
}

export default SourcesList