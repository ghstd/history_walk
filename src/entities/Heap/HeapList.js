import React from 'react'
import utils from '../../utils'
import './HeapList.css'

const HeapList = ({ items }) => {
	return (
		<ul className='heap-list'>
			{
				items.map((item, i) => (
					<li key={i}>
						<h3>{item.label}</h3>
						<ul className='heap-list-links'>
							{
								item.links.map((link, i) => (
									<li key={i}>
										<a href={link} target='_blank'>
											{
												link.includes('google.com/map')
													? `${<span className='heap-link-map'>карта:</span>} google`
													: link.includes('oldmaps.dp.ua')
														? `${<span className='heap-link-map'>карта:</span>} oldmaps`
														: link.includes('mapper.acme.com')
															? `${<span className='heap-link-map'>карта:</span>} acme`
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