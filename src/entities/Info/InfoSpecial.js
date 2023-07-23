import React from 'react'
import utils from '../../utils'

const InfoSpecial = ({ special }) => {
	return !special.length ? null : (
		<>
			<h3>Заметки</h3>
			<div>
				{
					special.map((item, i) => (
						<div key={i}>
							<div>{item.label}</div>
							<div>
								{
									!item.links.length
										? null
										: item.links.map((link, i) => (
											<div key={i}>
												<a href={link} target='_blank'>{utils.parseLink(link)}</a>
											</div>
										))
								}
							</div>
						</div>
					))
				}
			</div>
		</>
	)
}

export default InfoSpecial