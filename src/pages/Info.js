import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../api'
import { Context } from '../components/AppContext'
import InfoList from '../entities/Info/InfoList'
import InfoSlider from '../entities/Info/InfoSlider'
import InfoSpecial from '../entities/Info/InfoSpecial'
import InfoLinks from '../entities/Info/InfoLinks'
import InfoVideos from '../entities/Info/InfoVideos'
import './Info.css'

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
						<InfoSpecial special={state.infoCard.specialInfo} />
						<InfoLinks links={state.infoCard.links} />
						<InfoVideos videos={state.infoCard.videos} />
					</div>
				}
				<button onClick={gobackBtnHandler}>go back</button>
			</div>
		</>
	)
}

export default Info