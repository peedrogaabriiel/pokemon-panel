import React from 'react'
import history from './history'
import AppRoute from './app-route'
import routesNames from './routes-names'
import PokemonDetails from '../modules/pokemon-details'
import { Redirect, Router as ReactRouter, Switch } from 'react-router'

const Routes = () => (
	<ReactRouter history={history}>
		<Switch>
			<AppRoute component={PokemonDetails} path={routesNames.pokemon} />
			<Redirect to="/pokedex" />
		</Switch>
	</ReactRouter>
)

export default Routes
