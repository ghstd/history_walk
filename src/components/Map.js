import React, { useEffect, useRef } from 'react'
import L from 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css'

const Map = ({ cards }) => {
	const mapRef = useRef(null)

	useEffect(() => {
		mapRef.current = L.map('map').setView([48.475994, 34.964161], 13)
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(mapRef.current)

		// mapRef.current.on('click', (e) => {
		// 	console.log(e.latlng)
		// })
	}, [])

	useEffect(() => {
		const markers = []

		cards.forEach((card) => {
			if (!card.coords.length) {
				return
			}
			const icon = L.divIcon({
				className: 'map-icon',
				html: `${card.id}`,
				iconSize: [25, 20],
			})
			const marker = L.marker(card.coords, { icon }).addTo(mapRef.current)
			marker.on('click', () => {
				const target = document.querySelector(`[data-id="${card.id}"]`)
				target.scrollIntoView({ behavior: 'smooth' })
				target.classList.add('active')
				setTimeout(() => {
					target.classList.remove('active')
				}, 1500);
			})
			markers.push(marker)
		})

		return () => {
			markers.forEach((marker) => marker?.remove())
		}
	}, [cards])

	return (
		<div id='map'></div>
	)
}

export default Map