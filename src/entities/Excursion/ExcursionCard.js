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
			<div>{id}</div>
			<div className='excursion-card__body'>
				<h3 className='excursion-card__item'>{title}</h3>
				<div className='excursion-card__item'>
					<img src={titleImage.includes('https://') ? titleImage : require(`../../assets/images/${titleImage}`)} />
				</div>
			</div>
			<p>{shortDescription}</p>
		</li>
	)
}

export default ExcursionCard