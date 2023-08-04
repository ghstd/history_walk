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
													? <span><span className='heap-link-map'>карта:</span> google</span>
													: link.includes('oldmaps.dp.ua')
														? <span><span className='heap-link-map'>карта:</span> oldmaps</span>
														: link.includes('mapper.acme.com')
															? <span><span className='heap-link-map'>карта:</span> acme</span>
															: link.includes('https://www.youtube')
																? <span><span className='heap-link-video'>видео:</span> youtube</span>
																: link.includes('https://youtu.be')
																	? <span><span className='heap-link-video'>видео:</span> youtube</span>
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