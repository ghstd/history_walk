import React, { useContext, useEffect } from 'react'
import { Context } from '../components/AppContext'
import Preloader from '../components/Preloader'
import api from '../api'
import FortressesHeader from '../entities/Fortresses/FortressesHeader'
import FortressesList from '../entities/Fortresses/FortressesList'
import './Fortresses.css'

const Fortresses = () => {
	const { state, actions } = useContext(Context)

	useEffect(() => {
		api.getFortressesData()
			.then((data) => actions.addFortressesData(data))
			.catch((e) => console.log(e))
	}, [])

	return (
		!state.fortresses
			? <Preloader />
			: <div className='fortresses'>
				<FortressesHeader
					titleImage={state.fortresses.titleImage}
					titleVideo={state.fortresses.titleVideo}
				/>
				<FortressesList items={state.fortresses.items} />
			</div>
	)
}

export default Fortresses