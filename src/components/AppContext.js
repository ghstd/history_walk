import React, { useReducer } from 'react'
import { reducer, TYPES } from '../reducer'

export const Context = React.createContext(null)
const initialState = {
	mapCards: [],
	infoCard: null,
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

	const switchTheme = () => dispatch({
		type: TYPES.SWITCH_THEME
	})

	const actions = { addAllCards, addInfoCard, switchTheme }

	return (
		<Context.Provider value={{ state, actions }}>
			{children}
		</Context.Provider>
	)
}

export default AppContext