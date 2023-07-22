import React from 'react'
import SourcesSection from './SourcesSection'

const SourcesSections = ({ sections }) => {
	return (
		<div>
			{
				sections.map((section, i) => (
					<div key={i}>
						<h2>{section.section}</h2>
						<SourcesSection content={section.content} />
					</div>
				))
			}
		</div>
	)
}

export default SourcesSections