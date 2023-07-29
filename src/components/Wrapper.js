import React, { useContext } from 'react'
import { Context } from './AppContext'
import './Wrapper.css'

const Wrapper = ({ children }) => {
	const { state } = useContext(Context)

	return (
		<div className={`wrapper ${state.theme}`}>{children}</div>
	)
}

export default Wrapper