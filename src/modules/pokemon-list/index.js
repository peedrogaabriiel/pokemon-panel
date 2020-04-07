import React, { useEffect } from "react";
import { connect } from "react-redux";
import Pokemon from "./components/pokemon";
import { Creators as loadPokemonCreators } from "../../ducks/load-pokemons";

const PokemonList = ({ listPokemons, loadPokemons }) => {
  useEffect(() => {
    loadPokemons();
    console.log("listPokemons no component: ", listPokemons);
  }, [loadPokemons]);

  return !listPokemons ? (
    <div>
      {listPokemons.map((item, index) => (
        <Pokemon key={index} id={item.id} name={item.name} type={"item.type"} />
      ))}
    </div>
  ) : null;
};

const mapStateToProps = ({ loadPokemons }) => ({
  listPokemons: loadPokemons.listPokemons,
});

const mapDispatchToProps = {
  loadPokemons: loadPokemonCreators.loadPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
