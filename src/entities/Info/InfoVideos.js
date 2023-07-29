import React from 'react'
import './InfoVideos.css'

const InfoVideos = ({ videos }) => {
	return !videos.length ? null : (
		<>
			<h3 className='info-videos-title'>Видео-источники</h3>
			<div className='info-videos'>
				{
					videos.map((video, i) => (
						<div key={i} className='info-video'>
							<div className='info-video-padding'></div>
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
		</>
	)
}

export default InfoVideos