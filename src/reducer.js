export const TYPES = {
	ADD_ALL_CARDS: 'ADD_ALL_CARDS',
	ADD_INFO_CARD: 'ADD_INFO_CARD',
	ADD_FORTRESSES_DATA: 'ADD_FORTRESSES_DATA',
	ADD_METRO_DATA: 'ADD_METRO_DATA',
	ADD_HEAP_DATA: 'ADD_HEAP_DATA',
	ADD_SOURCES_DATA: 'ADD_SOURCES_DATA',
	SWITCH_THEME: 'SWITCH_THEME'
}

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case TYPES.ADD_ALL_CARDS:
			return { ...state, excursionCards: payload.cards }
		case TYPES.ADD_INFO_CARD:
			return { ...state, infoCard: payload.card }
		case TYPES.ADD_FORTRESSES_DATA:
			return { ...state, fortresses: payload.data }
		case TYPES.ADD_METRO_DATA:
			return { ...state, metro: payload.data }
		case TYPES.ADD_HEAP_DATA:
			return { ...state, heap: payload.data }
		case TYPES.ADD_SOURCES_DATA:
			return { ...state, sources: payload.data }
		case TYPES.SWITCH_THEME:
			return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
		default:
			return state
	}
}