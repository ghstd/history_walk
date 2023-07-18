import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info from './pages/Info'
import NotFound from './components/NotFound'
import Excursion from './pages/Excursion'
import Home from './pages/Home'
import AppContext from './components/AppContext'

const App = () => {

	return (
		<>
			<BrowserRouter>
				<AppContext>
					<Header />
					<Main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/excursion' element={<Excursion />} />
							<Route path='/excursion/:title' element={<Info />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Main>
					<Footer />
				</AppContext>
			</BrowserRouter>
		</>
	)
}

export default App