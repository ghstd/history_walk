import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './AppContext'
import './Header.css'

const Header = () => {
	const { state, actions } = useContext(Context)

	const themeBtnHandler = () => actions.switchTheme()

	return (
		<div className='container'>
			<div className={`header header-${state.theme}`}>
				<div className='logo'>
					<Link to='/'>Home</Link>
				</div>
				<button onClick={themeBtnHandler}>theme</button>
				<nav className='navigate'>
					<Link to='/excursion'>Excursion</Link>
					<Link to='/fortresses'>Fortresses</Link>
					<Link to='/metro'>Metro</Link>
					<Link to='/heap'>Heap</Link>
					<Link to='/sources'>Sources</Link>
				</nav>
			</div>
		</div>
	)
}

export default Header