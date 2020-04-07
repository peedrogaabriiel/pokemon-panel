import React from "react";
import "./styles.css";

const Pokemon = ({ name, url }) => {
  return (
    <div className="dragon-list">
      <article>
        <div className="div-row">
          <strong>Nome: {name}</strong>
          <p>Url: {url}</p>
        </div>
      </article>
    </div>
  );
};

export default Pokemon;
