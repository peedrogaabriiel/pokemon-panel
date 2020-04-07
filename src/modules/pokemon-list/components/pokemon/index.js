import React from "react";
import "./styles.css";

const Pokemon = ({ name, type }) => {
  return (
    <div className="dragon-list">
      <article>
        <div className="div-row">
          <strong>Nome: {name}</strong>
          <p>Tipo: {type}</p>
        </div>
      </article>
    </div>
  );
};

export default Pokemon;
