import React, { useState } from 'react'
import './InfoSlide.css'
import { useNavigate } from 'react-router-dom'

const InfoSlide = ({ image, zoomInHandler, zoomOutHandler, fullscreen }) => {
	const [isMouseIn, setIsMouseIn] = useState(false)
	const navigate = useNavigate()

	const mouseWheelHandler = (e) => {
		if (fullscreen && isMouseIn && e.deltaY === -100) {
			zoomInHandler()
			return
		}

		if (fullscreen && isMouseIn && e.deltaY === 100) {
			zoomOutHandler()
			return
		}
	}

	const mouseEnterHandler = () => setIsMouseIn(true)
	const mouseLeaveHandler = () => setIsMouseIn(false)

	const gobackBtnHandler = () => {
		navigate(-1)
	}

	return (
		<div
			className={`info-slide ${fullscreen ? 'swiper-zoom-container full-screen' : ''}`}
			onWheel={mouseWheelHandler}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<img src={image.includes('https://') ? image : require(`../../assets/images/${image}`)} />
			<div>
				{fullscreen && <button onClick={gobackBtnHandler}>go back</button>}
				<span>{image.split('.')[0].split('/')[1]}</span>
				<a
					href={`https://t.me/share/url?url=${require(`../../assets/images/${image}`)
						}&text=${image.split('.')[0].split('/')[1]
						}`}
				>share in tg</a>
			</div>
		</div>
	)
}

export default InfoSlide