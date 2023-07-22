import React, { useContext, useEffect } from 'react'
import api from '../api'
import { Context } from '../components/AppContext'
import Map from '../components/Map'
import ExcursionContent from '../entities/Excursion/ExcursionContent'

const Excursion = () => {
	const { state, actions } = useContext(Context)

	useEffect(() => {
		api.getExcursionData()
			.then((data) => actions.addAllCards(data))
			.catch((e) => console.log(e))
	}, [])

	return (
		<>
			<Map cards={state.excursionCards} />
			<ExcursionContent cards={state.excursionCards} />
		</>
	)
}

export default Excursion