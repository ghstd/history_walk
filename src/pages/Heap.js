import React, { useContext, useEffect } from 'react'
import { Context } from '../components/AppContext'
import api from '../api'
import Preloader from '../components/Preloader'
import HeapList from '../entities/Heap/HeapList'

const Heap = () => {
	const { state, actions } = useContext(Context)

	useEffect(() => {
		api.getHeapData()
			.then((data) => actions.addHeapData(data))
			.catch((e) => console.log(e))
	}, [])

	return (
		<div>
			{
				!state.heap.length
					? <Preloader />
					: <HeapList items={state.heap} />
			}
		</div>
	)
}

export default Heap