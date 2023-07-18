import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api'
import InfoList from '../components/InfoList'
import InfoSlider from '../components/InfoSlider'
import { Context } from '../components/AppContext'

const Info = () => {
	const { state, actions } = useContext(Context)
	const { title } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		api.getInfoCard(title)
			.then((data) => actions.addInfoCard(data))
			.catch((e) => console.log(e))
	}, [title])

	const gobackBtnHandler = () => {
		navigate('/excursion')
	}

	return (
		<>
			<div>
				<button onClick={gobackBtnHandler}>go back</button>
				{
					state.infoCard && <div className='info'>
						<h2>{state.infoCard.title}</h2>
						<InfoList list={state.infoCard.fullDescription} />
						<InfoSlider images={state.infoCard.gallery} />
					</div>
				}
			</div>
		</>
	)
}

export default Info