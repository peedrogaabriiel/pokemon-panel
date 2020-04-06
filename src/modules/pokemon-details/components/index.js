import React from "react";
import "./styles.css";

const PokemonDetailComponent = ({ name, type }) => {
  return (
    <div className="dragon-details">
      <h1>Nome: {name}</h1>
      <p>Tipo: {type}</p>
    </div>
  );
};
export default PokemonDetailComponent;
