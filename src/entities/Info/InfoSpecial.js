import React from 'react'
import utils from '../../utils'
import './InfoSpecial.css'

const InfoSpecial = ({ special }) => {
	return !special.length ? null : (
		<>
			<h3 className='info-special-title'>Заметки</h3>
			{
				special.map((item, i) => (
					<div key={i}>
						<div className='info-special-subtitle'>{item.label}</div>
						<ul className='info-special-list'>
							{
								!item.links.length
									? null
									: item.links.map((link, i) => (
										<li key={i}>
											<a href={link} target='_blank'>{utils.parseLink(link)}</a>
										</li>
									))
							}
						</ul>
					</div>
				))
			}
		</>
	)
}

export default InfoSpecial