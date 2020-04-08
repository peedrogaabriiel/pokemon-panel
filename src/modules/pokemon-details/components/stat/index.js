import React from 'react'
import './styles.css'

const names = {
	hp: 'HP',
	speed: 'Speed',
	attack: 'Attack',
	defense: 'Defense',
	'special-attack': 'Sp. Atk',
	'special-defense': 'Sp. Def',
}

const Stat = ({ item }) => (
	<div className="stat-container">
		<div className="stat-name">{names[item.stat.name]}</div>
		<div className="stat-value">{item.base_stat}</div>
	</div>
)

export default Stat
