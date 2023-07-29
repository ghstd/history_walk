import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import api from '../api'
import { Context } from '../components/AppContext'
import InfoList from '../entities/Info/InfoList'
import InfoSlider from '../entities/Info/InfoSlider'
import InfoSpecial from '../entities/Info/InfoSpecial'
import InfoLinks from '../entities/Info/InfoLinks'
import InfoVideos from '../entities/Info/InfoVideos'
import Preloader from '../components/Preloader'
import { LuArrowBigLeft } from 'react-icons/lu'
import './Info.css'

const Info = () => {
	const { state, actions } = useContext(Context)
	const { title } = useParams()
	const navigate = useNavigate()
	const location = useLocation()

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
			{
				!state.infoCard
					? <Preloader />
					: location.search === '?fullscreen'
						? <InfoSlider images={state.infoCard.gallery} fullscreen />
						: <div className='info'>
							<LuArrowBigLeft className='info-goback-btn-top' onClick={gobackBtnHandler} />
							<h2 className='info-title'>{state.infoCard.title}</h2>
							<InfoList list={state.infoCard.fullDescription} />
							<InfoSlider images={state.infoCard.gallery} />
							<InfoSpecial special={state.infoCard.specialInfo} />
							<InfoLinks links={state.infoCard.links} />
							<InfoVideos videos={state.infoCard.videos} />
							<LuArrowBigLeft className='info-goback-btn-bottom' onClick={gobackBtnHandler} />
						</div>
			}
		</>
	)
}

export default Info