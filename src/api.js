import excursionData from './db/excursion.json'
import fortressesData from './db/fortresses.json'
import metroData from './db/metro.json'
import heapData from './db/heap.json'
import sourcesData from './db/sources.json'

const getExcursionData = () => {
	return Promise.resolve(excursionData)
}

const getInfoCard = (title) => {
	return Promise.resolve(excursionData.find((item) => item.title === title))
}

const getFortressesData = () => {
	return Promise.resolve(fortressesData)
}

const getMetroData = () => {
	return Promise.resolve(metroData)
}

const getHeapData = () => {
	return Promise.resolve(heapData)
}

const getSourcesData = () => {
	return Promise.resolve(sourcesData)
}

export default {
	getExcursionData,
	getInfoCard,
	getFortressesData,
	getMetroData,
	getHeapData,
	getSourcesData
}