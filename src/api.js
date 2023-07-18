import data from './db.json'

const getAllData = () => {
	return Promise.resolve(data)
}

const getInfoCard = (title) => {
	return Promise.resolve(data.find((item) => item.title === title))
}

export default { getAllData, getInfoCard }