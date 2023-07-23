import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
	const navigate = useNavigate()

	return (
		<div>
			<h1>Сборник ресурсов по истории города</h1>
			<ul className='home-list'>
				<li className='home-item' onClick={() => navigate('/excursion')}>
					<h2>Excursion</h2>
					<p>Экскурсия по западной части города</p>
				</li>
				<li className='home-item' onClick={() => navigate('/fortresses')}>
					<h2>Fortresses</h2>
					<p>Про крепости на территории города</p>
				</li>
				<li className='home-item' onClick={() => navigate('/metro')}>
					<h2>Metro</h2>
					<p>Про городское метро</p>
				</li>
				<li className='home-item' onClick={() => navigate('/heap')}>
					<h2>Heap</h2>
					<p>Разные места и темы</p>
				</li>
				<li className='home-item' onClick={() => navigate('/sources')}>
					<h2>Sources</h2>
					<p>Источники и ресурсы</p>
				</li>
			</ul>
		</div>
	)
}

export default Home