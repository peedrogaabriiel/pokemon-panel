import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Pokemon = ({ name, url }) => {
  return (
    <div className="dragon-list">
      <article>
        <div className="div-row">
          <strong>Nome: {name}</strong>
          <p>Url: {url}</p>
          <Link to={`${url}`}>Ver detalhes</Link>
        </div>
      </article>
    </div>
  );
};

export default Pokemon;
