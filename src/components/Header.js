import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './AppContext'

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
					<Link to='/interesting'>Interesting</Link>
				</nav>
			</div>
		</div>
	)
}

export default Header