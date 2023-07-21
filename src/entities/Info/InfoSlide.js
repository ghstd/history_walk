import React, { useState } from 'react'
import './InfoSlide.css'

const InfoSlide = ({ image, isFullScreen, zoomInHandler, zoomOutHandler }) => {
	const [isMouseIn, setIsMouseIn] = useState(false)

	const mouseWheelHandler = (e) => {
		if (isFullScreen && isMouseIn && e.deltaY === -100) {
			zoomInHandler()
			return
		}

		if (isFullScreen && isMouseIn && e.deltaY === 100) {
			zoomOutHandler()
			return
		}
	}

	const mouseEnterHandler = () => setIsMouseIn(true)
	const mouseLeaveHandler = () => setIsMouseIn(false)

	return (
		<div
			className='info-slide swiper-zoom-container'
			onWheel={mouseWheelHandler}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<img src={image.includes('https://') ? image : require(`../../assets/images/${image}`)} />
			<h3>{image.split('.')[0].split('/')[1]}</h3>
		</div>
	)
}

export default InfoSlide