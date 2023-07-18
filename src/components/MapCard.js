import React from 'react'
import { useNavigate } from 'react-router-dom'

const MapCard = ({ id, title, shortDescription, titleImage }) => {
	const navigate = useNavigate()

	const cardClickHandler = () => {
		navigate(`/excursion/${title}`)
	}

	return (
		<li onClick={cardClickHandler} className='map-card' data-id={id}>
			<div>{id}</div>
			<div className='map-card__body'>
				<h3 className='map-card__item'>{title}</h3>
				<div className='map-card__item'>
					<img src={titleImage.includes('https://') ? titleImage : require(`../assets/images/${titleImage}`)} />
				</div>
			</div>
			<p>{shortDescription}</p>
		</li>
	)
}

export default MapCard