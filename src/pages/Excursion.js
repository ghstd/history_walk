import React, { useContext, useEffect } from 'react'
import api from '../api'
import { Context } from '../components/AppContext'
import Map from '../components/Map'
import MapContent from '../components/MapContent'

const Excursion = () => {
	const { state, actions } = useContext(Context)

	useEffect(() => {
		api.getAllData()
			.then((data) => actions.addAllCards(data))
			.catch((e) => console.log(e))
	}, [])

	return (
		<>
			<Map cards={state.mapCards} />
			<MapContent cards={state.mapCards} />
		</>
	)
}

export default Excursion