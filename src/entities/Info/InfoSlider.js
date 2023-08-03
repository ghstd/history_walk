import React from 'react'
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InfoSlide from './InfoSlide';
import './InfoSlider.css'

const InfoSlider = ({ images, fullscreen = false }) => {

	return (
		<Swiper
			className={`info-slider ${fullscreen ? 'full-screen' : ''}`}
			modules={[Navigation, Pagination, Zoom]}
			slidesPerView={1}
			spaceBetween={70}
			navigation={true}
			pagination={{
				type: 'fraction'
			}}
			allowTouchMove={!fullscreen}
		>
			{images.map((image, i) => {
				return (
					<SwiperSlide key={i}>
						<InfoSlide
							image={image}
							fullscreen={fullscreen}
						/>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default InfoSlider