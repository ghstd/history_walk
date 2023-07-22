import React from 'react'
import SourcesList from './SourcesList'

const SourcesSection = ({ content }) => {
	return (
		<ul>
			{
				content.map((item, i) => (
					<div key={i}>
						<h3>{item.title}</h3>
						<SourcesList links={item.links} />
					</div>
				))
			}
		</ul>
	)
}

export default SourcesSection