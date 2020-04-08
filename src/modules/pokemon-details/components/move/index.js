import React, { useState, useEffect } from 'react'
import HttpService from '../../../../services'
import './styles.css'

const Move = ({ item }) => {
	const [data, setData] = useState(null)

	const load = async () => {
		const data = await HttpService.get(item.url)
		setData(data)
	}

	useEffect(() => {
		load()
	}, [])

	if (!data) return null

	const damageClass = data.damage_class.name
	const typeName = data.type.name

	return (
		<>
			<div className="move-attribute">{data.name}</div>
			<div className={`move-attribute type-${typeName}`}>{typeName}</div>
			<div className={`move-attribute damage-${damageClass}`}>
				{damageClass}
			</div>
			<div className="move-attribute">{data.power || '--'}</div>
			<div className="move-attribute">{data.accuracy || '--'}%</div>
			<div className="move-attribute">{data.pp}</div>
		</>
	)
}

export default Move
