import React from 'react'
import utils from '../../utils'
import './FortressesItem.css'

const FortressesItem = ({ title, links, videos }) => {
	document.cookie = 'cookie2=value2; SameSite=None; Secure';
	return (
		<li className='fortresses-item'>
			<h3>{title}</h3>
			<ul>
				{
					links.map((link, i) => (
						<li key={i}>
							<a href={link} target='_blank'>
								{
									link.includes('google.com/map')
										? 'карта: google'
										: link.includes('oldmaps.dp.ua')
											? 'карта: oldmaps'
											: `${utils.parseLink(link)}`
								}
							</a>
						</li>
					))
				}
			</ul>
			<div>
				{
					videos.map((video, i) => (
						<div key={i} className='fortresses-item-video'>
							<div className='fortresses-item-padding'></div>
							< iframe
								src={video}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							/>
						</div>
					))
				}
			</div>
		</li>
	)
}

export default FortressesItem