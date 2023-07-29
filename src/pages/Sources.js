import React, { useContext, useEffect } from 'react'
import { Context } from '../components/AppContext'
import api from '../api'
import Preloader from '../components/Preloader'
import SourcesSections from '../entities/Sources/SourcesSections'
import './Sources.css'

const Sources = () => {
	const { state, actions } = useContext(Context)

	useEffect(() => {
		api.getSourcesData()
			.then((data) => actions.addSourcesData(data))
			.catch((e) => console.log(e))
	}, [])

	return (
		<div className='sources'>
			{
				!state.sources.length
					? <Preloader />
					: <SourcesSections sections={state.sources} />
			}
		</div>
	)
}

export default Sources