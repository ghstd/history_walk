import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ExcursionCard.css'

const ExcursionCard = ({ id, title, shortDescription, titleImage }) => {
	const navigate = useNavigate()

	const cardClickHandler = () => {
		navigate(`/excursion/${title}`)
	}

	return (
		<li onClick={cardClickHandler} className='excursion-card' data-id={id}>
			<h3 className='excursion-card__title'>{id}. {title}</h3>
			<div className='excursion-card__img'>
				<div className='excursion-card__padding'></div>
				<img src={titleImage.includes('https://') ? titleImage : require(`../../assets/images/${titleImage}`)} />
			</div>
			<p className='excursion-card__text'>{shortDescription}</p>
		</li>
	)
}

export default ExcursionCard