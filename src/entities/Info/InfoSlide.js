import React, { useState } from 'react'
import './InfoSlide.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { LiaArrowLeftSolid } from 'react-icons/lia'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { LiaTelegram } from 'react-icons/lia'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

const InfoSlide = ({ image, fullscreen }) => {
	const [imageIsLoaded, setImageIsLoaded] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	const fullscreenBtnHandler = () => {
		navigate(`${location.pathname}?fullscreen`)
	}

	const gobackBtnHandler = () => {
		navigate(location.pathname)
	}

	return (
		<div className={`info-slide ${fullscreen ? 'full-screen' : ''}`}>
			<div className='info-slide-controls'>
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
			<TransformWrapper wheel={{ step: 1.5 }} disabled={!fullscreen}>
				<TransformComponent>
					<div className='info-slide-img'>
						<img
							onLoad={() => setImageIsLoaded(true)}
							src={image.includes('https://') ? image : require(`../../assets/images/${image}`)} />
					</div>
				</TransformComponent>
			</TransformWrapper>
			<div className='info-slide-title'>
				<span>{image.split('.')[0].split('/')[1]}</span>
			</div>
		</div>
	)
}

export default InfoSlide