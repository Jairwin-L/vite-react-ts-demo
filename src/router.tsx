import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Demo from './pages/demo'

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Demo} />
		</Switch>
	</BrowserRouter>
)
export default Router