import React from 'react'

const InfoLinks = ({ links }) => {
	return !links.length ? null : (
		<>
			<h3>Источники</h3>
			<div>
				{
					links.map((link, i) => (
						<div key={i}>
							<a href={link} target='_blank'>{link.slice(0, 55)} ...</a>
						</div>
					))
				}
			</div>
		</>
	)
}

export default InfoLinks