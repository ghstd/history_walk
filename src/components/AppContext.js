import React, { useReducer } from 'react'
import { reducer, TYPES } from '../reducer'

export const Context = React.createContext(null)
const initialState = {
	excursionCards: [],
	infoCard: null,
	fortresses: null,
	metro: [],
	heap: [],
	sources: [],
	theme: 'light'
}

const AppContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const addAllCards = (cards) => dispatch({
		type: TYPES.ADD_ALL_CARDS,
		payload: { cards }
	})

	const addInfoCard = (card) => dispatch({
		type: TYPES.ADD_INFO_CARD,
		payload: { card }
	})

	const addFortressesData = (data) => dispatch({
		type: TYPES.ADD_FORTRESSES_DATA,
		payload: { data }
	})

	const addMetroData = (data) => dispatch({
		type: TYPES.ADD_METRO_DATA,
		payload: { data }
	})

	const addHeapData = (data) => dispatch({
		type: TYPES.ADD_HEAP_DATA,
		payload: { data }
	})

	const addSourcesData = (data) => dispatch({
		type: TYPES.ADD_SOURCES_DATA,
		payload: { data }
	})

	const switchTheme = () => dispatch({
		type: TYPES.SWITCH_THEME
	})

	const actions = {
		addAllCards,
		addInfoCard,
		addFortressesData,
		addMetroData,
		addHeapData,
		addSourcesData,
		switchTheme
	}

	return (
		<Context.Provider value={{ state, actions }}>
			{children}
		</Context.Provider>
	)
}

export default AppContext