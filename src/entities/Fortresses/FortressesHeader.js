import React from 'react'
import './FortressesHeader.css'

const FortressesHeader = ({ titleImage, titleVideo }) => {
	return (
		<div className='fortresses-header'>
			<img src={titleImage.includes('https://')
				? titleImage
				: require(`../../assets/images/${titleImage}`)} />
			<div className='fortresses-header-video'>
				<div className='fortresses-header-padding'></div>
				< iframe
					src={titleVideo}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</div>
		</div>
	)
}

export default FortressesHeader