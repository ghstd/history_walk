import React from 'react'

const InfoVideos = ({ videos }) => {
	return !videos.length ? null : (
		<>
			<h3>Видео-источники</h3>
			<div>
				{
					videos.map((video, i) => (
						<div key={i}>
							< iframe
								width="560"
								height="315"
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
		</>
	)
}

export default InfoVideos