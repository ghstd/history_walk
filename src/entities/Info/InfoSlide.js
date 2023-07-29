import React, { useState } from 'react'
import './InfoSlide.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { LiaTelegram } from 'react-icons/lia'

const InfoSlide = ({ image, zoomInHandler, zoomOutHandler, fullscreen }) => {
	const [isMouseIn, setIsMouseIn] = useState(false)
	const [isZooming, setIsZooming] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	const mouseWheelHandler = (e) => {
		if (fullscreen && isMouseIn && e.deltaY === -100) {
			setIsZooming(true)
			zoomInHandler()
			return
		}

		if (fullscreen && isMouseIn && e.deltaY === 100) {
			setIsZooming(false)
			zoomOutHandler()
			return
		}
	}

	const mouseEnterHandler = () => setIsMouseIn(true)
	const mouseLeaveHandler = () => setIsMouseIn(false)

	const noop = () => { }

	const fullscreenBtnHandler = () => {
		navigate(`${location.pathname}?fullscreen`)
	}

	const gobackBtnHandler = () => {
		navigate(location.pathname)
	}

	return (
		<div
			className={`info-slide ${fullscreen ? 'swiper-zoom-container full-screen' : ''}`}
			onWheel={mouseWheelHandler}
			onMouseEnter={fullscreen ? mouseEnterHandler : noop}
			onMouseLeave={fullscreen ? mouseLeaveHandler : noop}
		>

			<div className='info-slide-img'>
				<img src={image.includes('https://') ? image : require(`../../assets/images/${image}`)} />
			</div>
			<div className='info-slide-title'>
				<span>{image.split('.')[0].split('/')[1]}</span>
			</div>
			{
				isZooming
					? null
					: <div className='info-slide-controls'>
						{
							!fullscreen &&
							<AiOutlineFullscreen
								className='info-slide-fullscreen-btn'
								onClick={fullscreenBtnHandler}
							/>
						}
						{
							fullscreen &&
							<LiaArrowLeftSolid className='info-slide-goback' onClick={gobackBtnHandler} />
						}
						<a className='info-slide-share-link'
							href={`https://t.me/share/url?url=${require(`../../assets/images/${image}`)
								}&text=${image.split('.')[0].split('/')[1]
								}`}
						>
							<LiaTelegram className={`info-slide-share-icon ${fullscreen ? 'swiper-zoom-container full-screen' : ''}`} />
						</a>
					</div>
			}
		</div>
	)
}

export default InfoSlide