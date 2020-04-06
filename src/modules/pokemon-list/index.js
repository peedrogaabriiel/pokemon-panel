import React, { useEffect } from "react";
import Pokemon from "./components/pokemon";
import { Creators as loadPokemonCreators } from "../../ducks/load-pokemons";

import { connect } from "react-redux";

const PokemonList = ({ listPokemons, loadPokemons }) => {
  useEffect(() => {
    loadPokemons();
    console.log("listPokemons: ", listPokemons);
  }, [loadPokemons]);

  return <Pokemon />;
};

const mapStateToProps = ({ loadPokemons }) => ({
  listPokemons: loadPokemons.listPokemons,
});

const mapDispatchToProps = {
  loadPokemons: loadPokemonCreators.loadPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
