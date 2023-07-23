import React from 'react'
import utils from '../../utils'

const HeapList = ({ items }) => {
	return (
		<ul>
			{
				items.map((item, i) => (
					<li key={i}>
						<h3>{item.label}</h3>
						<ul>
							{
								item.links.map((link, i) => (
									<li key={i}>
										<a href={link} target='_blank'>
											{
												link.includes('google.com/map')
													? 'карта: google'
													: link.includes('oldmaps.dp.ua')
														? 'карта: oldmaps'
														: link.includes('mapper.acme.com')
															? 'карта: acme'
															: `${utils.parseLink(link)}`
											}
										</a>
									</li>
								))
							}
						</ul>
					</li>
				))
			}
		</ul>
	)
}

export default HeapList