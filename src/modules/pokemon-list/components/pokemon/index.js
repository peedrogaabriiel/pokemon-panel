import React from "react";
import "./styles.css";

const Pokemon = ({ authenticated }) => {
  return (
    <div className="dragon-list">
      <article>
        <div className="div-row">
          <strong>Nome: fjfgj</strong>
          <p>Tipo: ghjghjfg</p>
        </div>
        {authenticated ? (
          <div className="div-row-options">
            <p>asdasdasdasdas</p>
          </div>
        ) : null}
      </article>
    </div>
  );
};

export default Pokemon;
