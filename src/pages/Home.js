import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
	const navigate = useNavigate()

	return (
		<div>
			<h1>Сборник ресурсов по истории города</h1>
			<ul className='home-list'>
				<li className='home-item' onClick={() => navigate('/excursion')}>Экскурсия по западной части города</li>
				<li className='home-item' onClick={() => navigate('/fortresses')}>Про крепости на территории города</li>
				<li className='home-item' onClick={() => navigate('/metro')}>Про городское метро</li>
				<li className='home-item' onClick={() => navigate('/heap')}>Разные места и темы</li>
				<li className='home-item' onClick={() => navigate('/sources')}>Источники и ресурсы</li>
			</ul>
		</div>
	)
}

export default Home