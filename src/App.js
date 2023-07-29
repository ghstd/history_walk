import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Excursion from './pages/Excursion'
import Home from './pages/Home'
import AppContext from './components/AppContext'
import Fortresses from './pages/Fortresses'
import Metro from './pages/Metro'
import Heap from './pages/Heap'
import Sources from './pages/Sources'
import Wrapper from './components/Wrapper'

const App = () => {

	return (
		<BrowserRouter>
			<AppContext>
				<Wrapper>
					<Header />
					<Main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/excursion' element={<Excursion />} />
							<Route path='/excursion/:title' element={<Info />} />
							<Route path='/fortresses' element={<Fortresses />} />
							<Route path='/metro' element={<Metro />} />
							<Route path='/heap' element={<Heap />} />
							<Route path='/sources' element={<Sources />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</Main>
					<Footer />
				</Wrapper>
			</AppContext>
		</BrowserRouter>
	)
}

export default App