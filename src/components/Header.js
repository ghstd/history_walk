import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './AppContext'
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
	const { actions } = useContext(Context)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const themeBtnHandler = () => actions.switchTheme()
	const menuBtnHandler = () => setIsMenuOpen((prev) => !prev)

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__body'>
					<div className='logo'>
						<Link to='/'>Home</Link>
					</div>
					<div className={`menu ${isMenuOpen ? 'active' : ''}`}>
						<div className='controls'>
							<button className='menu-theme' onClick={themeBtnHandler}>theme</button>
							<GiHamburgerMenu className='menu-toggle' onClick={menuBtnHandler} />
						</div>
						<nav className='navigate'>
							<Link to='/excursion'>Excursion</Link>
							<Link to='/fortresses'>Fortresses</Link>
							<Link to='/metro'>Metro</Link>
							<Link to='/heap'>Heap</Link>
							<Link to='/sources'>Sources</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header