import React from 'react'
import Move from './components/move'
import Stat from './components/stat'
import './styles.css'
import './types-styles.css'

const getBackSprites = (sprites) =>
	[
		sprites.back_default,
		sprites.back_female,
		sprites.back_shiny,
		sprites.back_shiny_female,
	].filter((item) => item)

const getFrontSprites = (sprites) =>
	[
		sprites.front_default,
		sprites.front_female,
		sprites.front_shiny,
		sprites.front_shiny_female,
	].filter((item) => item)

const PokemonDetailsComponent = ({
	pokemon,
	decreaseId,
	increaseId,
	onJumpNext,
	onJumpPrevious,
}) => {
	if (pokemon.id === undefined) return null

	const types = pokemon.types.sort((itemA, itemB) => itemA.slot - itemB.slot)
	const backSprites = getBackSprites(pokemon.sprites)
	const frontSprites = getFrontSprites(pokemon.sprites)

	const height = (pokemon.height / 10).toLocaleString('en')
	const weight = (pokemon.weight / 10).toLocaleString('en')

	return (
		<div className="container">
			<div className="identifier">
				<div onClick={onJumpPrevious} className="identifier-button">
					&lt;&lt;
				</div>
				<div onClick={decreaseId} className="identifier-button">
					&lt;
				</div>
				<div className="identifier-title">
					#{pokemon.id.toString().padStart(3, 0)} {pokemon.name}
				</div>
				<div onClick={increaseId} className="identifier-button">
					&gt;
				</div>
				<div onClick={onJumpNext} className="identifier-button">
					&gt;&gt;
				</div>
			</div>
			<div className="box sprites-front">
				<div className="box-title">Sprites front</div>
				<div className="sprite-container">
					{frontSprites.map((item, index) => (
						<img className="sprite" key={index} src={item} alt="" />
					))}
				</div>
			</div>
			<div className="box sprites-back">
				<div className="box-title">Sprites back</div>
				<div className="sprite-container">
					{backSprites.map((item, index) => (
						<img className="sprite" key={index} src={item} alt="" />
					))}
				</div>
			</div>
			<div className="box types">
				<div className="box-title">Type</div>
				<div className="types-container">
					{types.map(({ slot, type }) => (
						<div className={`type type-${type.name}`} key={slot}>
							{type.name}
						</div>
					))}
				</div>
			</div>
			<div className="box height">
				<div className="box-title">Height</div>
				<div className="height-value">{height}m</div>
			</div>
			<div className="box weight">
				<div className="box-title">Weight</div>
				<div className="weight-value">{weight}kg</div>
			</div>
			<div className="box abilities">
				<div className="box-title">Abilities</div>
				<div className="abilities-container">
					{pokemon.abilities.map((item) => (
						<div className="ability" key={item.slot}>
							{item.ability.name}
						</div>
					))}
				</div>
			</div>
			<div className="box stats">
				<div className="box-title">Stats</div>
				<div className="stats-container">
					{pokemon.stats.map((item) => (
						<Stat key={item.stat.name} item={item} />
					))}
				</div>
			</div>
			<div className="box moves">
				<div className="box-title">Moves</div>
				<div className="moves-container">
					<div className="move-header">Name</div>
					<div className="move-header">Type</div>
					<div className="move-header">Category</div>
					<div className="move-header">Power</div>
					<div className="move-header">Accuracy</div>
					<div className="move-header">PP</div>
					{pokemon.moves.map((item) => (
						<Move key={item.move.name} item={item.move} />
					))}
				</div>
			</div>
		</div>
	)
}

export default PokemonDetailsComponent
