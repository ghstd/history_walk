import React from 'react'

const FortressesItem = ({ title, links, videos }) => {
	return (
		<li>
			<h3>{title}</h3>
			<div>
				{
					links.map((link, i) => (
						<div key={i}>
							<a href={link} target='_blank'>
								{
									link.includes('google.com/map')
										? 'карта: google'
										: link.includes('oldmaps.dp.ua')
											? 'карта: oldmaps'
											: `${link.slice(0, 55)} ...`
								}
							</a>
						</div>
					))
				}
			</div>
			<div>
				{
					videos.map((video, i) => (
						<div key={i}>
							< iframe
								src={video}
								title="YouTube video player"
								frameBorder="0"
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