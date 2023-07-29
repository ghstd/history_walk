import React from 'react'
import utils from '../../utils'
import './InfoLinks.css'

const InfoLinks = ({ links }) => {
	return !links.length ? null : (
		<>
			<h3 className='info-links-title'>Источники</h3>
			<ul className='info-links-list'>
				{
					links.map((link, i) => (
						<li key={i}>
							<a href={link} target='_blank'>{utils.parseLink(link)}</a>
						</li>
					))
				}
			</ul>
		</>
	)
}

export default InfoLinks