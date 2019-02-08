import React, { Suspense, lazy } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

const Nav = lazy(() => import('./components/Nav'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const NotFound = lazy(() => import('./components/NotFound'))

function App() {
	return (
		<>
			<Suspense
				fallback={
					<h1 style={{ textAlign: 'center', marginTop: '10%' }}>Loading...</h1>
				}
			>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route component={NotFound} />
				</Switch>
			</Suspense>
		</>
	)
}

export default App
