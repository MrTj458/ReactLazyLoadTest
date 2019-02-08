import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

const Nav = React.lazy(() => import('./components/Nav'))
const Home = React.lazy(() => import('./components/Home'))
const About = React.lazy(() => import('./components/About'))
const NotFound = React.lazy(() => import('./components/NotFound'))

function App() {
	return (
		<>
			<React.Suspense
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
			</React.Suspense>
		</>
	)
}

export default App
