export const TYPES = {
	ADD_ALL_CARDS: 'ADD_ALL_CARDS',
	ADD_INFO_CARD: 'ADD_INFO_CARD',
	SWITCH_THEME: 'SWITCH_THEME'
}

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case TYPES.ADD_ALL_CARDS:
			return { ...state, mapCards: payload.cards }
		case TYPES.ADD_INFO_CARD:
			return { ...state, infoCard: payload.card }
		case TYPES.SWITCH_THEME:
			return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
		default:
			return state
	}
}