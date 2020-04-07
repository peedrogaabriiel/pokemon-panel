import React from "react";
import history from "./history";
import AppRoute from "./app-route";
import routesNames from "./routes-names";
import { Redirect, Router as ReactRouter, Switch } from "react-router";
import PokemonList from "../modules/pokemon-list";
import PokemonDatails from "../modules/pokemon-details";

const Routes = () => (
  <ReactRouter history={history}>
    <Switch>
      <AppRoute component={PokemonList} path={routesNames.pokemon} />
      <AppRoute component={PokemonDatails} path={routesNames.pokemonId} />
      <Redirect to="/pokedex" />
    </Switch>
  </ReactRouter>
);

export default Routes;
