import React, { useState } from 'react'
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InfoSlide from './InfoSlide';

const InfoSlider = ({ images }) => {
	const [swiper, setSwiper] = useState(null)
	const [zoomRatio, setZoomRatio] = useState(1)

	const onSwiperHandler = (swiper) => setSwiper(swiper)

	const fullScreenHandler = () => {
		swiper.el.classList.toggle('full-screen')
	}

	const zoomInHandler = () => {
		swiper.zoom.enable()
		if (zoomRatio < 3) {
			setZoomRatio(zoomRatio + 1)
			swiper.zoom.in(zoomRatio + 1)
		}
	}
	const zoomOutHandler = () => {
		swiper.zoom.disable()
		setZoomRatio(1)
		swiper.zoom.out()
	}

	return (
		<Swiper
			onClick={fullScreenHandler}
			className='info-slider'
			modules={[Navigation, Pagination, Zoom]}
			slidesPerView={1}
			autoHeight={true}
			navigation={true}
			pagination={{
				type: 'fraction'
			}}
			onSwiper={onSwiperHandler}
			onSlideChange={zoomOutHandler}
		>
			{images.map((image, i) => (
				<SwiperSlide key={i}>
					<InfoSlide
						image={image}
						zoomInHandler={zoomInHandler}
						zoomOutHandler={zoomOutHandler}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default InfoSlider