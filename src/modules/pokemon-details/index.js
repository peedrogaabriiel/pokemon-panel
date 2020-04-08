import React, { useEffect } from 'react'
import PokemonDetailscomponent from './component'
import { connect } from 'react-redux'
import { Creators as PokemonIdCreators } from '../../ducks/pokemon-id'

const PokemonDetails = ({
	loading,
	pokemon,
	currentId,
	decreaseId,
	increaseId,
	loadIdPokemon,
}) => {
	useEffect(() => {
		loadIdPokemon(currentId)
	}, [currentId])

	const onNext = () => increaseId()
	const onPrevious = () => decreaseId()
	const onJumpNext = () => increaseId(10)
	const onJumpPrevious = () => decreaseId(10)

	return loading ? null : (
		<PokemonDetailscomponent
			pokemon={pokemon}
			increaseId={onNext}
			decreaseId={onPrevious}
			onJumpNext={onJumpNext}
			onJumpPrevious={onJumpPrevious}
		/>
	)
}

const mapStateToProps = ({ pokemonId }) => ({
	loading: pokemonId.loading,
	pokemon: pokemonId.pokemon,
	currentId: pokemonId.currentId,
})

const mapDispatchToProps = {
	decreaseId: PokemonIdCreators.decreaseId,
	increaseId: PokemonIdCreators.increaseId,
	loadIdPokemon: PokemonIdCreators.loadIdPokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
