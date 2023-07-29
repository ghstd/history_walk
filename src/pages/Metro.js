import React, { useContext, useEffect } from 'react'
import { Context } from '../components/AppContext'
import api from '../api'
import MetroList from '../entities/Metro/MetroList'
import Preloader from '../components/Preloader'
import './Metro.css'

const Metro = () => {
	const { state, actions } = useContext(Context)

	useEffect(() => {
		api.getMetroData()
			.then((data) => actions.addMetroData(data))
			.catch((e) => console.log(e))
	}, [])

	return (
		<div className='metro'>
			{
				!state.metro.length
					? <Preloader />
					: <MetroList items={state.metro} />
			}
		</div>
	)
}

export default Metro