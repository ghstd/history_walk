import data from './db/excursion.json'

const getAllData = () => {
	return Promise.resolve(data)
}

const getInfoCard = (title) => {
	return Promise.resolve(data.find((item) => item.title === title))
}

export default { getAllData, getInfoCard }