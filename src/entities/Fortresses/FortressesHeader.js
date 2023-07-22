import React from 'react'
import './FortressesHeader.css'

const FortressesHeader = ({ titleImage, titleVideo }) => {
	return (
		<div className='fortresses'>
			<div>
				<img src={titleImage.includes('https://')
					? titleImage
					: require(`../../assets/images/${titleImage}`)} />
			</div>
			<div>
				< iframe
					src={titleVideo}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		</div>
	)
}

export default FortressesHeader